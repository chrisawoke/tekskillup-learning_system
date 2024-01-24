const Card = ({ icon, count, text }) => {
  return (
    <div className='col-span-12 md:col-span-6 lg:col-span-3 bg-white shadow-md'>
        <div className="py-5 px-4 flex flex-col justify-center items-center">
            <h1 className="py-5 text-[24px]">{icon}</h1>
            <h2 className='font-semibold text-[2rem]'>{count}</h2>
            <p className="">{text}</p>
        </div>
    </div>
  )
}

export default Card