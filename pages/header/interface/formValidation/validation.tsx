import { useState } from 'react'
import styles from '../userInterface.module.css'

export function Validation() {
	const [formData, setFormData] = useState({
		password: '',
		passwordDirty: false,
		passwordError: 'Your password must be at least 6 characters long',
		buttonBlock: true,
	})
	const defaultColor = '#3d3b55'
	const color = '#9e98dc'

	const passwordHandler = (e: any) => {
		setFormData(prevState => ({
			...prevState,
			password: e.target.value,
			buttonBlock: e.target.value.length < 6,
			passwordError:
				e.target.value.length < 6
					? 'Your password must be at least 6 characters long'
					: '',
		}))
	}

	const blurHandler = (e: any) => {
		setFormData(prevState => ({
			...prevState,
			passwordDirty: true,
		}))
	}

	return (
		<form
			className={styles.uLogin_form}
			action='/components/header/interface/profile/profile'
		>
			<p className={styles.Log_text}>Login in</p>
			<span className={styles.email_span}>Email</span>
			<input type='email' className={styles.Email_input} />
			<span className={styles.Password_text}>Password</span>
			<input
				type='password'
				className={styles.Password_input}
				name='password'
				onBlur={blurHandler}
				value={formData.password}
				onChange={passwordHandler}
			/>

			{formData.passwordDirty && (
				<div style={{ color: 'red', fontSize: '11px' }}>
					{formData.passwordError}
				</div>
			)}
			<button
				className={styles.SubmitForm_button}
				disabled={formData.buttonBlock}
				style={{
					backgroundColor: formData.buttonBlock ? defaultColor : color,
				}}
			>
				LOG IN
			</button>
		</form>
	)
}
