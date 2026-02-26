import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "../../components/draggable-card";
import img1 from "../../assets/playGroup/gallery/GalleryImg1.jpg";
import img2 from "../../assets/playGroup/gallery/GalleryImg2.jpg";
import img3 from "../../assets/playGroup/gallery/GalleryImg3.avif";
import img4 from "../../assets/playGroup/gallery/GalleryImg4.webp";
import img5 from "../../assets/playGroup/gallery/GalleryImg5.webp";
import img6 from "../../assets/playGroup/gallery/GalleryImg6.webp";
import img7 from "../../assets/playGroup/gallery/GalleryImg7.jpg";

const DraggableCardDemo = () => {
  const items = [
    {
      title: "Little Hands, Big Imagination",
      image: img1,
      className: "absolute top-40 left-[20%] rotate-[-5deg]",
    },
    {
      title: "Moments of Pure Joy",
      image: img2,
      className: "absolute top-70 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Discovering the World Through Play",
      image: img3,
      className: "absolute top-30 left-[40%] rotate-[8deg]",
    },
    {
      title: "Exploring with Courage",
      image: img4,
      className: "absolute top-50 left-[55%] rotate-[10deg]",
    },
    {
      title: "Learning Through Movement",
      image: img5,
      className: "absolute top-40 right-[35%] rotate-[2deg]",
    },
    {
      title: "Growing Together",
      image: img6,
      className: "absolute top-64 left-[45%] rotate-[-7deg]",
    },
    {
      title: "Guided with Care",
      image: img7,
      className: "absolute top-59 left-[30%] rotate-[4deg]",
    },
  ];
  return (
    <DraggableCardContainer className="relative bg-[#E8E6F8] flex min-h-screen w-full items-center justify-center overflow-clip">
      <p className="absolute top-1/2 mx-auto max-w-lg -translate-y-3/4 text-center text-2xl font-bold text-primary md:text-4xl font-heading">
        Where Little Hands Begin Their Big Journey.
      </p>
      {items.map((item) => (
        <DraggableCardBody className={item.className}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-80 w-80 object-cover"
          />
          <h3 className="mt-4 text-center font-body text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
};

export default DraggableCardDemo;
