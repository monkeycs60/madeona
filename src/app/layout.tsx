import './globals.css';
import { Providers } from '@/redux/provider';

export const metadata = {
	title: 'Madeona',
	description: 'Marine Voiturier, Photographe',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='fr'>
			<body className='flex h-screen w-screen items-center justify-center overflow-hidden bg-madeonaBrown-300'>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
