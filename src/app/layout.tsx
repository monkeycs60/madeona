import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

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
			<body className={inter.className}>{children}</body>
		</html>
	);
}
