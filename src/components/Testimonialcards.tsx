'use client'
import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'

const musicSchoolTestimonials = [
    {
      "quote": "The instructors here are amazing! They truly care about each student’s growth and make learning music a joyful experience.",
      "name": "Emily Johnson",
      "title": "Parent of a Piano Student"
    },
    {
      "quote": "Joining this music school has been the best decision of my life. The lessons are personalized, and the performance opportunities are incredible!",
      "name": "James Carter",
      "title": "Guitar Student"
    },
    {
      "quote": "I’ve always wanted to learn to sing, and the vocal lessons here have been a game-changer. I feel more confident and technically sound than ever before.",
      "name": "Sophia Martinez",
      "title": "Vocal Student"
    },
    {
      "quote": "The facilities are top-notch, and the staff is so supportive. My son loves his drum lessons and looks forward to class every week.",
      "name": "Michael Lee",
      "title": "Parent of a Drum Student"
    },
    {
      "quote": "What sets this school apart is the passion of the instructors and the community they’ve built. It’s a place where talent is nurtured, and everyone is encouraged to grow.",
      "name": "Olivia Brown",
      "title": "Advanced Violin Student"
    }
  ]
  

export default function MusicSchoolTestimonials() {
  return (
    <div className='h-[40rem] w-full dark:bg-black dark:bg-dot-white/[0.2] flex flex-col justify-center overflow-hidden'>
        <h2 className='text-5xl font-bold text-center mb-8 max-md:text-3xl max-md:mx-4'>Hear our Harmony: voices of success</h2>
        <div className='flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8'>
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={musicSchoolTestimonials}
                direction="right"
                speed="slow"
            />
            </div>
        </div>
    </div>
  )
}
