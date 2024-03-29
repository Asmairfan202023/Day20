"use strict";
// Q60:Self-Running User Profile: Create a quick, self- setup profile for a user that can tell you the user's name and age.
// This profile sets itself up and can share info about the user 
let userProfile = (function () {
    // The user detail are kept inside 
    let name1 = "Asma";
    let age = 30;
    // This part share the user's details
    return {
        displayInfo: function () {
            console.log(`Name: ${name1}, Age: ${age}`);
        }
    };
})();
// Asking the profile tell us about the user
userProfile.displayInfo();
// It tells the user name and age
