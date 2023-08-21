function getValue(elementId){
    const inputElement = document.getElementById(elementId);
    const inputElementString = inputElement.innerText;
    const inputValue = parseFloat(inputElementString);
    return inputValue;
}
//Get element and value of sum price
const sumPriceElement = document.getElementById('sum-price');
const sumPriceValue = getValue('sum-price');
//Get element and value of discount price
const discountPriceElement = document.getElementById('discount-price');
const discountPriceValue = getValue('discount-price');
//Get element and value of total price
const totalPriceElement = document.getElementById('total-price');
const totalPriceValue = getValue('total-price');
//Make purchase button enable
const purchaseEle = document.getElementById('purchase-btn');

// Kitchen item 1 
const kt1 = document.getElementById('kitchen-div-id1');
kt1.addEventListener('click',function(){
    const kitchenItem1Element = document.getElementById('kitchen-item-id1');
    const kitchenItem1Name = kitchenItem1Element.innerText;
    //Get the element where you want to add the card
    const cardEntry = document.getElementById('dynamic-card-div');
    //create a element you want to add
    const cardP = document.createElement('p');//tag name of element
    cardP.style.fontSize='20px';
    cardP.style.paddingLeft='8px';
    cardP.style.fontWeight='bold';
    //count the total child of parent
    const count = cardEntry.childElementCount;
    //Set inner HTML it could be dynamic template string
    cardP.innerHTML = `${count+1}.  ${kitchenItem1Name}`;
    // cardP.innerText = kitchenItem1Element;
    //append the child to its parent
    cardEntry.appendChild(cardP);
    //get the price of the item
    const itemPrice = getValue('k-price1');
    //Change the value of prices section
    const previousPriceElement = document.getElementById('sum-price').innerText;
    const addedPrice = itemPrice + parseFloat(previousPriceElement);
    sumPriceElement.innerText = addedPrice;
    totalPriceElement.innerText = addedPrice;
    purchaseEle.removeAttribute('disabled');
})
// Kitchen item 2 
const kt2 = document.getElementById('kitchen-div-id2');
kt2.addEventListener('click',function(){
    console.log('child2');
    const kitchenItem1Element = document.getElementById('kitchen-item-id2');
    const kitchenItem1Name = kitchenItem1Element.innerText;
    //Get the element where you want to add the card
    const cardEntry = document.getElementById('dynamic-card-div');
    //create a element you want to add
    const cardP = document.createElement('p');//tag name of element
    cardP.style.fontSize='20px';
    cardP.style.paddingLeft='8px';
    cardP.style.fontWeight='bold';
    //count the total child of parent
    const count = cardEntry.childElementCount;
    //Set inner HTML it could be dynamic template string
    cardP.innerHTML = `${count+1}.  ${kitchenItem1Name}`;
    // cardP.innerText = kitchenItem1Element;
    //append the child to its parent
    cardEntry.appendChild(cardP);
    //get the price of the item
    const itemPrice = getValue('k-price2');
    //Change the value of prices section
    const previousPriceElement = document.getElementById('sum-price').innerText;
    const addedPrice = itemPrice + parseFloat(previousPriceElement);
    sumPriceElement.innerText = addedPrice;
    totalPriceElement.innerText = addedPrice;
    purchaseEle.removeAttribute('disabled');
})
// Kitchen item 3 
const kt3 = document.getElementById('kitchen-div-id3');
kt3.addEventListener('click',function(){
    console.log('child3');
    const kitchenItem1Element = document.getElementById('kitchen-item-id3');
    const kitchenItem1Name = kitchenItem1Element.innerText;
    //Get the element where you want to add the card
    const cardEntry = document.getElementById('dynamic-card-div');
    //create a element you want to add
    const cardP = document.createElement('p');//tag name of element
    cardP.style.fontSize='20px';
    cardP.style.paddingLeft='8px';
    cardP.style.fontWeight='bold';
    //count the total child of parent
    const count = cardEntry.childElementCount;
    //Set inner HTML it could be dynamic template string
    cardP.innerHTML = `${count+1}.  ${kitchenItem1Name}`;
    // cardP.innerText = kitchenItem1Element;
    //append the child to its parent
    cardEntry.appendChild(cardP);
    //get the price of the item
    const itemPrice = getValue('k-price1');
    //Change the value of prices section
    const previousPriceElement = document.getElementById('sum-price').innerText;
    const addedPrice = itemPrice + parseFloat(previousPriceElement);
    sumPriceElement.innerText = addedPrice;
    totalPriceElement.innerText = addedPrice;
    purchaseEle.removeAttribute('disabled');
})
// Sports item 1  
const sp1 = document.getElementById('sports-div-id1');
sp1.addEventListener('click',function(){
    const sportsItem1Element = document.getElementById('sports-item-id1');
    const sportsItem1Name = sportsItem1Element.innerText;
    //Get the element where you want to add the card
    const cardEntry = document.getElementById('dynamic-card-div');
    //create a element you want to add
    const cardP = document.createElement('p');//tag name of element
    cardP.style.fontSize='20px';
    cardP.style.paddingLeft='8px';
    cardP.style.fontWeight='bold';
    //count the total child of parent
    const count = cardEntry.childElementCount;
    //Set inner HTML it could be dynamic template string
    cardP.innerHTML = `${count+1}.  ${sportsItem1Name}`;
    // cardP.innerText = kitchenItem1Element;
    //append the child to its parent
    cardEntry.appendChild(cardP);
    //get the price of the item
    const itemPrice = getValue('s-price1');
    //Change the value of prices section
    const previousPriceElement = document.getElementById('sum-price').innerText;
    const addedPrice = itemPrice + parseFloat(previousPriceElement);
    sumPriceElement.innerText = addedPrice;
    totalPriceElement.innerText = addedPrice;
    purchaseEle.removeAttribute('disabled');
})
// Sports item 2 
const sp2 = document.getElementById('sports-div-id2');
sp2.addEventListener('click',function(){
    const sportsItem1Element = document.getElementById('sports-item-id2');
    const sportsItem1Name = sportsItem1Element.innerText;
    //Get the element where you want to add the card
    const cardEntry = document.getElementById('dynamic-card-div');
    //create a element you want to add
    const cardP = document.createElement('p');//tag name of element
    cardP.style.fontSize='20px';
    cardP.style.paddingLeft='8px';
    cardP.style.fontWeight='bold';
    //count the total child of parent
    const count = cardEntry.childElementCount;
    //Set inner HTML it could be dynamic template string
    cardP.innerHTML = `${count+1}.  ${sportsItem1Name}`;
    // cardP.innerText = kitchenItem1Element;
    //append the child to its parent
    cardEntry.appendChild(cardP);
    //get the price of the item
    const itemPrice = getValue('s-price2');
    //Change the value of prices section
    const previousPriceElement = document.getElementById('sum-price').innerText;
    const addedPrice = itemPrice + parseFloat(previousPriceElement);
    sumPriceElement.innerText = addedPrice;
    totalPriceElement.innerText = addedPrice;
    purchaseEle.removeAttribute('disabled');
})
// Sports item 3 
const sp3 = document.getElementById('sports-div-id3');
sp3.addEventListener('click',function(){
    console.log('child3');
    const sportsItem1Element = document.getElementById('sports-item-id3');
    const sportsItem1Name = sportsItem1Element.innerText;
    //Get the element where you want to add the card
    const cardEntry = document.getElementById('dynamic-card-div');
    //create a element you want to add
    const cardP = document.createElement('p');//tag name of element
    cardP.style.fontSize='20px';
    cardP.style.paddingLeft='8px';
    cardP.style.fontWeight='bold';
    //count the total child of parent
    const count = cardEntry.childElementCount;
    //Set inner HTML it could be dynamic template string
    cardP.innerHTML = `${count+1}.  ${sportsItem1Name}`;
    // cardP.innerText = kitchenItem1Element;
    //append the child to its parent
    cardEntry.appendChild(cardP);
    //get the price of the item
    const itemPrice = getValue('s-price3');
    //Change the value of prices section
    const previousPriceElement = document.getElementById('sum-price').innerText;
    const addedPrice = itemPrice + parseFloat(previousPriceElement);
    sumPriceElement.innerText = addedPrice;
    totalPriceElement.innerText = addedPrice;
    purchaseEle.removeAttribute('disabled');
})
// Furniture item 1 
const fn1 = document.getElementById('furniture-div-id1');
fn1.addEventListener('click',function(){
    const furnitureItem1Element = document.getElementById('furniture-item-id1');
    const furnitureItem1Name = furnitureItem1Element.innerText;
    //Get the element where you want to add the card
    const cardEntry = document.getElementById('dynamic-card-div');
    //create a element you want to add
    const cardP = document.createElement('p');//tag name of element
    cardP.style.fontSize='20px';
    cardP.style.paddingLeft='8px';
    cardP.style.fontWeight='bold';
    //count the total child of parent
    const count = cardEntry.childElementCount;
    //Set inner HTML it could be dynamic template string
    cardP.innerHTML = `${count+1}.  ${furnitureItem1Name}`;
    // cardP.innerText = kitchenItem1Element;
    //append the child to its parent
    cardEntry.appendChild(cardP);
    //get the price of the item
    const itemPrice = getValue('f-price1');
    //Change the value of prices section
    const previousPriceElement = document.getElementById('sum-price').innerText;
    const addedPrice = itemPrice + parseFloat(previousPriceElement);
    sumPriceElement.innerText = addedPrice;
    totalPriceElement.innerText = addedPrice;
    purchaseEle.removeAttribute('disabled');
})
// Furniture item 2 
const fn2 = document.getElementById('furniture-div-id2');
fn2.addEventListener('click',function(){
    console.log('child2');
    const furnitureItem1Element = document.getElementById('furniture-item-id2');
    const furnitureItem1Name = furnitureItem1Element.innerText;
    //Get the element where you want to add the card
    const cardEntry = document.getElementById('dynamic-card-div');
    //create a element you want to add
    const cardP = document.createElement('p');//tag name of element
    cardP.style.fontSize='20px';
    cardP.style.paddingLeft='8px';
    cardP.style.fontWeight='bold';
    //count the total child of parent
    const count = cardEntry.childElementCount;
    //Set inner HTML it could be dynamic template string
    cardP.innerHTML = `${count+1}.  ${furnitureItem1Name}`;
    // cardP.innerText = kitchenItem1Element;
    //append the child to its parent
    cardEntry.appendChild(cardP);
    //get the price of the item
    const itemPrice = getValue('f-price2');
    //Change the value of prices section
    const previousPriceElement = document.getElementById('sum-price').innerText;
    const addedPrice = itemPrice + parseFloat(previousPriceElement);
    sumPriceElement.innerText = addedPrice;
    totalPriceElement.innerText = addedPrice;
    purchaseEle.removeAttribute('disabled');
})
// Furntinure item 3
const fn3 = document.getElementById('furniture-div-id3');
fn3.addEventListener('click',function(){
    console.log('child3');
    const furnitureItem1Element = document.getElementById('furniture-item-id3');
    const furnitureItem1Name = furnitureItem1Element.innerText;
    //Get the element where you want to add the card
    const cardEntry = document.getElementById('dynamic-card-div');
    //create a element you want to add
    const cardP = document.createElement('p');//tag name of element
    cardP.style.fontSize='20px';
    cardP.style.paddingLeft='8px';
    cardP.style.fontWeight='bold';
    //count the total child of parent
    const count = cardEntry.childElementCount;
    //Set inner HTML it could be dynamic template string
    cardP.innerHTML = `${count+1}.  ${furnitureItem1Name}`;
    // cardP.innerText = kitchenItem1Element;
    //append the child to its parent
    cardEntry.appendChild(cardP);
    //get the price of the item
    const itemPrice = getValue('f-price3');
    //Change the value of prices section
    const previousPriceElement = document.getElementById('sum-price').innerText;
    const addedPrice = itemPrice + parseFloat(previousPriceElement);
    sumPriceElement.innerText = addedPrice;
    totalPriceElement.innerText = addedPrice;
    purchaseEle.removeAttribute('disabled');
})