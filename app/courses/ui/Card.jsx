import StarRating from './starRating';
import Link from 'next/link';
import Image from 'next/image';

export const CourseCard = ({ course }) => {
    return (
        <Link key={course.courseId} href={`/course/${course.courseId}`} className='cursor-pointer w-full'>
            <div className="">
                <div className="transition-transform duration-300 ease-in-out transform hover:scale-103 hover:-translate-y-2 hover:shadow-lg shadow-card-100 p-4 rounded-lg md:m-4 xs:mb-6">
                    <Image
                        src={course.image}
                        alt={course.title}
                        width={640}
                        height={200}
                        className="rounded-md"
                    />
                    <div className="flex items-center my-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#0A6A56"
                            className="w-6 h-6 mr-2">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                        </svg>
                        <span className="text-gray-500">{course.plays} plays</span>
                    </div>

                    <p className="text-base font-bold">{course.title}</p>
                    <div className="mt-4 flex flex-col">
                        <div className='flex items-center justify-between'>
                            <span className="mr-3 font-bold">${course.price}</span>
                            <div className="flex items-center">
                                <div className='mr-2'>
                                    <StarRating rating='4.4' />
                                </div>
                                <span className="text-gray-600 font-light text-sm">{course.rating} Ratings</span>
                            </div>
                        </div>
                        <hr className='my-4' />

                        <div className="flex items-center justify-between my-4">
                            <div className='flex items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" width="18px" height="18px">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                <span className="text-gray-500 text-sm">
                                    {`${course.students} ${course.students > 1 ? 'Students' : 'Student'}`}
                                </span>
                            </div>

                            <button className="custom-btn">
                                &#10230;
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </Link>
    )
}


// ------------------ TODO: FIX POPULAR CATEGORIES TO HAVE MULTIPLE ROWS ----------------
// export const CategoryCard = ({ category }) => {
//     <div className=''>
//         <div className="flex rounded-lg p-3 my-4 shadow-card-100  cursor-pointer" >
//             <div className='mr-4 p-4 bg-[#04AA15] bg-opacity-15 rounded-full border-4 border-[#04AA15] w-[64px] h-[64px]'>
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#04AA15" className="w-6 h-6">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
//                 </svg>
//             </div>
//             <div className=''>
//                 <p className="text-lg  font-bold">{category.name}</p>
//                 <p className="text-base  text-gray-400">{category.count} Courses</p>
//             </div>
//         </div>
//     </div>
// }