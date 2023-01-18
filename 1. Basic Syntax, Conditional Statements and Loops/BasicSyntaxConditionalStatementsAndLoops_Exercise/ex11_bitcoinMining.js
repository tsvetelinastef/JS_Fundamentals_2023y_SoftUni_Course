function bitcoinMining(input) {

    let bitcoinPrice = 11949.16;
    let grGoldPrice = 67.51;
    let dayOfBuyingFirstBitcoin = 0;
    let counter = 0;
    let totalIncome = 0;
    let bitcoinCounter = 0;

    for (let i = 0; i < input.length; i++) {
        let currentIncome = grGoldPrice * input[i]; 
        counter++;  // counts my days

        if (counter % 3 === 0) {
            currentIncome *= 0.7;
        }
        totalIncome += currentIncome;
        if (totalIncome >= bitcoinPrice) {
            bitcoinCounter += Math.floor(totalIncome / bitcoinPrice);
            totalIncome -= Math.floor(totalIncome / bitcoinPrice) * bitcoinPrice;

            if (dayOfBuyingFirstBitcoin === 0) {
                dayOfBuyingFirstBitcoin = counter;
              }
        }
    }
    console.log(`Bought bitcoins: ${bitcoinCounter}`);

    if(dayOfBuyingFirstBitcoin > 0){
        console.log(`Day of the first purchased bitcoin: ${dayOfBuyingFirstBitcoin}`);
    } 
    console.log(`Left money: ${totalIncome.toFixed(2)} lv.`);

}

bitcoinMining([100, 200, 300]);
bitcoinMining([50, 100]);
bitcoinMining([3124.15, 504.212, 2511.124]);