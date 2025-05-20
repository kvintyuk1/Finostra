export function maskCardNumber(number){
    if(!number) return '';
    const clean = number.replace(/\s/g, '');
    const last4 = clean.slice(-4);
    return `**** ${last4}`;
}