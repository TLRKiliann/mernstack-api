export type UserType = {
	id: number
	img: string
	firstName: string
	lastName: string
	age: number
	email: string
	location: string
	gender: string
	mainroom: string
	room: string
	isConnected: boolean
}

export type UserTypeProps = {
	usertype: UserType
}