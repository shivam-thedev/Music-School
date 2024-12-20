import React from 'react';
import Link from 'next/link';
import { HoverEffect } from './ui/card-hover-effect';

const featuredWebinars = [
    {
      "title": "Mastering the Piano: Techniques for All Levels",
      "description": "Learn essential piano techniques and tips for improving your playing, whether you're a beginner or an advanced student. Join our expert pianist for an interactive session.",
      "slug": "mastering-the-piano",
      "isFeatured": true
    },
    {
      "title": "The Art of Songwriting: Crafting Memorable Lyrics and Melodies",
      "description": "Discover the secrets to writing captivating songs with guidance from a professional songwriter. Perfect for aspiring and experienced songwriters.",
      "slug": "art-of-songwriting",
      "isFeatured": true
    },
    {
      "title": "Jazz Improvisation 101: Unlock Your Creativity",
      "description": "Explore the fundamentals of jazz improvisation and learn how to create spontaneous, expressive solos. Ideal for instrumentalists and vocalists alike.",
      "slug": "jazz-improvisation-101",
      "isFeatured": true
    },
    {
      "title": "Vocal Mastery: Techniques for Singers",
      "description": "Improve your vocal skills with proven techniques for breath control, tone quality, and performance. Led by a renowned vocal coach.",
      "slug": "vocal-mastery",
      "isFeatured": true
    },
    {
      "title": "Music Production Basics: From Idea to Track",
      "description": "Get hands-on experience with music production tools and workflows. Learn how to transform your musical ideas into polished tracks.",
      "slug": "music-production-basics",
      "isFeatured": true
    }
  ]
  

export default function UpcomingWebinars() {
  return (
    <div className='p-14 bg-gray-950'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
            <div className='text-center'>
                <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>FEATURED WEBINARS</h2>
                <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Enhance Your Musical Journey</p>
            </div>
            <div className='mt-10'>
            <div className="max-w-5xl mx-auto px-8">
                <HoverEffect items={featuredWebinars.map((webinar)=>(
                    {
                        title:webinar.title,
                        description:webinar.description,
                        link:webinar.slug
                    }
                ))}/>
            </div>
            </div>
            <div className='text-center mt-10'>
            <Link href={"/courses"} className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200'>View All webinars</Link>
            </div>
        </div>
    </div>
  )
}
