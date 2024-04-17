// Places.js
import React, { useState } from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/boat.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/water.jpg";
import Img4 from "../../assets/places/place4.jpg";
import Img5 from "../../assets/places/place5.jpg";
import Img6 from "../../assets/places/place6.jpg";

const PlacesData = [
  {
    img: Img1,
    title: "Boat",
    location: "USA",
    description: "Experience tranquility on the water with our charming boat house rentals. Unwind amidst serene surroundings and create lasting memories on your waterfront retreat.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img2,
    title: "Taj Mahal",
    location: "India",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "Underwater",
    location: "US",
    description:
    "Dive into luxury with our exclusive underwater house accommodations. Immerse yourself in the mesmerizing beauty of the ocean while enjoying unparalleled comfort and adventure.",
    price: 6200,
    type: "Cultural Relax",
  },
  {
    img: Img4,
    title: "Sydney",
    location: "USA",
    description: "Sydney, a vibrant city on the coast, blends iconic landmarks with stunning beaches, offering a perfect fusion of urban excitement and coastal relaxation.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img5,
    title: "Los Angeles",
    location: "United states",
    description:
    "Los Angeles, the entertainment capital of the world, boasts sun-kissed beaches, iconic landmarks, and a vibrant cultural scene, making it a must-visit destination for travelers seeking the ultimate California experience.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img6,
    title: "Los Vegas",
    location: "California",
    description:
    "Las Vegas, the dazzling entertainment hub of the desert, beckons with its world-class casinos, electrifying shows, and non-stop nightlife, promising an unforgettable escape into the glitz and glamour of Sin City.",
    price: 6200,
    type: "Cultural Relax",
  },
];

const Places = ({ handleOrderPopup }) => {
  const [wishlist, setWishlist] = useState([]);

  // Function to toggle wishlist item
  const toggleWishlist = (title) => {
    if (wishlist.includes(title)) {
      setWishlist(wishlist.filter((item) => item !== title));
    } else {
      setWishlist([...wishlist, title]);
    }
  };

  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                toggleWishlist={toggleWishlist}
                wishlist={wishlist}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
