import type { Metadata } from 'next'
import Image from 'next/image'
import { Geist, Geist_Mono } from 'next/font/google'
import Link from 'next/link'

import styles from './layout.module.scss'
import logo from '/public/logo.png'
import { StoreProvider } from '@/providers/StoreProvider'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<StoreProvider>
					<header className={styles.header}>
						<div className={`${styles.container} ${styles.containerHeader}`}>
							<div className={styles.logo}>
								<Link href='/'>
									<Image src={logo} alt='Рик и Морти' width={46} height={49} />
								</Link>
							</div>

							<nav>
								<ul className={styles.listStyle}>
									<li>
										<Link href='/'>Characters</Link>
									</li>
									<li>
										<Link href='/locations'>Locations</Link>
									</li>
									<li>
										<Link href='/episodes'>Episodes</Link>
									</li>
									<li>
										<Link href='/login'>Вход</Link>
									</li>
								</ul>
							</nav>
						</div>
					</header>
					<div className={styles.container}>
						<main>{children}</main>
						<footer>Это футер</footer>
					</div>
				</StoreProvider>
			</body>
		</html>
	)
}
