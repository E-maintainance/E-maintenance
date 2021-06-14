        let data=localStorage.getItem("rent_info")
        let parse=JSON.parse(data)
    
        let payment = [];
        payment=parse;
        console.log(payment)
        console.log("okkk")
        let k =document.getElementById("product")
        let kk=document.getElementById("pri")
        let kkk=document.getElementById("pric")
        k.textContent=`${payment[0].car}`
        kk.textContent=`${payment[0].price}`
        kkk.textContent=`${payment[0].price}`