"use client";
import React from "react";
import  StickyScroll  from "../sticky-scroll-reveal";
import img1 from "../../assets/waldor Education/sticky scroll/child1.avif"
import img2 from "../../assets/waldor Education/sticky scroll/Grade.avif"
import img3 from "../../assets/waldor Education/sticky scroll/Adolescence.avif"

const content = [
  {
    title: "Early Childhood (0–7 Years)",
    description:
      "In the early years, children learn through imitation, movement and imaginative play. Education at this stage nurtures creativity and protects the child’s sense of wonder.",
    image: img1,
  },
  {
    title: "Grade School (7–14 Years)",
    description:
      "As children grow, learning connects deeply with feeling and experience. Stories, art, music and movement bring subjects to life in meaningful ways.",
    image: img2,
  },
  {
    title: "Adolescence (14+ Years)",
    description:
      "During adolescence, young people develop independent thinking and clarity of judgment. Education supports intellectual depth and social responsibility.",
    image: img3,
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="w-full ">
      <StickyScroll content={content} />
    </div>
  );
}
