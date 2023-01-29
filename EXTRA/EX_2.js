const price1 = 8;
const ivaPrice1 = price1 * 1.21;
const totalPrice1 = ivaPrice1 + 4.95;

const price2 = 20;
const ivaPrice2 = price2 * 1.21;
const totalPrice2 = ivaPrice2 + 4.95;


const priceCalculator = (price)=>{
    let totalPrice = price*1.21 + 4.95;
    return totalPrice
}

console.log (priceCalculator(8));