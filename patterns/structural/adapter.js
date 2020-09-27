
const user = {
  firstName: 'firstName',
  lastName: 'lastName',
  birthDateMillis: 721864800000
};

function calculateAgeAdapter(user) {
  const yearOfBirth = new Date(user.birthDateMillis).getFullYear();
  return calculateAge(yearOfBirth);
}

function calculateAge(year) {
  return new Date().getFullYear() - year;
}

console.log(calculateAgeAdapter(user));

module.exports = {
  calculateAgeAdapter
}