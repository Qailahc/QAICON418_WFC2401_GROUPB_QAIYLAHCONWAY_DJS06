// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];

// Create a new array with province names in all uppercase
const upperCaseProvinces = provinces.map(province => province.toUpperCase());
console.log(upperCaseProvinces);

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifiso', 'Shailen', 'Frikkie'];

// Create a new array that contains the length of each name
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

// Sort the provinces alphabetically
const sortedProvinces = [...provinces].sort(); // Using spread to avoid mutating the original array
console.log(sortedProvinces);

// Filter to remove provinces containing "Cape" and log the count of remaining provinces
const filteredProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(filteredProvinces.length);

// Create a boolean array to determine if a name contains the letter 'S'
const namesContainS = names.map(name => name.toLowerCase().includes('s'));
console.log(namesContainS);

// Use reduce to transform the names array into an object mapping names to their respective provinces
const nameProvinceMapping = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(nameProvinceMapping);

// Log each name
names.forEach(name => {
  console.log(name);
});

// Log each province
provinces.forEach(province => {
  console.log(province);
});

// Log each name with matching province
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
const validProducts = products
  .filter(product => product.price && !isNaN(product.price))
  .map(product => ({ ...product, price: Number(product.price) }));

console.log(validProducts);
