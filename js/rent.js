
// let z = document.getElementById('but');
// z.addEventListener('click',handelLink);



// function handelLink(event){
//   event.preventdefault ();
//   let a = document.getElementById('choice');
//   // let selectedV;
//   if(document.getElementsByName('true').checked == true){
//     alert('WOOW');
//   }
// }
// handelLink();

document.getElementById('but').addEventListener('click',function (){
//   alert ('hello!!');
  if (document.getElementById('yes').checked == true )
  {
    location.replace('../pages/rent.html');
  }
});

// document.getElementById('but').addEventListener('click',myFunction());
// function myFunction() {

//   location.replace('http://127.0.0.1:5501/pages/rent.html');
// }
// myFunction();
