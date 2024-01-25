const Schedule = ({ schedule }) => {
  return (
    <section className="flex h-full justify-between gap-10">
      {schedule.days.map((day) => (
        <div key={day} className="flex w-full flex-col items-center gap-2">
          <h2 className="text-lg font-semibold">{day}</h2>
          <div className="flex h-full w-full flex-col items-center rounded-md bg-gray-200 p-2">
            <h3 className="font-medium">Class</h3>
            <p className="text-sm text-gray-500 h-72 md:h-96">{schedule.time}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Schedule;
