const getRandomEmail = function () {
  let rndnum = Math.random();
  let emailValue = "random.test+" + rndnum + "@test.com";
  return emailValue;
};

const createNewAddress = {
    email: "random2@random.com",
    firstname: "Test",
    lastname: "Testing",
    address: "Test address",
    city: "Sarajevo",
    zip: 71000,
    phone: 123456,
}

const createNewUser = {
    firstname: "Test",
    lastname: "Testing",
    email: getRandomEmail(),
    password: "Atlant123",
}
module.exports = { getRandomEmail, createNewAddress, createNewUser };
