// Step 1: Locate the Buy Button
let buyButton = document.querySelector(".OrderButton_buy__BudTx"); // Modify selector to match your button
let sellButton = document.querySelector(".OrderButton_sell__lnYho"); // Modify selector to match your button
let switch1 = document.querySelectorAll(".MuiSwitch-root");
// Helper function to delay actions
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function executeOrder(orderNum,delayTime) {
  for (let i = 0; i < orderNum; i++) {
    buyButton.click();
    
    // Step 3: Click TP and SL Switches
    let tp = switch1[1]; // TP Switch
    let sl = switch1[2]; // SL Switch
    tp.click();
    sl.click();

    let buyButton2 = document.querySelector(".ConfirmationButton_buy__m3WZI"); // Modify selector to match your button
    // buyButton2.classList.remove("ConfirmationButton_disabled__n+GyL");
    if (buyButton2) {
      buyButton2.click();
      console.log("Buy action triggered");
      await delay(delayTime); // Wait 1 second before the next iteration
    } else {
      console.log("Buy confirmation button not found");
    }

    // await delay(delayTime); // Wait 1 second before the next iteration
  // }
  // for (let i = 0; i < orderNum; i++) {
    sellButton.click();
    tp.click();
    sl.click();

    let sellButton2 = document.querySelector(".ConfirmationButton_sell__5ODt8"); // Modify selector to match your button
    // sellButton2.classList.remove("ConfirmationButton_disabled__5ODt8");
    if (sellButton2) {
      sellButton2.click();
      // setTimeout(() => {
        console.log("Sell action triggered");
        await delay(delayTime); 
      // }, 1000);
    } else {
      console.log("Sell confirmation button not found");
    }
  }
}

// Call the function to start the order process
executeOrder();