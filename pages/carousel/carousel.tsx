import Arrow from '@/public/7.png'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './carousel.module.css'

import One_slide from '@/public/4.jpg'
import Three_slide from '@/public/5.jpg'
import Two_slide from '@/public/6.jpg'

export const Carousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const images = [One_slide, Two_slide, Three_slide]

	const color = '#9E98DC'
	const defaultColor = '#EFEEF6'

	const nextSlide = () => {
		setCurrentIndex(prevIndex =>
			prevIndex === images.length - 1 ? 0 : prevIndex + 1
		)
	}

	useEffect(() => {
		const interval = setInterval(() => {
			nextSlide()
		}, 5000)

		return () => clearInterval(interval)
	}, [currentIndex])

	return (
		<div>
			<div className={styles.container}>
				<Image
					className={styles.image}
					alt='image'
					src={images[currentIndex]}
				/>
			</div>
			<div className={styles.Next_slides}>
				<div className={styles.Slide_two} >
					<p>
						Change <br /> old book <br /> on new
					</p>
					<Image alt='not' src={Arrow} className={styles.Arrow_Img_one} />
				</div>
				<div className={styles.Slide_three} >
					<p>
						top <br /> 100 <br /> books <br /> 2022
					</p>
					<Image alt='not' src={Arrow} className={styles.Arrow_img} />
				</div>
				<div className={styles.slides_block}>
					<ul className={styles.Slides_list}>
						<li
							className={styles.Slide_one_block}
							onClick={() => {
								setCurrentIndex(0)
							}}
							style={{
								backgroundColor: currentIndex == 0 ? color : defaultColor,
							}}
						/>
						<li
							className={styles.Slide_two_block}
							style={{
								backgroundColor: currentIndex == 1 ? color : defaultColor,
							}}
							onClick={() => {
								setCurrentIndex(1)
							}}
						/>
						<li
							className={styles.Slide_three_block}
							style={{
								backgroundColor: currentIndex == 2 ? color : defaultColor,
							}}
							onClick={() => {
								setCurrentIndex(2)
							}}
						/>
					</ul>
				</div>
			</div>
		</div>
	)
}
