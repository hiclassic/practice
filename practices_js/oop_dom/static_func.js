// Static Methods in JavaScript
// Static methods are called on the class itself rather than on instances of the class.
// They are defined using the `static` keyword and can be useful for utility functions
// that are related to the class but do not require access to instance-specific data.

class MathUtils {
    static add(a, b) {
        return a + b;
    }

    static subtract(a, b) {
        return a - b;
    }
}

// Usage of static methods
console.log(MathUtils.add(5, 3)); // Output: 8
console.log(MathUtils.subtract(5, 3)); // Output: 2

// Static methods can also be used to create utility functions that do not depend on instance data.
class StringUtils {
    static toUpperCase(str) {
        return str.toUpperCase();
    }

    static toLowerCase(str) {
        return str.toLowerCase();
    }
}   
// Usage of static methods in StringUtils
console.log(StringUtils.toUpperCase("hello")); // Output: HELLO
console.log(StringUtils.toLowerCase("WORLD")); // Output: world 

// Static methods can also be used to create factory methods that return instances of the class.
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static createUser(name, age) {
        return new User(name, age);
    }
}
// Usage of factory method
const user1 = User.createUser("John", 30);
console.log(user1.name); // Output: John
console.log(user1.age); // Output: 30   

// Static methods can also be used to create constants or configuration values related to the class.
class Config {
    static API_URL = "https://api.example.com";
    static TIMEOUT = 5000;

    static getApiUrl() {
        return this.API_URL;
    }

    static getTimeout() {
        return this.TIMEOUT;
    }
}
// Usage of static constants and methods in Config
console.log(Config.getApiUrl()); // Output: https://api.example.com
console.log(Config.getTimeout()); // Output: 5000

// Static methods can also be used to create utility functions that are related to the class but do not require access to instance-specific data.
class MathExtraUtils {
    static square(num) {
        return num * num;
    }
}
// Usage of static utility function in MathExtraUtils
console.log(MathExtraUtils.square(5)); // Output: 25     
