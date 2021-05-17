// import axios from 'axios';
import { User } from './models/User';


const user = new User({name: 'whatsmyname', age: 89798719283});


user.on('change', () => {
    console.log('User changed');
})


user.set({name: 'New Name'})


// user.trigger('change')



// user.on('change', () => {
//     console.log('user was changed')
// })





// class Person {
//   constructor(public firstName: string, public lastName: string) {}

//   get fullName(): string {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// const person = new Person('firstname', 'lastname');
// console.log(person.fullName);


// user.save();

// user.events.on('save', () => {
//     console.log('Save was triggered');
// })

// user.events.trigger('save');

// user.save();

// user.set({ name: 'newName', age:123 })

// user.fetch();

// setTimeout(() => {
//     console.log(user);
// }, 4000);

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

// user.trigger('save');
// user.trigger('thisisnotanevent')
// console.log(user);
