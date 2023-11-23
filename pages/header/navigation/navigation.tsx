import Link from 'next/link'
import styles from './navigation.module.css'

export default function Navigation() {
	return (
		<div className={styles.container}>
			<ul className={styles.links_list}>
				<li className={styles.link_one}>
					<Link href='/'>BOOKS</Link>
				</li>
				<li className={styles.link_two}>
					<Link href='/audiobooks' style={{ color: ' #5C6A79' }}>
						AUDIOBOOKS
					</Link>
				</li>
				<li className={styles.link_three}>
					<Link href='/Stationery & gifts' style={{ color: ' #5C6A79' }}>
						Stationery & gifts
					</Link>
				</li>
				<li className={styles.link_four}>
					<Link href='/blog' style={{ color: ' #5C6A79' }}>
						blog
					</Link>
				</li>
			</ul>
		</div>
	)
}
