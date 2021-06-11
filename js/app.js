const custumer_form=document.getElementById("form")





function Custumer_Data(fname,lname,phone,email,year,brand,model,area){
    this.fname = fname;
    this.lname = lname;
    this.phone = phone;
    this.email =email;
    this.year = year;
    this.brand = brand;
    this.model = model;
    this.area=0;

    Custumer_Data.alldata.push(this);
    
  }

  Custumer_Data.alldata=[]

  
  
  

  custumer_form.addEventListener('submit', handleSubmit);
  function handleSubmit(event){
    event.preventDefault();
    
    
  
    
    let holder = event.target;
    let fname = holder.fname.value;
    let lname = holder.lname.value;
    let phone = parseInt(holder.phone.value);
    let email  = holder.email.value;
    let year = parseInt(holder.year.value);
    let brand = holder.brand.value;
    let model = holder.model.value;
    //let area = holder.area.value;
  
    
   new Custumer_Data(fname,lname,phone,email,year,brand,model)
  
   saving()
  
  }
   console.log(typeof(area)); 

  console.log(Custumer_Data.alldata)


  function saving(){
    convert=JSON.stringify(Custumer_Data.alldata)
    localStorage.setItem("Custmer_info",convert);
  
  } 
  

  
  function getFromLs(){
    let data=localStorage.getItem("Custmer_info")
    let parse=JSON.parse(data)
    if(parse !=null){
      productImage.allproducts=parse
    }
  
  }
