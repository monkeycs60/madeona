import Image from 'next/image';
import { getProjects } from '../../sanity/sanity-utils';
import Link from 'next/link';

export default async function Home() {
	const projects = await getProjects();
	return (
		<div className='max-w-7xl mx-auto text-4xl bg-red-600'>
			<h1>my projects go here</h1>
			<div className='flex justify-center items-center'>
				{projects.map((project) => (
					<Link
						href={`/projects/${project.slug}`}
						key={project._id}>
						<div>
							<div>{project.name}</div>
							{project.image && (
								<Image
									src={project.image}
									alt={project.name}
									width={200}
									height={200}
									priority
								/>
							)}
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
