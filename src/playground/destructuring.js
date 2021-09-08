//
// Object destructuring
//

const person = {
  name: 'Andrew',
  age: 26,
  location: {
    city: 'Philadelphia',
    temp: 92
  }
};

// how to fetch data from object
// first option
console.log(`${person.name} is ${person.age}`);

// second option
const name_person = person.name;
const age_person = person.age;
console.log(`${name_person} is ${age_person}`);

// third option
const { name, age } = person;
console.log(`${name} is ${age}`);


if (person.location.city && person.location.temp) {
  console.log(`It is ${person.location.temp} in ${person.location.city}`);
}

// with doing like above, you do not need to repeat
// person.location.city or person.location.temp every time
// city or temp will be enough to fetch the data.
const {city, temp} = person.location;
console.log(`It is ${temp} in ${city}`);

// we can rename the destructured variables
// we need to do like this:
// variable_from_data : new_name
// do not forget to put ':' in between
const {city: location, temp: temperature} = person.location;
console.log(`It is ${temperature} in ${location}`);

// you can define a default value for a variable in data 
// with using '='
const { name : person_name = 'anonymous', age : person_age } = person;
console.log(`${person_name} is ${age}`);

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

const {name: publisherName = 'Self-Published'} = book.publisher;
console.log(publisherName);


//
// Array Destructuring
//

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
console.log(`You are in ${address[1]} ${address[2]}`);
 
const [street, city_address, state, zip] = address;
console.log(`You are in ${city_address} ${state}`);

// you can get the items like this;
// const [, city_address, state, zip] = address;
// putting a comma without using a variable name
// that means, skip that item 

// if there are five variables but you want to use first three;
// const [street, city_address, state] = address;
// fetch the first three items and do not care about other two.

// for setting default values;
// you need to fetch the data and use this;
// fetched data = 'default value here'


const item = ['coffee (iced)', '$2.00', '$3.50', '$2.75'];

const [item_name, , m_price] = item;
console.log(`A medium ${item_name} costs ${m_price}`);



// ***********

// For object destruction, we are using {}
// for an array, we are using []