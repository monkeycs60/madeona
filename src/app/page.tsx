import Image from 'next/image';
import { getProjects } from '../../sanity/sanity-utils';
import Link from 'next/link';

export default async function Home() {
	const projects = await getProjects();
	return (
		<div className='max-w-7xl mx-auto text-4xl bg-red-600'>
			<h1 className='font-titles'>my projects go here</h1>
			<div className='flex justify-center items-center font-body'>
				{projects.map((project) => (
					<Link href={`/projects/${project.slug}`} key={project._id}>
						<div>
							<div className='font-script'>{project.name}</div>
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
