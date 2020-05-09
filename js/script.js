//obj literal

const salon = {
    name:'passion pet',
    phone:'555-555-5555',
    address:{
        street:'Univeristy avenue',
        number:'338-i'
    },
    workingHours:{
        days:'mon-fri',
        open:'9 am',
        close:'5pm'
    },
    pets:[], //simulating a database with this array
    count:function(){
        alert('register a new pet:' + this.pets.length + 'pets')
    }
}

//obj destruct
let {name, phone, address:{street, number}, workingHours:{days, open, close}} =salon;
console.log(name)

//display salon info on HTML main

//use document.getElementById().innerHTML
document.getElementById('info-main').innerHTML= `<p> ${name}</p> <p> ${phone} </p><p> ${street}</p>`


//display salon info on footer
let c=0
class Pet{
    constructor(name,age,gender,breed,service,ownerName,ownerPhone){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.breed=breed;
        this.service=service;
        this.ownerName=ownerName;
        this.ownerPhone=ownerPhone;
        this.id='pet'+c;
        c+=1;
    }
    ownerInfo=function(){
        console.log(`${this.ownerName} ${this.ownerPhone}`)
    }
}

//create pets simple process
const scooby = new Pet('scooby', '32','male', 'weird dog', 'full', 'shaggy', '34258763245');
salon.pets.push(scooby);
displayList(scooby);
scooby.ownerInfo();
//create register function

let txtName = document.getElementById('petName');
let txtAge = document.getElementById('petAge');
let txtGender = document.getElementById('petGender');
let txtBreed = document.getElementById('petBreed');
let txtService = document.getElementById('petService');
let txtOwnerName = document.getElementById('ownerName');
let txtOwnerPhone = document.getElementById('ownerPhone');


function register(){
    //take the value from the form Html
    let thePet = new Pet(txtName.value,txtAge.value,txtGender.value,txtBreed.value,txtService.value,txtOwnerName.value,txtOwnerPhone.value);
 
    console.log(thePet);

    //create pet

    //push pet into array[] aka fake database
    salon.pets.push(thePet);
    //display in HTML
    displayList(thePet);
    //clear input in form

    //add the onclick event on the button HTML


}


function displayList(aPet){
    let listBody=document.getElementById("pet-list");
    let item = `

  <tr id='${aPet.id}'>
    <td>${aPet.name}</td>
    <td>${aPet.age}</td>
    <td>${aPet.gender}</td>
    <td>${aPet.breed}</td>
    <td>${aPet.service}</td>
    <td>${aPet.ownerName}</td>
    <td>${aPet.ownerPhone}<br></td>
    <td><button onclick="deletePet('${aPet.id}');">Delete</button><br></td>
    </tr>
  `
;

    
    listBody.innerHTML+=item;
    
    //mortal add the other attribute or show all on the li, apply css style
    //done ^^^^^

    //immortal show all the pet in a table 

}

function deletePet(petID){
    let row = document.getElementById(petID);
    let indexDelete;
    
    for(let i=0; i<salon.pets.length; i++){
        
        let selected = salon.pets[i];
        if(petID===selected.id){
            indexDelete=i;
            
        }
        
    }
    salon.pets.splice(indexDelete,1);

    row.remove();
}


function clear(){
    txtName.value=" ";
    txtAge.value=" ";
    txtGender.value=" ";
    txtBreed.value=" ";
    txtService.value=" ";
    txtOwnerName.value=" ";
    txtOwnerPhone.value=" ";

}

//add on registry html the input and function to search

function searchPet(){
    let searchString=document.getElementById('txtSearch').value;
    let ss=searchString.toLowerCase()
    for(let j=0;j<salon.pets.length;j++){
        let search = salon.pets[j];
        if(ss===search.id || ss===search.service.toLowerCase() || ss===search.name.toLowerCase()){
            document.getElementById('pet'+j).setAttribute('class', 'selected');
        }
    }

}
