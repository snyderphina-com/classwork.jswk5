// ======================================
// IMPORT PROMPT-SYNC (FOR USER INPUT)
// ======================================
const prompt = require("prompt-sync")();


// ======================================
// DATA STORE (PARALLEL ARRAYS)
// ======================================
const inventoryNames = [
  "Espresso Machine",
  "Whole Bean Coffee",
  "Industrial Drill",
  "LED Monitor",
  "Office Chair"
];

const inventoryPrices = [250.00, 18.50, 120.00, 200.00, 150.00];
const inventoryStock = [5, 40, 10, 8, 15];

let storeRevenue = 0;
const taxRate = 0.075;


// ======================================
// MODULE A: VIEW INVENTORY
// ======================================
function viewInventory() {

  console.log("\n====== INVENTORY REPORT ======");

  for (let i = 0; i < inventoryNames.length; i++) {

    let priceFormatted = "$" + inventoryPrices[i].toFixed(2);

    console.log(
      i + " | " +
      inventoryNames[i] + " | " +
      priceFormatted + " | Stock: " +
      inventoryStock[i]
    );
  }

  console.log("==============================\n");
}


// ======================================
// MODULE C: PROCESS SALE
// ======================================
function processSale(itemIndex, quantityRequested) {

  if (itemIndex < 0 || itemIndex >= inventoryNames.length) {
    console.log("ERROR: Invalid item index.");
    return;
  }

  if (!Number.isInteger(quantityRequested) || quantityRequested <= 0) {
    console.log("ERROR: Quantity must be positive integer.");
    return;
  }

  if (inventoryStock[itemIndex] < quantityRequested) {
    console.log("ERROR: Not enough stock.");
    return;
  }

  let subtotal = inventoryPrices[itemIndex] * quantityRequested;
  let taxAmount = subtotal * taxRate;
  let grandTotal = subtotal + taxAmount;

  inventoryStock[itemIndex] -= quantityRequested;
  storeRevenue += grandTotal;

  console.log("\n====== RECEIPT ======");
  console.log("Item: " + inventoryNames[itemIndex]);
  console.log("Quantity: " + quantityRequested);
  console.log("Subtotal: $" + subtotal.toFixed(2));
  console.log("Tax: $" + taxAmount.toFixed(2));
  console.log("Total: $" + grandTotal.toFixed(2));
  console.log("=====================\n");
}


// ======================================
// MANAGER AUDIT MODE
// ======================================
function managerAudit() {

  let password = prompt("Enter Manager Password: ");

  if (password !== "admin123") {
    console.log("ACCESS DENIED.");
    return;
  }

  console.log("\n=== MANAGER AUDIT MODE ===");
  console.log("Total Revenue: $" + storeRevenue.toFixed(2));
  console.log("Total Products: " + inventoryNames.length);
  console.log("==========================\n");
}


// ======================================
// CLI MAIN MENU LOOP
// ======================================
function startPOS() {

  let running = true;

  while (running) {

    console.log("1. View Inventory");
    console.log("2. Process Sale");
    console.log("3. Manager Audit");
    console.log("4. Exit");

    let choice = prompt("Choose option: ");

    if (choice === "1") {

      viewInventory();

    } else if (choice === "2") {

      let id = Number(prompt("Enter Item ID: "));
      let qty = Number(prompt("Enter Quantity: "));

      processSale(id, qty);

    } else if (choice === "3") {

      managerAudit();

    } else if (choice === "4") {

      running = false;
      console.log("System shutting down...");

    } else {

      console.log("Invalid option.");

    }
  }
}


// START SYSTEM
startPOS();