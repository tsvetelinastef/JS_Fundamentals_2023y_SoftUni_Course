function softUniBarIncome(data) {
    //let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*([0-9]+.?\d*)\$/;
    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>[0-9]+.?\d*)\$/g;
    let total = 0;

    for (let line of data) {
        let match = [];
        if (line === "end of shift") {
            break;
        }

        if (pattern.test(line)) {
            match = line.match(pattern);
            let price = Number(match.groups.count) * Number(match.groups.price);
            total += price;
            console.log(`${match.groups.name}: ${match.groups.product} - ${price.toFixed(2)}`);
        }
    }

    console.log(`Total income: ${total.toFixed(2)}`);
}

softUniBarIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']);

/*
softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift']);
*/

/* 
the one that runs good in Judje: 
function softUniBarIncome(string) {

    let totalSum = 0
    let regex = /%(?<name>[A-Z][a-z]+)%[^$%|.]*<(?<product>\w+)>[^$%|.]*\|(?<count>\d+)\|[^$%|.]*?(?<price>\d+\.?\d+)\$/gm
    let text = string.join('-')

    let current = regex.exec(text);

    while (current) {
        let currentPrice = current.groups.count * current.groups.price
        console.log(`${current.groups.name}: ${current.groups.product} - ${currentPrice.toFixed(2)}`);
        totalSum += currentPrice
        current = regex.exec(text)
    }
    console.log(`Total income: ${totalSum.toFixed(2)}`);
}
*/