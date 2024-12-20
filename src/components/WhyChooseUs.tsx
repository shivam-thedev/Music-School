"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
    {
      "title": "Discover the Joy of Music",
      "description": "Embark on a transformative musical journey where passion meets expertise. Our school offers a nurturing environment for students of all ages and skill levels to explore and master their favorite instruments, vocal techniques, and the art of performance. Whether you're a beginner or an advanced musician, our courses are designed to inspire and elevate your talent."
    },
    {
      "title": "Expert Instruction and Personalized Guidance",
      "description": "Learn from accomplished musicians and dedicated educators who tailor each lesson to your unique goals. Our instructors bring years of experience and a deep commitment to helping every student grow, providing the tools and motivation to succeed in their musical pursuits."
    },
    {
      "title": "State-of-the-Art Facilities and Resources",
      "description": "Experience the difference of learning in a space designed for creativity and excellence. Our school features modern classrooms, high-quality instruments, and cutting-edge technology to enhance your musical education and ensure you have everything you need to thrive."
    },
    {
      "title": "Opportunities to Shine and Perform",
      "description": "Take the stage with confidence through our regular recitals, concerts, and community events. Our performance-focused programs are designed to build your stage presence, refine your skills, and celebrate your progress in front of supportive audiences."
    },
    {
      "title": "Flexible Learning Options to Suit Your Lifestyle",
      "description": "Whether you prefer the convenience of online lessons or the personal connection of in-person sessions, we’ve got you covered. Our flexible scheduling and diverse class offerings ensure that music fits seamlessly into your life, no matter your schedule or location."
    }
  ]
  

export default function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={musicSchoolContent}></StickyScroll>
    </div>
  )
}
