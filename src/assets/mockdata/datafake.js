export const newArray = [];

const examplePhotoUrl = [
  "src/assets/images/background-example.jpg",
  "src/assets/images/background-example.jpg",
  "src/assets/images/background-example.jpg",
  "src/assets/images/background-example.jpg",
  "src/assets/images/background-example.jpg",
];

for (let i = 0; i < 30; i++) {
  const newObj = {
    id: i + 1,
    operation_type: getRandomNumber(0, 1),
    address: generateRandomAddress(),
    monthly_rent: getRandomNumber(500, 5000),
    property_type: getRandomNumber(0, 2),
    bedrooms: getRandomNumber(1, 6),
    bathrooms: getRandomNumber(1, 4),
    area: getRandomNumber(100, 500),
    pets_allowed: getRandomBoolean(),
    photo_url: examplePhotoUrl,
  };

  newArray.push(newObj);
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateRandomAddress() {
  const streetNames = ["Main St", "Oak Ave", "Cedar Rd", "Maple Ln", "Pine St"];
  const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
  const states = ["NY", "CA", "IL", "TX", "AZ"];
  const postalCodes = ["10001", "90001", "60601", "77001", "85001"];

  const randomStreet = streetNames[getRandomNumber(0, streetNames.length - 1)];
  const randomCity = cities[getRandomNumber(0, cities.length - 1)];
  const randomState = states[getRandomNumber(0, states.length - 1)];
  const randomPostalCode =
    postalCodes[getRandomNumber(0, postalCodes.length - 1)];

  return `${getRandomNumber(
    100,
    9999
  )} ${randomStreet}, ${randomCity}, ${randomState} ${randomPostalCode}`;
}

function getRandomBoolean() {
  return Math.random() < 0.5;
}
