const inventory = require('./car_inventory');

// add all the car models to a separate array
let carModels= [];
for(let i=0; i<inventory.length;i++)
{
    carModels[i]=inventory[i].car_model;
}

// Next we write a quicksort function to sort models

// Swap two elements
function swap(arr, left, right)
{
    let temp= arr[left];
    arr[left]=arr[right];
    arr[right]=temp;
}

// take a pivot element and partition the array returns the index which is at proper place.
function partition(arr, left, right)
{
    let pivot = arr[Math.floor((left+right)/2)];
    // console.log("pivot:"+pivot);
    let i =left;
    let j= right;
    while(i<=j)
    {
        while(arr[i]<pivot)
        {
            i++;
        }
        while(arr[j]>pivot)
        {
            j--;
        }
        if(i<=j)
        {
            swap(arr, i, j);
            i++;
            j--;
        }
    }
    return i;
}

// now assure all the indexes are at proper position
function quicksort(arr,left, right)
{
    // console.log("entering quicksort");
   let index;
   if(arr.length===1)
   {
       return;
   }
   if(left>=right)
   {
       return;
   }
   index= partition(arr,left,right);
   quicksort(arr,left,index-1);
   quicksort(arr,index,right);
}

// modelSort function only takes array as input
function modelSort(arr)
{
    quicksort(arr, 0, arr.length-1);
    return arr;
}

carModels= modelSort(carModels);
// console.log(carModels.sort());
// console.log(modelSort(carModels));
// console.log(carModels);

module.exports = carModels;