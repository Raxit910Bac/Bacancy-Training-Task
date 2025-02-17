// Task 5 - setTimeout practical

// Create simple program that will print 1 to n at the interval of 1 second using setTimeout.


// 1.  Using setInterval:

function PrintN(n) {

  let current = 1;

  const interval = setInterval(() => {
    console.log(current);
    if(current === n) clearInterval(interval);
    current ++;
  }, 1000);
}

PrintN(4);


// 2. Using setTimeout:

function newPrintN(n, current = 1) {
  if(current > n) return;
  console.log(current);
  
  setTimeout(() => {
    newPrintN(n, current + 1);   // Call recursively with delay of 1 sec. 
  }, 1000);
}

newPrintN(4);