// Counter variable
let count = 0;

// Increment function
function increment() {
    count++;
    console.log("Current Count after increment:", count);
}

// Decrement function
function decrement() {
    count--;
    console.log("Current Count after decrement:", count);
}

// Nested function to show scope
function simulateClicks() {
    function innerIncrement() {
        count += 2; // Increment inside nested function
        console.log("Nested Increment Count:", count);
    }
    innerIncrement();
}

// Simulate clicks
increment();
increment();
decrement();
simulateClicks();
