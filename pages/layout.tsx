import styles from '@/styles/home.module.css'
import { Carousel } from './carousel/carousel'
import Books from './content/loadingBooks/books'
import Sidebar from './content/sidebar/sidebar'
import { Header } from './header/header'

import { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren) {
	return (
		<div>
			<header>
				<Header />
			</header>
			<main>{children}</main>
			<Carousel />
			<Sidebar  />
			<div className={styles.loadBooks}>
				<Books />
			</div>
		</div>
	)
}
