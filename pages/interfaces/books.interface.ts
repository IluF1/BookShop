export interface Book {
	volumeInfo: {
		title: string
		authors: string[]
		imageLinks: {
			thumbnail: string
		}
		description: string
	}
}
