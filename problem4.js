const inventory = require('./car_inventory');

const carYears= [];
// add car years to the array
for(let i=0; i< inventory.length;i++)
{
    carYears[i]=inventory[i].car_year;
}

const uniqCarYears =[];

// remove the repeated car years
for(let j=0; j<carYears.length;j++)
{
    let key=0;
    year=carYears[j];
    for(let k=0;k<uniqCarYears.length;k++)
    {
        if(year===uniqCarYears[k])
        {
            key=1;
            continue;
        }
    }
    if(key===0)
    {
        uniqCarYears.push(year);
    }
    
}

// console.log(carYears);
// console.log(uniqCarYears);

exports.carYears = carYears;
exports.uniqCarYears = uniqCarYears;
