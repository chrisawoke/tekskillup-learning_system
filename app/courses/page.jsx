import React from 'react'
import Hero from './ui/hero'
import { openSans } from './ui/fonts'
import Platform from './ui/getStarted'
import TopCourses from './ui/topCourses'
import PopularCats from './ui/popularCats'
import UpcomingCourses from './ui/upcomingCourses'
import PopularInstructors from './ui/popularInstructors'

const page = () => {
    return (
        <section className={`max-width ${openSans.className} antialiased mx-auto`}>
            <Hero />
            <Platform />
            <TopCourses />
            <PopularCats />
            <UpcomingCourses />
            <PopularInstructors />
        </section>
    )
}

export default page