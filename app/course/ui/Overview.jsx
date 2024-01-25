"use client";

import { useState, useCallback, memo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Schedule, InstructorCard, ReviewCard } from "@/app/course/ui";
import PriceCard from "./PriceCard";
import TimeCard from "./TimeCard";
import Description from "./Description";
import { FaArrowDown } from "react-icons/fa";

const Overview = memo(({ course }) => {
  const [visibleContent, setVisibleContent] = useState({
    id: "description",
    label: "Course Description",
  });
  const [chooseContentVisible, setChooseContentVisible] = useState(false);

  const navItems = [
    { id: "description", label: "Course Description" },
    { id: "curriculum", label: "Curriculum" },
    { id: "schedule", label: "Class Schedule" },
    { id: "instructors", label: "Instructors" },
    { id: "reviews", label: "Reviews" },
  ];

  const handleSetContentVisible = useCallback((content) => {
    setVisibleContent(content);
  }, []);

  const renderContent = () => {
    switch (visibleContent.id) {
      case "description":
        return (
          <Description
            description={course.description}
            studentsAmount={course.studentsAmount}
          />
        );
      case "schedule":
        return <Schedule schedule={course.schedule} />;
      case "instructors":
        return (
          <div className="flex flex-wrap justify-between">
            {course.instructors.map((instructor) => (
              <InstructorCard key={instructor.id} instructor={instructor} />
            ))}
          </div>
        );
      case "reviews":
        return (
          <div>
            {course.reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="flex h-full flex-col items-center justify-between gap-10 md:flex-row">
      <div className="mt-20 hidden flex-col gap-20 md:flex md:w-[27%]">
        {/* Selected nav item indicator */}
        <div className="flex gap-7">
          <div className="relative">
            <div className="absolute h-full w-1 rounded-full bg-gray-200" />
          </div>

          {/*Desktop Nav */}
          <div className="flex flex-col justify-start gap-5 text-left text-3xl font-bold">
            {navItems.map((item) => {
              if (item.id === "curriculum") {
                return (
                  <Link
                    key={item.id}
                    className="text-gray-300"
                    href={"#curriculum"}
                  >
                    Curriculum
                  </Link>
                );
              } else {
                return (
                  <button
                    className={`text-left relative ${
                      visibleContent.id === item.id
                        ? "text-black"
                        : "text-gray-300"
                    }`}
                    onClick={() => handleSetContentVisible(item)}
                    key={item.id}
                  >
                    {visibleContent.id === item.id && (
                      <motion.div
                        layoutId="active-tab"
                        className="absolute -left-7 h-[110%] w-1 rounded-full bg-primary_700"
                      />
                    )}
                    {item.label}
                  </button>
                );
              }
            })}
          </div>
        </div>

        {/* Desktop price card */}
        <div className="flex flex-col gap-10">
          {/* Price */}
          <PriceCard
            courseID={course.id}
            price={course.pricePerMonth}
            access={course.accessAmount}
          />

          {/* Course duration */}
          <TimeCard
            difficulty={course.difficulty}
            students={course.studentsAmount}
            days={course.schedule.days}
            time={course.schedule.time}
            hoursADay={course.hoursADay}
            totalDuration={course.duration}
          />
        </div>
      </div>

      {/*Mobile Nav */}
      <div className="relative w-full md:hidden">
        <button
          className={
            "flex w-full items-center justify-between gap-2 rounded-md border py-5 px-3 text-lg focus:outline-none"
          }
          onClick={() => {
            setChooseContentVisible(!chooseContentVisible);
          }}
        >
          <span>{visibleContent.label}</span>
          <FaArrowDown />
        </button>
        {chooseContentVisible && (
          <div className="absolute right-0 z-10 mt-2 w-full divide-y divide-gray-100 rounded-md border bg-white shadow-lg">
            {navItems.map((item) =>
              visibleContent.id === item.id ? null : item.id ===
                "curriculum" ? (
                <Link
                  onClick={() => {
                    setChooseContentVisible(false);
                  }}
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                  href={"#curriculum"}
                  key={item.id}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    handleSetContentVisible(item);
                    setChooseContentVisible(false);
                  }}
                >
                  {item.label}
                </button>
              )
            )}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="rounded-lg bg-white shadow-lg md:w-[65%] w-full py-5 md:p-10">
        {renderContent()}
      </div>

      {/* Mobile price card */}
      <div className="flex flex-col gap-10 md:hidden">
        {/* Price */}
        <PriceCard
          courseID={course.id}
          price={course.pricePerMonth}
          access={course.accessAmount}
        />

        {/* Course duration */}
        <TimeCard
          difficulty={course.difficulty}
          students={course.studentsAmount}
          days={course.schedule.days}
          time={course.schedule.time}
          hoursADay={course.hoursADay}
          totalDuration={course.duration}
        />
      </div>
    </section>
  );
});

Overview.displayName = "Overview";

export default Overview;
