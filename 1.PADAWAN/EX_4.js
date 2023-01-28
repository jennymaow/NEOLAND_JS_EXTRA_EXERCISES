
//Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos.

const products = [
    { name: "Funko Dr. Strange", sellCount: 10 },
    { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
    { name: "Sable laser FX", sellCount: 23 },
    { name: "Varita de Voldemort", sellCount: 6 },
  ];

let sumSellCount = 0;

for (const product of products){
    sumSellCount += product.sellCount;
}

console.log (sumSellCount);