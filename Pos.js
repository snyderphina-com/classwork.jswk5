// ===============================
// DATA STORE (Parallel Arrays)
// ===============================

const inventoryNames = [
  "Espresso Machine",
  "Whole Bean Coffee",
  "Industrial Drill",
  "LED Monitor",
  "Office Chair"
];

const inventoryPrices = [250.00, 18.50, 120.00, 200.00, 150.00];

const inventoryStock = [5, 40, 10, 8, 15];  //The names,prices and stock are parallel arrays

let storeRevenue = 0; //tracks total money made,hence we use let cause it changes

const taxRate = 0.075;


function viewInventory() {
  console.log("===============================================");
  console.log("ID | Item Name              | Price   | Stock ");
  console.log("===============================================");

  for (let i = 0; i < inventoryNames.length; i++) { //loops through all products.The .length gets number of items
    let priceFormatted = `$${inventoryPrices[i]} .toFixed(2)`;

    console.log(
      i + "  | " + //the index,i.e, from zero
      inventoryNames[i] + "--------| " + //e.g the coffe
      priceFormatted + " | " +  //prints as $40.00
      inventoryStock[i] //prinst how many remains e.g 10
    );
  }

  console.log("===============================================");
}


function updatePrice(itemIndex, newPrice) {

  if (itemIndex < 0 || itemIndex >= inventoryPrices.length) {
    console.log("ERROR: Invalid item index.");
    return;
  }

  if (typeof newPrice !== "number" || newPrice <= 0) {
    console.log("ERROR: Invalid price value.");
    return;
  }

  inventoryPrices[itemIndex] = newPrice;
  console.log("Price updated successfully.");
}



function restockItem(itemIndex, amountToAdd) {

  if (itemIndex < 0 || itemIndex >= inventoryStock.length) {
    console.log("ERROR: Invalid item index.");
    return;
  }

  if (!Number.isInteger(amountToAdd) || amountToAdd <= 0) {
    console.log("ERROR: Restock amount must be a positive integer.");
    return;
  }

  inventoryStock[itemIndex] += amountToAdd;
  console.log("Item restocked successfully.");
}



function processSale(itemIndex, quantityRequested) {

  // 1️⃣ Validation
  if (itemIndex < 0 || itemIndex >= inventoryNames.length) {
    console.log("ERROR: Invalid item index.");
    return;
  }

  if (!Number.isInteger(quantityRequested) || quantityRequested <= 0) {
    console.log("ERROR: Quantity must be a positive integer.");
    return;
  }

  if (inventoryStock[itemIndex] < quantityRequested) {
    console.log("ERROR: Not enough stock available.");
    return;
  }

  // 2️⃣ Financials
  let subtotal = inventoryPrices[itemIndex] * quantityRequested;

  // 3️⃣ Taxation
  let taxAmount = subtotal * taxRate;

  let grandTotal = subtotal + taxAmount;

  // 4️⃣ State Change
  inventoryStock[itemIndex] -= quantityRequested;

  storeRevenue += grandTotal;

  // 5️⃣ Receipt Logging
  console.log("========== RECEIPT ==========");
  console.log("Item: " + inventoryNames[itemIndex]);
  console.log("Quantity: " + quantityRequested);
  console.log("Subtotal: $" + subtotal.toFixed(2));
  console.log("Tax: $" + taxAmount.toFixed(2));
  console.log("Grand Total: $" + grandTotal.toFixed(2));
  console.log("=============================");
}



function removeProduct(itemIndex) {

  if (itemIndex < 0 || itemIndex >= inventoryNames.length) {
    console.log("ERROR: Invalid item index.");
    return;
  }

  inventoryNames.splice(itemIndex, 1);
  inventoryPrices.splice(itemIndex, 1);
  inventoryStock.splice(itemIndex, 1);

  console.log("Product removed successfully.");
}



viewInventory();

processSale(1, 2);

restockItem(2, 5);

updatePrice(0, 300);

removeProduct(4);

viewInventory();

console.log("Total Store Revenue: $" + storeRevenue.toFixed(2));
