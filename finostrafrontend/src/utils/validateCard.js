export const isValidCardNumber = (number) => {
    const digits = number.replace(/\s+/g, '').split('').reverse().map(Number);
    if (digits.length !== 16) return false;
    const sum = digits.reduce((acc, digit, idx) => {
        if (idx % 2 === 1) {
            let double = digit * 2;
            if (double > 9) double -= 9;
            return acc + double;
        }
        return acc + digit;
    }, 0);
    return sum % 10 === 0;
};

export function isValidExpiry(value) {
    const [monthStr, yearStr] = value.split("/");

    if (!monthStr || !yearStr || monthStr.length !== 2 || yearStr.length !== 2) return false;

    const month = parseInt(monthStr, 10);
    const year = parseInt("20" + yearStr, 10); // "25" -> 2025

    if (isNaN(month) || isNaN(year)) return false;
    if (month < 1 || month > 12) return false;

    const now = new Date();
    const expiry = new Date(year, month - 1, 1);
    const endOfMonth = new Date(expiry.getFullYear(), expiry.getMonth() + 1, 0);

    return endOfMonth >= now;
}