import { Carousel } from "./ui/Carousel";

const slides = [
  { src: "/images/apt.png", title: "Apartment 1" },
  { src: "/images/apt2.png/", title: "Apartment 2" },
  { src: "/images/gym.jpg", title: "Community 1" },
  { src: "/images/outside.png", title: "Community 2" },
];

export default function Gallery() {
  return (
    <div>
      {}
      <div
        className="overflow-hidden flex flex-col items-center justify-center"
      >
        <h2 className="text-3xl font-bold mb-6">Gallery</h2>
        <Carousel slides={slides} />
      </div>
    </div>
  );
}
