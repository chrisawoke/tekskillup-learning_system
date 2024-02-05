import Image from 'next/image';
import Overview from '../ui/Overview';
import Header from '../ui/Header';

const Course = () => {
	// Dummy course data. Just for modeling purposes
	const course = {
		id: 123,
		name: 'Introduction to Dummy Programming',
		introduction:
			'Welcome to the world of dummy programming. This course will guide you through the basics and advanced concepts of dummy coding.',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni in aperiam repellat quas placeat repellendus eum ratione provident blanditiis soluta ipsam voluptatum sint incidunt iure fugiat possimus cum omnis, non saepe optio ab. Iste iure enim voluptatibus commodi velit perferendis sunt facere ad minima eaque, officiis explicabo perspiciatis obcaecati sapiente labore praesentium deleniti veritatis magni porro repellat quam mollitia maiores. Fuga ut tempore nobis eos esse laboriosam temporibus reiciendis iste mollitia. Necessitatibus inventore voluptatem delectus culpa magni mollitia sed perspiciatis doloribus quae, tempore ipsa. Vero similique tempora quae quod sequi pariatur, nostrum natus. Magnam, porro explicabo ipsa ratione sunt ab quod cupiditate veniam iure dolor tempore quis suscipit excepturi a maiores illo repellat accusantium nesciunt libero quidem dolores tenetur cum quisquam? Ab quo natus veritatis! Itaque corporis hic, in voluptatibus asperiores tenetur ut quidem debitis ducimus saepe unde qui repellat beatae illum cupiditate, laudantium commodi velit? Ab, dolores officiis voluptatem, perferendis beatae deserunt cum obcaecati dicta laborum aspernatur similique porro?',
		introVideo: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
		rating: 4.25,
		difficulty: 'intermediate',
		pricePerMonth: 150,
		accessAmount: '3 month',
		reviews: [
			{
				id: 1,
				name: 'Alice',
				rating: 4.5,
				text: 'Great course! Really enjoyed the dummy coding exercises.',
			},
			{
				id: 2,
				name: 'Bob',
				rating: 4.0,
				text: 'The instructors were engaging, and the content was well-structured.',
			},
		],
		instructors: [
			{
				id: 101,
				name: 'Professor Dummy',
				photo: '/assets/image/courses/instructor-one.svg',
				description:
					'An expert in the field of dummy programming with years of experience.',
				social: {
					twitter: 'https://twitter.com/professordummy',
					linkedin: 'https://www.linkedin.com/in/professordummy',
					facebook: 'https://www.facebook.com/professordummy',
				},
			},
			{
				id: 102,
				name: 'Professor Dummy 2',
				photo: '/assets/image/courses/instructor-two.svg',
				description:
					'An expert in the field of dummy programming with years of experience.',
				social: {
					twitter: 'https://twitter.com/professordummy',
					linkedin: 'https://www.linkedin.com/in/professordummy',
					facebook: 'https://www.facebook.com/professordummy',
				},
			},
			{
				id: 103,
				name: 'Professor Dummy 3',
				photo: '/assets/image/courses/instructor-three.svg',
				description:
					'An expert in the field of dummy programming with years of experience.',
				social: {
					twitter: 'https://twitter.com/professordummy',
					linkedin: 'https://www.linkedin.com/in/professordummy',
					facebook: 'https://www.facebook.com/professordummy',
				},
			},
		],
		studentsAmount: 500,
		curriculum: [
			{
				id: 1,
				sectionName: 'Getting Started',
				classes: [
					{ id: 101, title: 'Introduction to Dummy Code', type: 'video' },
					{ id: 102, title: 'Setting Up Your Dummy Environment', type: 'text' },
				],
			},
			{
				id: 2,
				sectionName: 'Advanced Dummy Coding',
				classes: [
					{
						id: 103,
						title: 'Mastering the Art of Doing Nothing',
						type: 'video',
					},
					{
						id: 104,
						title: 'Dummy Code Optimization Techniques',
						type: 'text',
					},
				],
			},
		],
		schedule: {
			id: 928,
			start: '2024-02-01',
			end: '2024-04-01',
			days: ['Monday', 'Wednesday', 'Friday'],
			time: '18:00 - 20:00',
		},
		duration: 720,
		hoursADay: 2,
	};

	return (
		<>
			<Header />
			<main className='px-4'>
				<Overview course={course} />
			</main>
		</>
	);
};

export default Course;
