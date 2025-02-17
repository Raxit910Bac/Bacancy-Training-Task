// Task 8 - Sleep function

// Create sleep function which can stop for loop for given amount of time.

function sleepFunction(params) {
  return new Promise((resolve) => setTimeout(resolve, params));
}

async function runLoop() {
  for (let i = 1; i <= 7; i++) {
    console.log(`Printing ${i}`);
    await sleepFunction(1000);    
  }
  console.log("Loop Over!!");
}

runLoop();