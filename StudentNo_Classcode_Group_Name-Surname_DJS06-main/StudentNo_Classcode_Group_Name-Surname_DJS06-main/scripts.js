// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];

// Create a new array with province names in all uppercase
// Method Used: Array.prototype.map()
const upperCaseProvinces = provinces.map(province => province.toUpperCase());
console.log(upperCaseProvinces);

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifiso', 'Shailen', 'Frikkie'];

// Create a new array that contains the length of each name
// Method Used: Array.prototype.map()
// Function: name => name.length calculates the length of each name
const lenghtOfName = names.map(name => name.length);
console.log(lenghtOfName);

// Sort the provinces alphabetically
// Method Used: Array.prototype.sort()
// The spread operator ... creates a shallow copy of the provinces array before sorting it
const sortProvincesAlphabetically = [...provinces].sort(); // Using spread to avoid mutating the original array
console.log(sortedProvincesAlphabetically);

// Filter to remove provinces containing "Cape" and log the count of remaining provinces
// Method Used: Array.prototype.filter()
// Function: province => !province.includes('Cape') checks if the province name does not include "Cape"
const filterProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(filterProvinces.length);

// Create a boolean array to determine if a name contains the letter 'S'
// Method Used: Array.prototype.map()
// Function: name => name.toLowerCase().includes('s') converts each name to lowercase and checks if it includes 's'
const namesContainLetterS = names.map(name => name.toLowerCase().includes('s'));
console.log(namesContainLetterS);

// Use reduce to transform the names array into an object mapping names to their respective provinces
// Method Used: Array.prototype.reduce()
// reduce() accumulates the results into an object where each name is a key and the corresponding province (based on index) is the value
const mapNameProvince = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(mapNameProvince);

// Log each name
// Method Used: Array.prototype.forEach()
names.forEach(name => {
  console.log(name);
});

// Log each province
// Method Used: Array.prototype.forEach()
provinces.forEach(province => {
  console.log(province);
});

// Log each name with matching province
// Method Used: Array.prototype.forEach()
names.forEach((name, index) => {
  console.log(`${name} lives in ${provinces[index]}`);
});

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// Filter out products with invalid prices and convert prices to numbers
// Methods Used: Array.prototype.filter() and Array.prototype.map()
const validProducts = products
// Filter: product => product.price && !isNaN(product.price) checks if the product has a price and if the price is a number
  .filter(product => product.price && !isNaN(product.price))
  // Map: { ...product, price: Number(product.price) } creates a new product object with the price converted to a number
  .map(product => ({ ...product, price: Number(product.price) }));

console.log(validProducts);
