const inventory= require('./car_inventory');

// get last object from the array
const last_car= inventory[inventory.length-1];

function getLastCar()
{
    return `Last car is a ${last_car.car_make} ${last_car.car_model}.`;
}
// console.log(getLastCar());

module.exports = getLastCar;