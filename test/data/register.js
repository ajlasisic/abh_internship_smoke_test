const getRandomEmail = function () {
    let rndnum = Math.random();
    let emailValue = "random.test+" + rndnum + "@test.com";
    return emailValue;
  }

export const newAddress = {
    email: "random2@random.com",
    firstname: "Test",
    lastname: "Testing",
    address: "Test address",
    city: "Sarajevo",
    zip: 71000,
    phone: 123456,
  };

export const newUser = {
    firstname: "Test",
    lastname: "Testing",
    email: getRandomEmail,
    password: "Atlant123",
  };
