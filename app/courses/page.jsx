import React from 'react'
import Hero from './ui/hero'
import { openSans } from './ui/fonts'
import Platform from './ui/getStarted'
import PopularCats from './ui/popularCats'
import UpcomingCourses from './ui/upcomingCourses'
import PopularInstructors from './ui/popularInstructors'
import TopCourses from './ui/topCourses'

const page = () => {
    return (
        <section className={`${openSans.className} antialiased mx-auto`}>
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