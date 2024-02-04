import Image from 'next/image';
import { IoStarSharp } from 'react-icons/io5';

// const HeaderImage=()=>{

// 	<Image
// 		src='/assets/image/bubble.svg'
// 		alt='background Image'
// 		width={400}
// 		height={400}
// 		className='absolute -z-10 top-0 left-0 w-full'
// 	/>;
// }

function Header() {
	return (
		<div>
			<div className='bg-[#0A6A56] w-full h-max flex items-center text-white relative overflow-hidden'>
				<Image
					src='/assets/image/Lines.png'
					alt='background Image'
					width={4000}
					height={4000}
					className='absolute  top-11 left-0 w-full'
				/>
				<Image
					src='/assets/image/Lines.png'
					alt='background Image'
					width={4000}
					height={4000}
					className='absolute  top-[3.9rem] left-0 w-full'
				/>
				<Image
					src='/assets/image/Lines.png'
					alt='background Image'
					width={4000}
					height={4000}
					className='absolute  top-[3.3rem] left-0 w-full'
				/>
				<Image
					src='/assets/image/Lines.png'
					alt='background Image'
					width={4000}
					height={4000}
					className='absolute  top-[4.5rem] left-0 w-full'
				/>
				<Image
					src='/assets/image/Lines.png'
					alt='background Image'
					width={4000}
					height={4000}
					className='absolute  top-[5rem] left-0 w-full'
				/>
				<Image
					src='/assets/image/Lines.png'
					alt='background Image'
					width={4000}
					height={4000}
					className='absolute  top-[5.5rem] left-0 w-full'
				/>
				<Image
					src='/assets/image/Lines.png'
					alt='background Image'
					width={4000}
					height={4000}
					className='absolute  top-[6rem] left-0 w-full'
				/>
				<Image
					src='/assets/image/Lines.png'
					alt='background Image'
					width={4000}
					height={4000}
					className='absolute  top-[6.5rem] left-0 w-full'
				/>
				<Image
					src='/assets/image/Lines.png'
					alt='background Image'
					width={4000}
					height={4000}
					className='absolute  top-[7rem] left-0 w-full'
				/>
				<Image
					src='/assets/image/Lines.png'
					alt='background Image'
					width={4000}
					height={4000}
					className='absolute  top-[7.5rem] left-0 w-full'
				/>
				<Image
					src='/assets/image/Lines.png'
					alt='background Image'
					width={4000}
					height={4000}
					className='absolute  top-[8rem] left-0 w-full'
				/>
				<Image
					src='/assets/image/Lines.png'
					alt='background Image'
					width={4000}
					height={4000}
					className='absolute  top-[8.5rem] left-0 w-full'
				/>
				<Image
					src='/assets/image/Lines.png'
					alt='background Image'
					width={4000}
					height={4000}
					className='absolute  top-3 left-0 w-full'
				/>
				<Image
					src='/assets/image/Lines.png'
					alt='background Image'
					width={4000}
					height={4000}
					className='absolute  top-5 left-0 w-full'
				/>
				<Image
					src='/assets/image/Lines.png'
					alt='background Image'
					width={4000}
					height={4000}
					className='absolute  top-7 left-0 w-full'
				/>
				<Image
					src='/assets/image/Lines.png'
					alt='background Image'
					width={4000}
					height={4000}
					className='absolute  top-9 left-0 w-full'
				/>

				<div className=' p-[4rem] grid grid-cols-2 items-center justify-center'>
					<div className='flex flex-col mt-16'>
						{' '}
						<h2 className='md:text-[2.7rem] leading-[3rem] font-[600] text-white tracking-wide'>
							Learn UIUX: From Basics To Advance in 10 hours
						</h2>
						<p className=' opacity-[0.8] text-[1rem] mt-7 w-[80%]'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
							id facere ipsam perferendis ducimus quis eaque ad nisi et,
							officia.
						</p>
						<div className='flex gap-x-5 mt-8 mb-10 text-[0.8rem] '>
							<p className='opacity-[0.8rem] flex gap-2 items-center'>
								<span className='flex text-[#FBA333]'>
									<IoStarSharp />
									<IoStarSharp />
									<IoStarSharp />
									<IoStarSharp />
									<IoStarSharp />
								</span>
								4.8 Ratings
							</p>
							<p className='opacity-[0.8rem]'>4,098 ratings</p>
							<span className='flex gap-3 items-center'>
								{' '}
								•<p className='opacity-[0.8rem]'>1,780 reviews </p>
							</span>
						</div>
						<div className='mt-1 flex gap-3 items-center'>
							<Image
								src='/assets/image/Avatar1.png'
								alt='Avatar on Header'
								width={35}
								height={35}
							/>

							<h4 className='text-white text-[1rem] font-[500]'>Ezeh Jean</h4>
							<p className='text-[0.8rem] opacity-[0.75] font-[400]'>
								+4 instructors
							</p>
						</div>
					</div>
					<div className='flex  items-start justify-end mt-[6.6rem] relative top-[2rem]'>
						<p className='opacity-[0.8] text-[0.89rem] relative left-12'>
							Add to Watchlist
						</p>

						<span className='flex flex-col items-center gap-y-3 relative'>
							<Image
								src='/assets/image/hearts.png'
								alt='background Image'
								width={25}
								height={25}
								className='hover:scale-110 ease-in-out duration-500 cursor-pointer'
							/>
							<Image
								src='/assets/image/bookmark.png'
								alt='background Image'
								width={20}
								height={20}
								className='hover:scale-110 ease-in-out duration-500 cursor-pointer'
							/>
							<Image
								src='/assets/image/Vector.png'
								alt='background Image'
								width={20}
								height={20}
								className='hover:scale-110 ease-in-out duration-500 cursor-pointer'
							/>
							<div className='bg-white h-[8rem] w-[0.05rem]'></div>
							<Image
								src='/assets/image/dotPattern.png'
								alt='background Image'
								width={150}
								height={150}
								className='relative -left-[8rem] bottom-[3.8rem]'
							/>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
