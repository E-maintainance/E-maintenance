let rent = document.getElementsByClassName('tag');
let i;
let x;
console.log(rent);
// let rent2 =document.getElementsByClassName()
// let rent3 =document.getElementsByClassName()
for( i=0;i<rent.length;i++){
  rent[i].addEventListener('click',handlclick);

}
console.log(i);
function handlclick(event){
  console.log(event.target.innerHTML);

  event.preventDefault();
  if(event.target.innerHTML=='Kia Rio 3'){
    x=14.99;

    new pay('Kia Rio 3',x);

  }
  else if(event.target.innerHTML=='Renault Clio'){
    x=19.99;

    new pay('Renault Clio',x);

  }
  else if(event.target.innerHTML=='Honda Civic 1999'){
    x=9.99;

    new pay('Honda Civic 1999',x);
  }
  saving();
  swal.fire({
    title: `Are you sure you want ${event.target.innerHTML} ?`,
    text: 'Isn`t it the Coolest car ever?',
    icon: 'question',
  }).then(function() {
    location.replace('../pages/payment.html');
  });
}


pay.all=[];

function pay(car,price){
  this.car=car;
  this.price=price;
  console.log(this.price);
  pay.all.push(this);

}







function saving(){
  convert=JSON.stringify(pay.all);
  localStorage.setItem('rent_info',convert);

}




