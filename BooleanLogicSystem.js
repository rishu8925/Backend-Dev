// Security variables
let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

// Check security status
function checkSecurity() {
    if (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) {
        console.log("Secure");
    } else {
        console.log("Unsafe");
    }
}

// Test multiple scenarios
checkSecurity(); // All true

// Example: door unlocked
isDoorLocked = false;
checkSecurity(); // Unsafe
