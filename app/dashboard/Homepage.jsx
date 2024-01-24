"use client"

import Card from "./Card"
import LineChart from "./LineChart"
import { ProgressCircle } from "./ProgressCircle"
import { IoIosPeople } from "react-icons/io";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import { MdOutlinePlayLesson } from "react-icons/md";
import { FaUserCheck, FaList } from "react-icons/fa";

const homepage = () => {
  return (
    <main className="bg-[#F2F4F7]">
        <div className="mx-auto max-width">
            <div className="padding-x padding-y">
                <div className="bg-white py-5 px-4 w-full shadow-md">
                    <p className="font-semibold">DashBoard</p>
                </div>

                {/* Line chart */}
                <div className="h-[400px] bg-white px-4 py-5 my-5 shadow-md w-full">
                    <LineChart />
                </div>

                {/* Details on courses */}
                <div className='grid gap-1 grid-cols-12'>
                    <Card icon={<FaList />} count='16' text='Number of courses' />
                    <Card icon={<MdOutlinePlayLesson />} count='145' text='Number of lessons' />
                    <Card icon={<FaUserCheck />} count='25' text='Number of enrollment' />
                    <Card icon={<IoIosPeople />} count='8' text='Number of student' />
                </div>

                {/* progress circle */}
                <div className="flex flex-col md:flex-row gap-10">
                    <div className='w-full md:w-[35%] p-5 md:px-3 lg:px-5 bg-white mt-5 shadow-md'>
                        <p className="uppercase text-[1rem]">Course Overview</p>
                        <div className="flex-center my-8">
                            <ProgressCircle size="125" progress="0.9"/>
                        </div>
                        <div className="flex gap-10 md:gap-5 lg:gap-0 sm:justify-between py-4 px-6 md:px-0 lg:px-6">
                            <div className="flex flex-col items-center">
                                <FaArrowTrendUp className="text-green_600" />
                                <h2 className='font-semibold text-[2rem]'>16</h2>
                                <p className="text-center">Active courses</p>
                            </div>
                            <div className="flex flex-col items-center">
                            <FaArrowTrendDown className="text-[#FFA500]"/>
                                <h2 className='font-semibold text-[2rem]'>1</h2>
                                <p className="text-center">pending courses</p>
                            </div>
                        </div>
                    </div>

                    {/* withdrawal section */}
                    <div className='w-full md:w-[65%] p-5 bg-white md:max-h-[300px] lg:max-h-[200px] mt-5 shadow-md px-6'>
                        <p className="uppercase text-[1rem]">request withdrawal</p>
                        <hr className="my-4" />
                        <div className="flex flex-col lg:flex-row gap-10 lg:gap-40 py-4">
                            <div>
                                <h2 className='font-semibold text-[0.9rem] mb-2 lg:mb-3'>Matthew Anderson</h2>
                                <p className="font-semibold text-sm">Email: <span className="font-normal">instructor@example.com</span></p>
                            </div>
                            <div>
                                <h2 className='font-semibold text-[0.9rem] mb-2 lg:mb-3'>$255</h2>
                                <p className="text-sm">Requested withdrawal amount</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default homepage