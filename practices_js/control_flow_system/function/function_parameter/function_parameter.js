// all ways to define a function parameter in JavaScript
// 1. Default parameter
function greet(name = 'Guest') {
  console.log(`Hello, ${name}!`);
}
// 2. Rest parameter
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
// 3. Destructuring parameter
function displayUser({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}
// 4. Parameter with type annotation (TypeScript)
function multiply(x: number, y: number): number {
  return x * y;
  console.log(multiply(5, 10)); // Output: 50
}       
// 5. Optional parameter
function logMessage(message: string, level?: string) {
  console.log(`[${level || 'INFO'}] ${message}`);
}
// 6. Callback parameter
function processData(data, callback) {
  const result = data.map(callback);
  console.log(result);
}
// Example usage of processData
processData([1, 2, 3], (num) => num * 2); // Output: [2, 4, 6]
// 7. Function as a parameter
function executeCallback(callback) {
  callback();
}
// Example usage of executeCallback
executeCallback(() => {
  console.log('Callback executed!');
});
// 8. Parameter with default object destructuring
function configure({ host = 'localhost', port = 8080 } = {}) {
  console.log(`Connecting to ${host}:${port}`);
}     
// Example usage of configure
configure({ host: 'example.com', port: 3000 }); // Output: Connecting to example.com:3000
// 9. Parameter with default array destructuring
function processItems([first, second] = []) {
  console.log(`First: ${first}, Second: ${second}`);
}
// Example usage of processItems
processItems(['apple', 'banana']); // Output: First: apple, Second: banana
// 10. Parameter with union type (TypeScript)
function handleInput(input: string | number) {
  if (typeof input === 'string') {
    console.log(`String input: ${input}`);
  } else {
    console.log(`Number input: ${input}`);
  }
}
// Example usage of handleInput
handleInput('Hello'); // Output: String input: Hello
handleInput(42); // Output: Number input: 42
// 11. Parameter with generics (TypeScript)
function identity<T>(value: T): T {
  return value;
}
// Example usage of identity
console.log(identity<string>('Generics in TypeScript')); // Output: Generics in TypeScript
// 12. Parameter with callback and generics (TypeScript)
function processWithCallback<T>(data: T[], callback: (item: T) => void): void {
  data.forEach(callback);
}
// Example usage of processWithCallback
processWithCallback<number>([1, 2, 3], (num) => {
  console.log(`Processing number: ${num}`);
}); // Output: Processing number: 1, Processing number: 2, Processing number: 3
// 13. Parameter with async function
async function fetchData(url: string): Promise<any> {
  const response = await fetch(url);
  return response.json();
}
// Example usage of fetchData
fetchData('https://api.example.com/data')
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching data:', error));
// 14. Parameter with async/await and error handling
async function fetchWithRetry(url: string, retries: number = 3): Promise<any> {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Network response was not ok');
      return await response.json();
    } catch (error) {
      console.error(`Attempt ${i + 1} failed:`, error);
    }
  }
  throw new Error('All attempts failed');
}
// Example usage of fetchWithRetry
fetchWithRetry('https://api.example.com/data', 3)
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching data:', error));
// 15. Parameter with callback and error handling
function processWithErrorHandling(data: any[], callback: (item: any) => void): void {
  try {
    data.forEach(callback);
  } catch (error) {
    console.error('Error processing data:', error);
  }
}
// Example usage of processWithErrorHandling
processWithErrorHandling([1, 2, 3], (num) => {
  if (num === 2) throw new Error('Error processing number 2');
  console.log(`Processing number: ${num}`);
}); // Output: Processing number: 1, Error processing data: Error: Error processing number 2
// 16. Parameter with optional chaining (TypeScript)
function getUserName(user?: { name?: string }): string {
  return user?.name ?? 'Anonymous';
}
// Example usage of getUserName
console.log(getUserName({ name: 'Alice' })); // Output: Alice
console.log(getUserName()); // Output: Anonymous