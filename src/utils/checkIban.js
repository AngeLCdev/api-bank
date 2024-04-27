const checkIban = (iban) => {
    const ibanStripped = iban.replace(/ /g, "");  // remove spaces
    const ibanLength = ibanStripped.length;
    const ibanCheckDigits = ibanStripped.slice(4) + ibanStripped.slice(0, 4);
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const mod97 = (iban) => {
        let remainder = iban.slice(0, 2), i = 2;
        while (i < iban.length) {
            remainder = (remainder + iban.slice(i, i + 7)) % 97;
            i += 7;
        }
        return remainder;
    };

    if (ibanLength < 15 || ibanLength > 34 || ibanStripped.slice(0, 2) !== "ES") {
        return false;
    }

    const mapped = [...ibanCheckDigits].map((char) => {
        const isNum = !isNaN(char);
        return isNum ? char : (letters.indexOf(char) + 10).toString();
    }).join("");

    return mod97(mapped) === 1;
};

module.exports = checkIban;