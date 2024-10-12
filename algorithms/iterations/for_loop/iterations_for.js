// Simple loop. This loop will print numbers from 0 to 4 in the console
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// FOR loop to iterate through an array of specific types
const fruits = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// FOR Loop with break and continue
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Exit the loop when i is 5
  }
  if (i % 2 === 0) {
    continue; // Skip the current iteration when i is even
  }
  console.log(i); // Only logs odd numbers less than 5
}

// Loop Through an Array of Objects
const fruits2 = [
  { name: "apple", color: "red" },
  { name: "banana", color: "yellow" },
  { name: "cherry", color: "red" },
];

for (let i = 0; i < fruits2.length; i++) {
  console.log(`Fruit: ${fruits2[i].name}, Color: ${fruits2[i].color}`);
}
