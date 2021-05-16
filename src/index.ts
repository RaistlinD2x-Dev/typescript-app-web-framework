import { User } from './models/User'

const user = new User({name:'Jesse', age:20});

user.set({name: 'Jamie', age:30});
// user.set({name: 'Odin'});
// user.set({age: 45});

// console.log(user.get('name'));
// console.log(user.get('age'));

user.on('change', () => {
    console.log('Change #1');
})

user.on('change', () => {
    console.log('Change #2')
})

user.on('thischange', () => {
    console.log('Save was triggered');
})


user.trigger('change');
console.log(user);