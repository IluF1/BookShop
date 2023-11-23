import image from '@/public/8.svg'
import Image from 'next/image'
import { Header } from '../../header'
import styles from './profile.module.css'

export default function Profile() {
	return (
		<div className={styles.container}>
			<title>Your Profile</title>
			<Header />
			<div className={styles.profile_container}>
				<h1>PROFILE</h1>
				<Image src={image} alt='image' className={styles.image} />
				<div className={styles.userData_block}>
					<span>YOUR NAME</span>
					<h1>John Smith</h1>
					<span>YOUR EMAIL</span>
					<h1>example@mail.com</h1>
					<button className={styles.editProfile_button}>EDIT PROFILE</button>
				</div>
				<div className={styles.about_block}>
					<h3 className={styles.about_text}>ABOUT ME</h3>
					<p className={styles.description}>
						Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Sed in ante
						consequat, <br />+ ornare nisi et, ultrices libero. Nunc nibh dolor, <br /> maximus
						quis auctor nec, tempor <br /> quis ipsum. Proin mollis pellentesque nulla
						ac <br /> varius.
					</p>
				</div>
			</div>
		</div>
	)
}
