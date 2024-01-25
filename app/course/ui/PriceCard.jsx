const PriceCard = ({ price, access, courseID }) => {
  return (
    <section className="flex flex-col gap-10 rounded-md bg-primary_700 px-6 py-8 text-white">
      {/* Price */}
      <article className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold">{access} Access</h3>
        <div className="flex items-center gap-2">
          <h2 className="text-4xl font-bold">${price}</h2>
          <span className="text-xs">Per month</span>
        </div>

        <p className="text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel cumque
          officiis corporis odio aspernatur! Quo?
        </p>
      </article>

      {/* Get course button */}
      <div className="flex flex-col items-center gap-2">
        {/* When the buy course page exist we will use the courseID here to go to the specific buy page */}
        <button className="rounded-lg bg-white px-16 py-2 font-semibold text-black transition-all hover:scale-110 hover:bg-white/80">
          Get Course Now
        </button>
        <p className="text-xs">30 days money back guarantee</p>
      </div>
    </section>
  );
};

export default PriceCard;
