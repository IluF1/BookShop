import  UserInterface  from './interface/userInterface'
import Navigation from './navigation/navigation'

import Link from 'next/link'

export function Header() {
	return (
		<div className='Header'>
			<Link href='/'>
				<h1>Bookshop</h1>
			</Link>

			<Navigation />
			<UserInterface />
		</div>
	)
}
