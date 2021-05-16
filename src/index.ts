// import axios from 'axios';
import { User } from './models/User'

const user = new User({id: 1});

user.fetch();

setTimeout(() => {
    console.log(user);
}, 4000);

// axios.get('http://localhost:3000/users/1')

// axios.post('http://localhost:3000/users', {
//     name: 'Jesse', 
//     age: 36
// })



// const user = new User({name:'Jesse', age:20});

// user.set({name: 'Jamie', age:30});
// // user.set({name: 'Odin'});
// // user.set({age: 45});

// // console.log(user.get('name'));
// // console.log(user.get('age'));

// user.on('change', () => {
//     console.log('Change #1');
// })

// user.on('change', () => {
//     console.log('Change #2')
// })

// user.on('save', () => {
//     console.log('Save was triggered');
// })

// user.trigger('change');
// user.trigger('save');
// user.trigger('thisisnotanevent')
// console.log(user);