const inventory = require('./car_inventory');

// we can use array.find method but here we will try and get it via for loop.
// const res= inventory.find((x)=>x.id===4);

// added for-loop to search within an array and find the object via id, x here is the id to be searched
function findObjectByID(x)
{
   for(let i=0; i<inventory.length;i++)
   {
       if(inventory[i].id===x)
       {
           return inventory[i];
       }
   }
   return undefined;
} 
// we take the input x from user and pass on the findById function as output
function findById(x)
{
    const res= findObjectByID(x);
    // if car searched for is not there.
    if(res===undefined)
    {
        return 'The car you are searching is not in inventory.'
    }
    else
    {
        return `Car ${res.id} is a ${res.car_year} ${res.car_make} ${res.car_model}.`;
    }
}

//console.log (findById(11));
//  we are exporting only findById function relevant to the user

module.exports = findById;

