import profileImage from '@/public/1.png'
import bagImage from '@/public/2.png'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Validation } from './formValidation/validation'
import styles from './userInterface.module.css'

//example@mail.com
const UserInterface = () => {
	const [show, setShow] = useState(false)

	return (
		<>
			<ul className={styles.container}>
				<li className={styles.interface_element_one}>
					<button onClick={() => setShow(show ? false : true)}>
						<Image
							className={styles.ProfileImg}
							src={profileImage}
							alt='image'
						/>
					</button>
				</li>

				<li className={styles.interface_element_two}>
					<Link href='/header/interface/shop-bag/shop-cart'>
						<button>
							<Image className={styles.BagImg} src={bagImage} alt='image' />
						</button>
					</Link>
				</li>
			</ul>

			{show && (
				<div className='userLogin_block'>
					<Validation />
				</div>
			)}
		</>
	)
}

export default UserInterface
