const prompt=require('prompt-sync')();

const inventoryNames=[
'Espresso',
'Whole Bean Coffe',
'Oil',
'Milk',
'Cakes'
];


const inventoryPrices=[250.00, 18.50, 12.00, 20.00, 15.00];

const inventoryStock=[5, 40, 10, 8, 15];

let storeRevenue = 0;

const taxRate = 0.075;
