'use client';

import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { changeName } from '@/redux/features/auth-slice';
import { RootState } from '@/redux/store';
import { useState } from 'react';

function TestRedux() {
	const dispatch = useAppDispatch();
	const nameRedux = useAppSelector((state: RootState) => state);

	const [name, setName] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	};

	const handleSubmit = () => {
		dispatch(changeName(name));
		setName('');
	};

	console.log(nameRedux);

	return (
		<>
			<div className='flex w-1/2 flex-col'>
				<div>
					<input
						type='text'
						placeholder="nom d'utilisateur"
						value={name}
						onChange={handleChange}
					/>
					<button onClick={handleSubmit}>Send name</button>
				</div>
				<div>
					<input type='text' placeholder='id' />
					<button>Send ID</button>
				</div>
			</div>
			;
		</>
	);
}

export default TestRedux;
