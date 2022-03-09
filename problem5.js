const inventory = require('./car_inventory');
const cars = require('./problem4');

const carList=[];
function carNum(year)
{
    let carscount=0;
    
    for(let i=0;i<cars.carYears.length;i++)
    {
        if(cars.carYears[i]<year)
        {
            carscount++;
            carList.push(inventory[i]);
        }
    }
    return carscount;
}
//  console.log(carNum(2010));
// console.log(carList);

exports.carNum = carNum;
exports.carList=carList;