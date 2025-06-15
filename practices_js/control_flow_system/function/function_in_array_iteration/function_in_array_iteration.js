// a complete foundation for the function_in_array_iteration practice
//   console.log(num * 2); // Output: 2, 4, 6
// });
// 1. Function in array iteration
function processArray(arr, callback) {
  arr.forEach(callback);
}     
// Example usage of processArray
processArray([1, 2, 3], (num) => {
  console.log(num * 2); // Output: 2, 4, 6
});     
// 2. Function in array iteration with index
function processArrayWithIndex(arr, callback) {
    arr.forEach((item, index) => {
        callback(item, index);
    }); 
};
// Example usage of processArrayWithIndex
processArrayWithIndex([1, 2, 3], (item, index) => {
    console.log(item + index); // Output: 1, 3, 5   
});
// 3. Function in array iteration with this context
function processArrayWithContext(arr, callback) {
    arr.forEach(function(item) {
        callback.call(this, item);
    }, this);   
};
// Example usage of processArrayWithContext
processArrayWithContext([1, 2, 3], function(item) {
    console.log(item * 2); // Output: 2, 4, 6
}); 

// 4. Function in array iteration with early exit
function processArrayWithEarlyExit(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i) === false) {
            break; // Exit the loop early if callback returns false
        }
    }
}
// Example usage of processArrayWithEarlyExit
processArrayWithEarlyExit([1, 2, 3, 4, 5], (item, index) => {
    console.log(item); // Output: 1, 2, 3
    if (item === 3) return false; // Exit early when item is 3
});
// 5. Function in array iteration with async callback
function processArrayAsync(arr, callback) {
    arr.forEach(async (item) => {
        await callback(item);
    });
}
// Example usage of processArrayAsync
processArrayAsync([1, 2, 3], async (item) => {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate async operation
    console.log(item * 2); // Output: 2, 4, 6 after a delay
});
// 6. Function in array iteration with error handling
function processArrayWithErrorHandling(arr, callback) {
    arr.forEach((item) => {
        try {
            callback(item);
        } catch (error) {
            console.error(`Error processing item ${item}:`, error);
        }
    });
}
// Example usage of processArrayWithErrorHandling
processArrayWithErrorHandling([1, 2, 3], (item) => {
    if (item === 2) throw new Error("Simulated error for item 2");
    console.log(item * 2); // Output: 2, Error processing item 2, 6
});
// 7. Function in array iteration with custom context
function processArrayWithCustomContext(arr, callback, context) {
    arr.forEach(function(item) {
        callback.call(context, item);
    });
}
// Example usage of processArrayWithCustomContext
processArrayWithCustomContext([1, 2, 3], function(item) {
    console.log(this.prefix + item * 2); // Output: "Value: 2", "Value: 4", "Value: 6"
}, { prefix: "Value: " });
// 8. Function in array iteration with filter
function processArrayWithFilter(arr, callback) {
    return arr.filter(callback);
}
// Example usage of processArrayWithFilter
processArrayWithFilter([1, 2, 3, 4, 5], (item) => {
    return item % 2 === 0; // Filter even numbers
}).forEach((item) => {
    console.log(item); // Output: 2, 4
});
// 9. Function in array iteration with map
function processArrayWithMap(arr, callback) {
    return arr.map(callback);
}
// Example usage of processArrayWithMap
processArrayWithMap([1, 2, 3], (item) => {
    return item * 2; // Double each item
}).forEach((item) => {
    console.log(item); // Output: 2, 4, 6
});
// 10. Function in array iteration with reduce
function processArrayWithReduce(arr, callback, initialValue) {
    return arr.reduce(callback, initialValue);
}
// Example usage of processArrayWithReduce
processArrayWithReduce([1, 2, 3], (accumulator, item) => {
    return accumulator + item; // Sum all items
}, 0).then((result) => {
    console.log(result); // Output: 6
});
// 11. Function in array iteration with find
function processArrayWithFind(arr, callback) {
    return arr.find(callback);
}
// Example usage of processArrayWithFind
processArrayWithFind([1, 2, 3, 4, 5], (item) => {
    return item > 3; // Find first item greater than 3
}).then((result) => {
    console.log(result); // Output: 4
});
// 12. Function in array iteration with some
function processArrayWithSome(arr, callback) {
    return arr.some(callback);
}
// Example usage of processArrayWithSome
processArrayWithSome([1, 2, 3, 4, 5], (item) => {
    return item > 3; // Check if any item is greater than 3
}).then((result) => {
    console.log(result); // Output: true
});
// 13. Function in array iteration with every
function processArrayWithEvery(arr, callback) {
    return arr.every(callback);
}
// Example usage of processArrayWithEvery
processArrayWithEvery([1, 2, 3, 4, 5], (item) => {
    return item < 6; // Check if all items are less than 6
}).then((result) => {
    console.log(result); // Output: true
});
// 14. Function in array iteration with forEach and async
async function processArrayWithForEachAsync(arr, callback) {
    for (const item of arr) {
        await callback(item);
    }
}
// Example usage of processArrayWithForEachAsync
processArrayWithForEachAsync([1, 2, 3], async (item) => {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate async operation
    console.log(item * 2); // Output: 2, 4, 6 after a delay
});
// 15. Function in array iteration with map
function processArrayWithMapAsync(arr, callback) {
    return Promise.all(arr.map(callback));
}console.log(processArrayWithMapAsync([1, 2, 3], async (item) => {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate async operation
    return item * 2; // Double each item
}
)).then((result) => {
    console.log(result); // Output: [2, 4, 6] after a delay
}
// 16. Function in array iteration with filter and async
function processArrayWithFilterAsync(arr, callback) {
    return Promise.all(arr.map(callback)).then(results => arr.filter((_, index) => results[index]));
}
// Example usage of processArrayWithFilterAsync
processArrayWithFilterAsync([1, 2, 3, 4, 5], async (item) => {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate async operation
    return item % 2 === 0; // Filter even numbers
}).then((result) => {
    console.log(result); // Output: [2, 4] after a delay
});
// 17. Function in array iteration with reduce and async
function processArrayWithReduceAsync(arr, callback, initialValue) {
    return arr.reduce(async (accumulatorPromise, item) => {
        const accumulator = await accumulatorPromise;
        const result = await callback(accumulator, item);
        return result;
    }, Promise.resolve(initialValue));
}