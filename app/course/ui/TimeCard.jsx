import { useState, useEffect } from "react";

const difficultyMap = {
  easy: { color: "bg-green-500", levels: 1 },
  intermediate: { color: "bg-amber-500", levels: 2 },
  hard: { color: "bg-red-800", levels: 3 },
};

const TimeCard = ({ difficulty, days, hoursADay, students, totalDuration }) => {
  const [hoursAWeek, setHoursAWeek] = useState(null);

  useEffect(() => {
    setHoursAWeek(hoursADay * days.length);
  }, [days, hoursADay]);

  //We define the difficulty icon
  const difficultyLevels = Array.from({ length: 3 }, (_, i) => (
    <div
      key={i}
      className={`w-2 ${
        i < difficultyMap[difficulty].levels
          ? difficultyMap[difficulty].color
          : "bg-gray-300"
      }`}
      style={{ height: `${((i + 2) / 4) * 100}%` }}
    />
  ));

  const totalHours = totalDuration / 60;
  const mayusDifficulty =
    difficulty.charAt(0).toUpperCase() + difficulty.slice(1);

  return (
    <section className="flex justify-between">
      <div className="flex flex-col justify-between gap-2">
        <div className="flex h-10 items-end gap-1">{difficultyLevels}</div>
        <h3 className="text-xs font-semibold">{mayusDifficulty} Level</h3>
      </div>

      <div className="flex flex-col justify-between border-x border-gray-200 px-2">
        <h3 className="text-xs font-semibold text-gray-500">Estimated time</h3>
        <h2 className="text-xl font-bold">{totalHours} Hours</h2>
        <h3 className="text-xs font-semibold">At {hoursAWeek}hrs/week</h3>
      </div>

      <div className="flex flex-col justify-between">
        <h3 className="text-xs font-semibold text-gray-500">Students</h3>
        <h2 className="text-xl font-bold">{students}</h2>
        <h3 className="text-xs font-semibold">Enrolled in this course</h3>
      </div>
    </section>
  );
};

export default TimeCard;
