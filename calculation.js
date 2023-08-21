function getValue(elementId){
    const inputElement = document.getElementById(elementId);
    const inputElementString = inputElement.innerText;
    const inputValue = parseFloat(inputElementString);
    return inputValue;
}
//get the discount price element
const discountPriceEle = document.getElementById('discount-price');

//get the total price element
const totalPriceEle = document.getElementById('total-price');

//get the sum price element
const sumPriceEle = document.getElementById('sum-price');


//Coupon code verification
document.getElementById('coupon-input').addEventListener('keyup',function(event){
    const text = event.target.value;
    const inputField = document.getElementById('coupon-input');
    //get button element
    const couponButton = document.getElementById('coupon-btn');
    const sumValue = getValue('sum-price');
    if(text === 'SELL200' && sumValue>=200){
        couponButton.removeAttribute('disabled');
        //do task
        document.getElementById('coupon-btn').addEventListener('click',function(){
            const discountedPrice = sumValue * (.2);
            discountPriceEle.innerText = discountedPrice.toFixed(2);
            const newPrice = sumValue - discountedPrice;
            totalPriceEle.innerText = newPrice.toFixed(2);
            //clear the input filed
            inputField.value = '';
        })
    }
    else{
        couponButton.setAttribute('disabled',true);
    }
})

//Go back to home button
document.getElementById('home-btn').addEventListener('click',function(){
    discountPriceEle.innerText = '';
    totalPriceEle.innerText = '';
    sumPriceEle.innerText = '';
    window.location.href = './index.html';
})

//Apply loop to color ratings
function changeColor(){
    for(let i=1;i<46;i++){
        let str1 = 'r';
        let str2 = i.toString();
        let inputId = str1.concat(str2);
        console.log(inputId);
        const ratingEle = document.getElementById(inputId);
        if(((i+1)%5===0 || i%5 === 0 )&& (i<=20 || i>35)){
            ratingEle.style.backgroundColor='gold';
            continue;
        }else{
            ratingEle.style.backgroundColor='orange';
        }
    }
}
changeColor();