interface User {
	name: string
	lastName: string
	age?: number
}

const user: User = {
	name: "Fernando Ruben",
	lastName: "Villalba Galeano",
	age: 22
}

user.name = true

console.log(user)