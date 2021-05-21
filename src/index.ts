import { User } from './models/User';

const mikasa = new User({ name: 'Mikasa', age: 16 });

console.log(mikasa.get('name'));
console.log(mikasa.get('age'));
