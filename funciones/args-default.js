"use strict";
(() => {
    const fullName = (firstName, upper = false, lastName) => {
        if (upper) {
            return `${firstName} ${lastName || 'No last name'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || 'No last name'}`;
        }
    };
    const name = fullName("Tony", true, 'Stark');
    console.log({ name });
})();
