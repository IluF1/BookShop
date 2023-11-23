import { useState } from 'react'
import styles from './sidebar.module.css'

export default function Sidebar() {
	const [active, setActive] = useState<boolean[]>([false])

	// const defaultColor = '#5C6A79'
	// const setColor = '#000000'

	const ActiveCategory = (index:number) => {
		const updatedAddedCategory = [...active]
		updatedAddedCategory[index] = true
		setActive(updatedAddedCategory)
	}
	const categories = [
		'Architecture',
		'Art & Fashion',
		'Biography',
		'Business',
		'Crafts & Hobbies',
		'Drama',
		'Fiction',
		'Food & Drink',
		'Health & Wellbeing',
		'History & Politics',
		'Humor',
		'Poetry',
		'Psychology',
		'Science',
		'Technology',
		'Travel & Maps',
	]
	return (
		<div className={styles.container}>
			<ul className={styles.Categories_list}>
				{categories.map((categorieName, index) => (
					<li
						key={index}
						onClick={() => {ActiveCategory(index)}}
						style={{
							fontSize: active[index] ? '40px': '15px',
						}}
					>
						{categorieName}
					</li>
				))}
			</ul>
		</div>
	)
}
