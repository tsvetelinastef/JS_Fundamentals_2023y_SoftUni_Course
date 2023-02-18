function passwordValidator(password) {
    let isLongEnough = false;
    let isLetterAndDigits = true;
    let isTwoDigits = false;
    let digitCounter = 0;

    if (password.length >= 6 && password.length <= 10) {
        isLongEnough = true;
    }

    for (let el of password) {
        let current = el.charCodeAt(0);

        if (isLetterAndDigits) {
            if (
                (current >= 48 && current <= 57) ||
                (current >= 65 && current <= 90) ||
                (current >= 97 && current <= 122)
            ) {
                isLetterAndDigits = true;
            } else {
                isLetterAndDigits = false;
            }
        }

        if (current >= 48 && current <= 57) {
            digitCounter++;
        }
    }

    if (digitCounter >= 2) {
        isTwoDigits = true;
    }

    if (!isLongEnough) {
        console.log("Password must be between 6 and 10 characters");
    }
    if (!isLetterAndDigits) {
        console.log("Password must consist only of letters and digits");
    }
    if (!isTwoDigits) {
        console.log("Password must have at least 2 digits");
    }

    if (isLongEnough && isLetterAndDigits && isTwoDigits) {
        console.log("Password is valid");
    }
}


passwordValidator('logIn');
// Password must be between 6 and 10 characters
// Password must have at least 2 digits
passwordValidator('MyPass123');
//  Password is valid
passwordValidator('Pa$s$s');
// Password must consist only of letters and digits
// Password must have at least 2 digits

/*
 // let hasValidLength = validateLength(password);
    // let hasValidSpecialChar = validateNonSpecialChar(password);
    // let hasValidDigit = checkForContainsTwoNumbers(password);
    // printResult(hasValidLength, hasValidSpecialChar, hasValidDigit);


    // "Password must be between 6 and 10 characters"
    function vlidateLength(password) {
        if (password.length >= 6 && password.length <= 10) {
            return true;
        } else {
            return false;
        }
    }
    // "Password must consist only of letters and digits"
    function validateNonSpecialChar(text) {
        for (let char of text) {
            // 48 to 57 ---> 0 to 9
            // 65 to 90 --->  A to Z
            // 97 to 122 ---> a to z
            let num = char.charCodeAt(0);
            let isLowerChar = checkCharForLowerCase(num);
            let isUpperChar = checkCharForUpperCase(num);
            let isNumber = checkContainNumber(num);

            if (!isLowerChar && !isUpperChar && !isNumber) {
                return false;
            }
        }
        return true;
    }

    function checkContainNumber(num) {
        if (num >= 48 && num <= 57) {
            return true;
        }
        return false;
    }

    function checkCharForUpperCase(num) {
        if (num >= 65 && num <= 90) {
            return true;
        }
        return false;
    }

    function checkCharForLowerCase(num) {
        if (num >= 48 && num <= 57) {
            return true;
        }
        return false;
    }

    function checkForContainsTwoNumbers(password) {
        let counter = 0;
        for (let ch of password) {
            let isNumber = checkContainNumber(ch.charCodeAt(0));
            if (isNumber) {
                counter++;
            }
        }

        if (counter >= 2) {  // return counter >= 2
            return true;
        }
        return false;
    }

    // "Print result to console"
    function printResult(validLength, validSymbol, validDigit) {
        if (!validLength) {
            console.log("Password must be between 6 and 10 characters");
        }

        if (!validSymbol) {
            console.log("Password must consist only of letters and digits");
        }

        if (!validDigit) {
            console.log("Password must have at least 2 digits");
        }

        if (validLength && validSymbol && validDigit) {
            console.log("Password is valid");
        }
    }
*/