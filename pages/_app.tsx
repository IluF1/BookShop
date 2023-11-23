import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { store } from '@/pages/store/store'

const Store = configureStore({
	reducer: { store }
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={Store}>
			<Component {...pageProps} />
		</Provider>
	)
}
