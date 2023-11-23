import { Book } from '@/pages/interfaces/books.interface'
import axios from 'axios'
import { useEffect, useState } from 'react'
import styles from './books.module.css'

export default function BookList() {
	const [initialIndex, setInitialIndex] = useState(6)
	const [books, setBooks] = useState<Book[]>([])

	const total = 8.2

	const [addedToCart, setAddedToCart] = useState<boolean[]>([false])
	const handleAddToCart = (index: number) => {
		const updatedAddedToCart = [...addedToCart]
		updatedAddedToCart[index] = true
		setAddedToCart(updatedAddedToCart)
	}
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`https://www.googleapis.com/books/v1/volumes?q=%22subject:Business%22&printType=books&startIndex=0&maxResults=${initialIndex}&langRestrict=en`
				)
				setBooks(response.data.items)
			} catch (error) {
				console.error('Error fetching books:', error)
			}
		}

		fetchData()
	}, [initialIndex])

	const loadingAdditionalBooks = () => {
		setInitialIndex(prevIndex => prevIndex + 6)
	}

	return (
		<div className={styles.container}>
			<ul className={styles.books_list}>
				{books.map((book, index) => (
					<li key={index}>
						<div className={styles.book_info}>
							<p className={styles.book_authors}>
								Author: {book.volumeInfo.authors}
							</p>
							<h3 className={styles.book_title}>{book.volumeInfo.title}</h3>
							<p className={styles.book_description}>
								{book.volumeInfo.description}
							</p>
							<h3 className={styles.book_total}>${total}</h3>

							<button
								className={styles.booksAddToCart_button}
								onClick={() => {handleAddToCart(index)}}
								style={{
									color: addedToCart[index] ? '#5C6A79' : '#4c3db2',
									border: `1px solid ${
										addedToCart[index] ? '#EEEDF5' : '#4c3db2'
									}`,
								}}
							>
								{addedToCart[index] ? 'IN THE CART' : 'BUY NOW'}
							</button>
						</div>
						{book.volumeInfo.imageLinks ? (
							book.volumeInfo.imageLinks.thumbnail && (
								<img
									src={book.volumeInfo.imageLinks.thumbnail}
									alt={book.volumeInfo.title}
									className={styles.book_image}
								/>
							)
						) : (
							<div className={styles.book_image}>Not image</div>
						)}
					</li>
				))}
			</ul>
			<button
				className={styles.loadingBooks_button}
				onClick={() => {
					loadingAdditionalBooks()
				}}
			>
				LOAD MORE
			</button>
		</div>
	)
}
