import { getProject } from '../../../../sanity/sanity-utils';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { changeName } from '@/redux/features/auth-slice';
import { RootState } from '@/redux/store';
import { useState } from 'react';

type ProjectProps = {
	params: {
		project: string;
	};
};
async function Project({ params }: ProjectProps) {
	const slug = params.project;
	const project = await getProject(slug);

	return (
		<div>
			<p>hello les gens</p>
			<p>{project.name}</p>
		</div>
	);
}

export default Project;
