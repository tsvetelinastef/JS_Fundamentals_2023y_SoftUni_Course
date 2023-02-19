/* function biscuitFactory(biscuitsPerDay, workers, competingFactoryProduction) {
    let total = 0;
    for (let i = 1; i <= 30; i++) {
      let biscuitsToday = biscuitsPerDay * workers;
      if (i % 3 === 0) {
        biscuitsToday *= 0.7;
      }
      total += Math.floor(biscuitsToday);
    }
  
    const difference = total - competingFactoryProduction;
    const percentage = Math.abs((difference / competingFactoryProduction) * 100).toFixed(2);
  
    let message = `You have produced ${total} biscuits for the past month.`;
    if (difference > 0) {
      message += ` You produce ${percentage} percent more biscuits.`;
    } else {
      message += ` You produce ${percentage} percent less biscuits.`;
    }
  
    return message;
  }
  */









/*
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let biscuitPerDay = 0;
let workerCount = 0;
let competingBiscuitCount = 0;
let totalBiscuits = 0;

rl.question('Enter the number of biscuits produced per day: ', (biscuits) => {
  biscuitPerDay = parseInt(biscuits);

  rl.question('Enter the number of workers: ', (workers) => {
    workerCount = parseInt(workers);

    rl.question('Enter the number of biscuits that competing factory produces for 30 days: ', (competingBiscuits) => {
      competingBiscuitCount = parseInt(competingBiscuits);

      for (let i = 1; i <= 30; i++) {
        let helper = biscuitPerDay * workerCount;
        if (i % 3 === 0) {
          helper *= 0.75;
        }
        totalBiscuits += Math.floor(helper);
      }

      console.log(`You have produced ${totalBiscuits} biscuits for the past month.`);

      let difference = totalBiscuits - competingBiscuitCount;
      let percentage = Math.abs((difference / competingBiscuitCount) * 100).toFixed(2);

      if (difference > 0) {
        console.log(`You produce ${percentage} percent more biscuits.`);
      } else {
        console.log(`You produce ${percentage} percent less biscuits.`);
      }

      rl.close();
    });
  });
});
==================================================================================
==================================================================================
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('', (input) => {
    const inputArr = input.split(' ').map(Number);
    const biscuit = inputArr[0];
    const workers = inputArr[1];
    const other = inputArr[2];
    let total = 0;

    for (let i = 0; i < 30; i++) {
        let helper = biscuit * workers;
        if (i % 3 === 0) {
            helper *= 0.75;
            total += Math.floor(helper);
        } else {
            total += helper;
        }
    }

    console.log(`You have produced ${total.toFixed(0)} biscuits for the past month.`);

    total -= other;

    if (total > 0) {
        console.log(`You produce ${(total / other * 100).toFixed(2)} percent more biscuits.`);
    } else {
        console.log(`You produce ${Math.abs(total / other * 100).toFixed(2)} percent less biscuits.`);
    }

    rl.close();
});
*/



function biscuitFactory(biscuitsPerDay, workersCount, competingFactoryBiscuits) {
    let daysInMonth = 30;
    let totalBiscuits = 0;
  
    for (let i = 1; i <= daysInMonth; i++) {
      let biscuits = biscuitsPerDay * workersCount;
    
    if (i % 3 === 0) {
        biscuits = Math.floor(biscuits * 0.75);
      }
      totalBiscuits += biscuits;
    }
  
    console.log(`You have produced ${totalBiscuits} biscuits for the past month.`);
  
    let diffPercentage = Math.abs( ((competingFactoryBiscuits - totalBiscuits ) / competingFactoryBiscuits) * 100).toFixed(2);
  
    if (totalBiscuits > competingFactoryBiscuits) {
      console.log(`You produce ${diffPercentage} percent more biscuits.`);
    } else {
      console.log(`You produce ${diffPercentage} percent less biscuits.`);
    }
  }
  

  biscuitFactory(78, 8, 16000);
  //You have produced 17160 biscuits for the past month.
  //You produce 7.25 percent more biscuits.
  
  function biscuitFactory(input) {
    let workArr = input.slice();
    let quantityPerWorker = workArr.shift();
    let workerCount = workArr.shift();
    let biscuitCountCompetitor = workArr.shift(); // per 30 days
    let dailyProduction = 0;
    let monthlyProduction = 0;
 
    for (let i = 1; i <= 30; i++) {
        dailyProduction = workerCount * quantityPerWorker;
 
        if (i % 3 === 0) {
            dailyProduction = Math.floor(dailyProduction * 0.75);
        }
        monthlyProduction += dailyProduction;
    }
 
    let difference = (Math.abs(biscuitCountCompetitor - monthlyProduction) / biscuitCountCompetitor) * 100;
 
    console.log(`You have produced ${monthlyProduction} biscuits for the past month.`);
    
    if (monthlyProduction > biscuitCountCompetitor) {
        console.log(`You produce ${difference.toFixed(2)} percent more biscuits.`);
    } else {
        console.log(`You produce ${difference.toFixed(2)} percent less biscuits.`);
    }
}


