var person = new Object();

person['firstName'] = 'andrew';
person['lastName'] = 'zaha';

console.log(person);
console.log(person['firstName']);
console.log(person.firstName);

person.address = new Object();
person.address.street = 'D. Cantemir';
person.address.city = 'Oradea';
person.address.country = 'Romania';

console.log(person.address.street);
console.log(person['address']['street']);

console.log(person.address.city);
console.log(person['address']['city']);

console.log(person.address.country);
console.log(person['address']['country']);