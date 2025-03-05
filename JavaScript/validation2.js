
//const f=document.forms[0];
const frm=document.querySelector("#f1");

//attach event

// frm.onsubmit=function(){
//     code
// }
//or

frm.addEventListener("submit", checkData);

//data validation
function checkData(f){
//fullname validation(checking)
const fna=document.querySelector("#un").value;
const fnaexp=/^[a-zA-Z]*$/;
if(fnaexp.test(fna)===false){
    document.querySelector("#errfna").innerHTML=`Plz Enter Valid Name`;
    f.preventDefault();
}
else{
    document.querySelector("#errfna").innerHTML="";
}

const ph = document.querySelector("#mo").value;
const phexp=/^[6-9]\d{9}$/

if(phexp.test(ph)===false){
    document.querySelector("#errmo").innerHTML=`Plz Enter Valid Phone Number`;
    f.preventDefault();
}
else{
    document.querySelector("#errmo").innerHTML="";
}
const pin = document.querySelector("#pin").value;
const pinexp=/^\d{6}$/

if(pinexp.test(pin)===false){
    document.querySelector("#errpin").innerHTML=`Plz Enter Valid pincode`;
    f.preventDefault();
}
else{
    document.querySelector("#errpin").innerHTML="";
}

const pw = document.querySelector("#psw").value;
const pwnexp=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&]).{8,20}$/

if(pinexp.test(pin)===false){
    document.querySelector("#errpsw").innerHTML=`password should contain at least 1 lower, upper, digit & symbol`;
    f.preventDefault();
}
else{
    document.querySelector("#errpsw").innerHTML="";
}

}

