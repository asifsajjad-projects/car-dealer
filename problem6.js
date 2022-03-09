const inventory = require('./car_inventory');

const BMWAndAudi= [];

for(let i=0; i<inventory.length;i++)
{
    if(inventory[i].car_make==='BMW'|| inventory[i].car_make==='Audi')
    {
        BMWAndAudi.push(inventory[i]);
    }
}
JSON.stringify(BMWAndAudi);
//console.log(BMWAndAudi);

module.exports= BMWAndAudi;