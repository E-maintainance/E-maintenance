let rent = document.getElementsByClassName("tag")
let i;
console.log(rent)
// let rent2 =document.getElementsByClassName()
// let rent3 =document.getElementsByClassName()
for( i=0;i<rent.length;i++){
rent[i].addEventListener("click",handlclick);
}

function handlclick(event){
    event.preventDefault();
    swal.fire({
        title: `Are you sure you want ${rent[i]} ?`,
        text: 'Isn`t it the Coolest car ever?',
        icon: 'question',
    }).then(function() {
        location.replace("../pages/payment.html");
    });
    }
    

    




    