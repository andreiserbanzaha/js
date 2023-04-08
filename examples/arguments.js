// const greet = (firstName, lastName, language /*= 'spanish'*/ ) => {
function greet(firstName, lastName, language) {

  // default value alternative
  language = language || 'english';

  // console.log(firstName);
  // console.log(lastName);
  // console.log(language);

  console.log(arguments);
}

// greet();
// greet('andrei');
greet('andrei', 'zaha');
// greet('andrei', 'zaha', 'english');