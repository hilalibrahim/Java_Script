function store() 
{
const brands=inputbrand.value;
const prices=inputprice.value;
vehicle={
    BRAND:brands,
    PRICE:prices
}

let cardata=JSON.stringify(vehicle);
localStorage.setItem(inputkey.value,cardata);


alert('it is stored in local storage')
}

function retrieve() 
{
  const key= localStorage.getItem(keyret.value);
  display.innerHTML=key
  event.preventDefault()
  alert('item retrieved')
    
}

function remove() 
{
    const key=localStorage.removeItem(keyremove.value);

   event.preventDefault()
   alert('item removed')
    
}

function clearall()
{
    localStorage.clear()
    
}