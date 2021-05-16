import { User } from './models/User'

const user = new User({name:'Jesse', age:20});

// user.set({name: 'Jamie', age:30});
user.set({name: 'Odin'});
user.set({age: 45});

console.log(user.get('name'));
console.log(user.get('age'));