import Image from 'next/image';
import Link from 'next/link';
import { BsInstagram } from 'react-icons/bs';
import { MdConstruction } from 'react-icons/md';

export default function Home() {
	return (
		<div className='relative mx-auto flex h-auto w-[90%] max-w-7xl flex-col items-center justify-center rounded-lg bg-madeonaBrown-100 p-6 font-body lg:w-[60%] lg:p-12 lg:text-xs 3xl:text-base'>
			<MdConstruction
				size={40}
				className='absolute -right-4 -top-4 text-black/50'
			/>
			<h1 className='mb-4 text-center font-script text-5xl text-black lg:text-left lg:text-6xl'>
				Site en construction
			</h1>
			<div className='relative h-[120px] w-full lg:h-[180px] 3xl:h-[260px] '>
				<Image
					src='/banner-madeona.webp'
					priority
					fill
					className='rounded-t-lg object-cover p-1'
					alt='bannière photo'
				/>
			</div>
			<div className='flex flex-col px-1 lg:flex-row'>
				<div className='flex flex-col items-center justify-center bg-madeonaBrown-400 p-2 lg:w-1/2 lg:flex-row lg:rounded-bl-lg lg:p-4 3xl:gap-4 3xl:p-8'>
					<Image
						src='/logo-noir-photography-madeona.png'
						width={200}
						height={200}
						alt='logo'
					/>
					<p className='w-[90%] p-2 text-center tracking-wide lg:w-auto lg:text-center 3xl:text-center'>
						Découvrez très bientôt mes créations et l&apos;ensemble de mes
						prestations à cette addresse{' '}
					</p>
				</div>
				<div className='flex items-center justify-center gap-8 rounded-b-lg bg-madeonaBrown-300 p-6 lg:w-1/2 lg:rounded-bl-none lg:p-2 3xl:p-8'>
					<p className='p-2 tracking-wide lg:w-1/3 lg:text-center 3xl:w-1/2 3xl:text-center'>
						En attendant, jetez un coup d&apos;oeil à mes dernières
						publications sur Instagram
					</p>
					<Link href='https://www.instagram.com/' target='_blank'>
						<BsInstagram
							size={32}
							className='text-black hover:text-madeonaBrown-400'
						/>
					</Link>
				</div>
			</div>
		</div>
	);
}
