import { Header } from '@/pages/header/header'
import { useDispatch, useSelector } from 'react-redux'
import styles from './shop-cart.module.css'

export default function ShopBag() {

	function Format_Price() {
		return total.toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD',
		})
	}

	let total = 0

	return (
		<div className={styles.container}>
			<title>Your Cart</title>
			<Header />
			<div className={styles.cart_content}>
				<h1 className='cart_title'>SHOPPING CART</h1>

				<ul className={styles.list}>
					<li className={styles.list_item1}>ITEM</li>
					<li className={styles.list_item2}>QUANTITY</li>
					<li className={styles.list_item3}>PRICE</li>
					<li className={styles.list_item4}>DELIVERY</li>
				</ul>


				<div className={styles.completionOfPayment_block}>
					<h1 className={styles.totalPrice_text}>
						TOTAL PRICE: {Format_Price()}
					</h1>
					<button className={styles.checkout_button}>CHECKOUT</button>
				</div>
			</div>
		</div>
	)
}
