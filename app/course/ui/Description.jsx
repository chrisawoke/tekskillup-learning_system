const Description = ({ description, studentsAmount }) => {
	return (
		<section className='flex flex-col gap-8'>
			<div className='flex flex-col gap-4'>
				<h2 className='text-3xl font-bold'>Course Description</h2>
				<h3 className='text-gray-500'>
					<span className='font-bold text-black'>{studentsAmount}+</span>{' '}
					successful students have already taken this course
				</h3>
			</div>

			<div className='flex flex-col gap-8'>
				{/* Stock video since the video player component isn't finished yet */}
				<iframe
					width='100%'
					height='400'
					src='https://www.youtube-nocookie.com/embed/IjPef0ETzRY?si=FPnrquSAlkzAG51n&amp;controls=0'
					title='YouTube video player'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
				/>
				<p>{description}</p>
			</div>
		</section>
	);
};

export default Description;
