import React from 'react'
import Card from './Card';

const CardWrapper = ({ currCourses }) => {
    console.log(currCourses)
    return (
        <div className='w-full flex flex-wrap'>
            {currCourses.map((course, index) => (
                <div key={course.id} className='w-full md:w-1/2 lg:w-1/3'>
                    <Card course={course} />
                </div>
            ))}
        </div>
    )
}

export default CardWrapper;