"use strict";


class InvalidKeyError extends Error {
}

class VaultLockedError extends Error {
}

function accessVault(key) {
    if (key === undefined || Number.isNaN(key)) {
        throw new InvalidKeyError("Key is missing or corrupted");
    }

    if (key !== "SECRET_123") {
        throw new VaultLockedError("Incorrect key provided");
    }

    return "Access Granted";
}


function attemptEntry(key) {
    try {
        console.log(accessVault(key));
    } catch (e) {
        if (e instanceof InvalidKeyError) {
            console.log("Security Alert: System corruption detected.");
        } else if (e instanceof VaultLockedError) {
            console.log("User Error: Please try again.");
        } else {
            throw e;
        }
    } finally {
        console.log("Vault attempt completed.");
    }
}

attemptEntry("SECRET_123");
attemptEntry("wrong");
attemptEntry(undefined);
attemptEntry(NaN);


function testCorrectKey() {
    return accessVault("SECRET_123") === "Access Granted";
}

function testInvalidKey() {
    try {
        accessVault(undefined);
        return false;
    } catch (e) {
        return e instanceof InvalidKeyError;
    }
}

function testNaNKey() {
    try {
        accessVault(NaN);
        return false;
    } catch (e) {
        return e instanceof InvalidKeyError;
    }
}

function testWrongKey() {
    try {
        accessVault("wrong");
        return false;
    } catch (e) {
        return e instanceof VaultLockedError;
    }
}

function runTest(name, result) {
    if (result) {
        console.log(name + ": PASSED");
    } else {
        console.log(name + ": FAILED");
    }
}

console.log("Automated Testing");

runTest("Correct Key Test", testCorrectKey());
runTest("Undefined Key Test", testInvalidKey());
runTest("NaN Key Test", testNaNKey());
runTest("Wrong Key Test", testWrongKey());


console.log("Manual Testing");

attemptEntry("");
attemptEntry(123);
attemptEntry(null);
attemptEntry({});
attemptEntry([]);
attemptEntry("SECRET_123");
attemptEntry(undefined);
attemptEntry(NaN);