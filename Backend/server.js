const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const cors  = require('cors');

PORT=8080;

// connect to db
let db;
(async () => {
	db = await open({
		filename: 'Management_Data.db',
		driver: sqlite3.Database
	});
})();

app = express();
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.json());
app.use(cors());


async function updateApartmentAvailability(db) {
  try {
    const _ApartmentIDs = await db.all(`SELECT _ApartmentID FROM FactLease`);

    for (const row of _ApartmentIDs) {
      await db.run(`
        UPDATE DimApartment
        SET IsAvailable = CASE
          WHEN _ApartmentID IN (
            SELECT _ApartmentID FROM FactLease WHERE IsCurrentLease = 1
          ) THEN 0
          ELSE 1
        END
        WHERE _ApartmentID = ?
      `, row._ApartmentID);
    }

    console.log("Apartment availability updated.");
  } catch (error) {
    console.error("Failed to update apartment availability:", error);
  }
}

app.post('/update-availability', async (req, res) => {
	await updateApartmentAvailability(db)
});

app.post('/end-lease', async (req, res) => {
  try {
    const { _ResidentID } = req.body;

    // Update the lease to no longer be current
    await db.run(
      `UPDATE FactLease SET IsCurrentLease = 0 WHERE _ResidentID = ?`,
      _ResidentID
    );

	// Update DimApartment Aswell 
    await db.run(
      `UPDATE DimApartment
       SET IsAvailable = 1
       WHERE _ApartmentID IN (
         SELECT _ApartmentID FROM FactLease WHERE _ResidentID = ?
       )`,
      _ResidentID
    );

    res.json({ message: 'Lease ended successfully.' });
  } catch (error) {
    console.error('Error ending lease:', error);
    res.status(500).json({ error: 'Failed to end lease.' });
  }
});



app.post('/add-resident', async (req, res) => {
  try {
    const {
      FirstName,
      LastName,
      Email,
      PhoneNumber,
      ApartmentID,
      MoveInDate,
      MoveOutDate,
      MonthlyRent,
      _StatusID
    } = req.body;

	const toDate = (yyyymmdd) => {
      const str = yyyymmdd.toString();
      const year = +str.slice(0, 4);
      const month = +str.slice(4, 6) - 1; 
      const day = +str.slice(6, 8);
      return new Date(year, month, day);
    };

	const moveIn = toDate(MoveInDate);
    const moveOut = toDate(MoveOutDate);

    // Calculate lease term in months
    const leaseTermMonths =
      (moveOut.getFullYear() - moveIn.getFullYear()) * 12 +
      (moveOut.getMonth() - moveIn.getMonth());

    // 1. Insert into DimResident
    const result = await db.run(
      `INSERT INTO DimResident (LastName, FirstName, PhoneNumber, MoveInDate,MoveOutDate,Email, _StatusID)
       VALUES (?, ?, ?, ?, ?, ?,?)`,
      [LastName, FirstName, PhoneNumber,MoveInDate,MoveOutDate,Email, _StatusID]
    );

    const newResidentId = result.lastID;

    // 2. Insert into FactLease
    await db.run(
      `INSERT INTO FactLease (_ResidentID, _ApartmentID, MoveInDate, MoveOutDate, MonthlyRent,LeaseTermMonths, IsCurrentLease)
       VALUES (?, ?, ?, ?, ?,?, 1)`,
      [newResidentId, ApartmentID, MoveInDate, MoveOutDate, MonthlyRent,leaseTermMonths]
    );

	await updateApartmentAvailability(db);

    res.status(201).json({ message: 'Resident and lease added successfully' });

  } catch (error) {
    console.error('Error adding resident and lease:', error);
    res.status(500).json({ error: 'Failed to add resident and lease' });
  }
});





app.get('/rentals', async (req, res) => {
	try {
		const availableApartments = await db.all("SELECT * FROM vw_AvailableApartments");
		console.log(availableApartments)
		res.json(availableApartments);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal server error" });
	}
});


app.get('/dim-apartments', async (req,res) => {
	try{
		const apt = await db.all("SELECT * FROM vw_AvailableApartments")
		console.log(apt)
		res.json(apt)
	} catch(error){ 
		console.log(error)
		res.stats(500).json({error: "Couldn't Return Available Apartments"})
	}
})

app.get('/dim-residents', async (req,res) => {
	try{
		const resident = await db.all("select * From vw_PositiveStatusResidents")
		console.log(resident)
		res.json(resident)
	} catch(error){
		console.log(error)
		res.status(500).json({error: "Couldnt Return Current Positive Standing Residents"})
	}
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
