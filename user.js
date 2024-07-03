const user = {}

user.name = 'John'

console.log(user.name)

user.surname = 'Smith'

user.name = 'Pete'

console.log(user.name)

delete user.name

console.log('name' in user)
