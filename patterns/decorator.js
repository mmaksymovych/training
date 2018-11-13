const { calculateAgeAdapter } = require('./adapter');

const user = {
  firstName: 'firstName',
  lastName: 'lastName'
};

const userAdditionalData = {
  birthDateMillis: 721864800000
};

const getUserData = () => {
  return user;
};

const withAgeDecorator = (func) => {
  return {
    ...func(),
    age: calculateAgeAdapter(userAdditionalData)
  }
};


console.log(withAgeDecorator(getUserData));