const inventory = require('./car_inventory');
const cars = require('./problem4');


function carNum(year)
{
    // let carscount=0;
    const carsCheck={
        carscount:0,
        carList: [],
    };

    for(let i=0;i<cars.carYears.length;i++)
    {
        if(cars.carYears[i]<year)
        {
            carsCheck.carscount++;
            carsCheck.carList.push(inventory[i]);
        }
    }
    return carsCheck;
}
//  console.log(carNum(2010));
// console.log(carList);

module.exports=carNum;