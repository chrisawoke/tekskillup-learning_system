import React from 'react'
import { CategoryCard, CourseCard } from './card';

export const CourseCardWrapper = ({ currCourses }) => {
    return (
        <div className='w-full flex flex-wrap gap-4 md:gap-0'>
            {currCourses.map((course, index) => (
                <div key={index} className='w-full md:w-1/2 lg:w-1/3'>
                    <CourseCard course={course} />
                </div>
            ))}
        </div>
    )
}

// -------------------- TODO: MAKE POPULAR CATEGORIES SECTION STACK ON MULTIPLE ROWS ---------
// export const CategoryWrapper = ({ currCategories }) => {
//     return (
//         <div className='w-full flex flex-wrap gap-4 md:gap-0'>
//             {currCategories.map((category, index) => (
//                 <div key={index} className='w-full sm:w-1/2 md:w-1/3 bg-red-500 h-[300px]'>
//                     <CategoryCard category={category} />
//                 </div>
//             ))}
//         </div>
//     )
// }