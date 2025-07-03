// JavaScript Date Object
// The Date object is used to work with dates and times in JavaScript.
// It provides methods to create, manipulate, and format dates.

const now = new Date(); // Current date and time
console.log(now); // Output: Current date and time

// Creating a Date object for a specific date
const specificDate = new Date('2023-01-01');
console.log(specificDate); // Output: Sun Jan 01 2023 00:00:00 GMT+0000 (Coordinated Universal Time)

// Getting date and time components
console.log(now.getFullYear()); // Output: Current year
console.log(now.getMonth()); // Output: Current month (0-11)
console.log(now.getDate()); // Output: Current day of the month (1-31)
console.log(now.getHours()); // Output: Current hour (0-23)
console.log(now.getMinutes()); // Output: Current minute (0-59)
console.log(now.getSeconds()); // Output: Current second (0-59)

// Setting date and time components
now.setFullYear(2024);
now.setMonth(0); // January
now.setDate(1);
now.setHours(0);
now.setMinutes(0);
now.setSeconds(0);
console.log(now); // Output: Mon Jan 01 2024 00:00:00 GMT+0000 (Coordinated Universal Time)

// Date formatting
console.log(now.toDateString()); // Output: Mon Jan 01 2024
console.log(now.toTimeString()); // Output: 00:00:00 GMT+0000 (Coordinated Universal Time)
console.log(now.toISOString()); // Output: 2024-01-01T00:00:00.000Z

// Date calculations
const oneWeekLater = new Date();
oneWeekLater.setDate(now.getDate() + 7);
console.log(oneWeekLater); // Output: Mon Jan 08 2024 00:00:00 GMT+0000 (Coordinated Universal Time)

// Comparing dates
const date1 = new Date('2024-01-01');
const date2 = new Date('2024-01-02');
console.log(date1 < date2); // Output: true
console.log(date1 > date2); // Output: false
console.log(date1.getTime() === date2.getTime()); // Output: false
// Checking if a date is valid
const invalidDate = new Date('invalid date string');
console.log(isNaN(invalidDate.getTime())); // Output: true (indicates an invalid date)
// Getting the timestamp (milliseconds since January 1, 1970)
console.log(now.getTime()); // Output: Timestamp in milliseconds    
// Converting a date to a string
console.log(now.toString()); // Output: Mon Jan 01 2024 00:00:00 GMT+0000 (Coordinated Universal Time)
// Getting the UTC components
console.log(now.getUTCFullYear()); // Output: 2024
console.log(now.getUTCMonth()); // Output: 0 (January)
console.log(now.getUTCDate()); // Output: 1
console.log(now.getUTCHours()); // Output: 0
console.log(now.getUTCMinutes()); // Output: 0
console.log(now.getUTCSeconds()); // Output: 0  
// Getting the UTC timestamp
console.log(Date.UTC(2024, 0, 1)); // Output: 1704060800000 (timestamp for January 1, 2024, in UTC)     
// Parsing a date string
const parsedDate = Date.parse('2024-01-01T00:00:00Z');
console.log(parsedDate); // Output: 1704060800000 (timestamp for January 1, 2024, in UTC)
// Checking if a date is in the future
const futureDate = new Date('2025-01-01');
console.log(futureDate > now); // Output: true (if the current date is before January 1, 2025)
// Checking if a date is in the past
const pastDate = new Date('2023-01-01');
console.log(pastDate < now); // Output: true (if the current date is after January 1, 2023)
// Getting the day of the week
console.log(now.getDay()); // Output: 1 (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
// Getting the week number of the year
function getWeekNumber(date) {
    const start = new Date(date.getFullYear(), 0, 1);
    const days = Math.floor((date - start) / (24 * 60 * 60 * 1000));
    return Math.ceil((days + start.getDay() + 1) / 7);
}
console.log(getWeekNumber(now)); // Output: Week number of the year for the current date        
// Getting the number of days in a month
function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}           
console.log(getDaysInMonth(2024, 0)); // Output: 31 (January has 31 days)
// Getting the number of days in a year
function getDaysInYear(year) {
    return (new Date(year, 1, 29).getDate() === 29) ? 366 : 365;
}
console.log(getDaysInYear(2024)); // Output: 366 (2024 is a leap year)
// Getting the current timestamp in seconds
console.log(Math.floor(Date.now() / 1000)); // Output: Current timestamp in seconds
// Getting the current timestamp in milliseconds
console.log(Date.now()); // Output: Current timestamp in milliseconds
// Getting the current date and time in ISO format      
console.log(new Date().toISOString()); // Output: Current date and time in ISO format
// Getting the current date and time in UTC format          
console.log(new Date().toUTCString()); // Output: Current date and time in UTC format
// Getting the current date and time in locale format
console.log(new Date().toLocaleString()); // Output: Current date and time in locale format
// Getting the current date and time in locale format with options
const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
console.log(new Date().toLocaleString('en-US', options)); // Output: Current date and time in locale format with options
// Getting the current date and time in a specific timezone
const timezoneDate = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });
console.log(timezoneDate); // Output: Current date and time in New York timezone
// Getting the current date and time in a specific locale
const localeDate = new Date().toLocaleString('fr-FR'); // French locale
console.log(localeDate); // Output: Current date and time in French locale
// Getting the current date and time in a specific locale with options
const localeOptions = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
console.log(new Date().toLocaleString('fr-FR', localeOptions)); // Output: Current date and time in French locale with options
// Getting the current date and time in a specific locale with timezone
const localeTimezoneDate = new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' });
console.log(localeTimezoneDate); // Output: Current date and time in Paris timezone in French locale
// Getting the current date and time in a specific locale with timezone and options
const localeTimezoneOptions = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
console.log(new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris', ...localeTimezoneOptions })); // Output: Current date and time in Paris timezone in French locale with options
