const signupform=document.getElementById("signupForm");
if(signupform){
signupform.addEventListener('submit',async function(event){
 event.preventDefault();
 const name=document.getElementById('name').value;
 const email=document.getElementById('email').value;
 const password=document.getElementById("password").value;
 
 const response= await fetch("/api/signup",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({name,email,password}),
 });
 const data= await response.json();
 const signupmessage=document.querySelector("#SG");
 if(signupmessage){
  signupmessage.innerText=data.message;}
 if(response.status===201){
  setTimeout(()=>
   { 
    window.location.href = "login.html";
   },500);
   }
}
);}




const loginform=document.getElementById('loginForm');
if(loginform){
loginform.addEventListener('submit',async function (event) {
    event.preventDefault();
    const lgnemail=document.getElementById('loginEmail').value;
    const lgpassword=document.getElementById('loginPassword').value;
    const lgresponse=await fetch("/api/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({email:lgnemail,password:lgpassword}),
    });
    const lgdata=await lgresponse.json();

    const loginmessage=document.getElementById("logmessage");
    if(loginmessage){
      loginmessage.innerText=lgdata.message;
    }
    if(lgdata.token){
    localStorage.setItem("token", lgdata.token); 
    
      const lgbtn=document.querySelector("#lgbtn");
      if(lgbtn){
   lgbtn.textContent="Logging In..";
    setTimeout(()=>{ lgbtn.textContent="Login";
 window.location.href = "dashboard.html";},500 )}} }


);}

window.onload=async function(){
  const welcome = document.getElementById("Welcome");   
  const dashemail=document.getElementById("dashemail");
  const dashdate=document.getElementById("dashdate");
 if(!welcome||!dashemail||!dashdate){
   return;
 }
const token = localStorage.getItem("token");

 if(!token){
   window.location.href = "login.html";
   return;
 }

 const tokenresponse = await fetch("/api/profile",{
   method:"GET",
   headers:{
     "Authorization":"Bearer " + token
   }
 });
 
 if(tokenresponse.status===401){
  localStorage.removeItem("token");
   window.location.href = "login.html";
   return;
 }
 const userdata = await tokenresponse.json();
if(!userdata){
   window.location.href = "login.html";
   return;
}
 

   welcome.innerText = "Name: " + userdata.name;
   dashemail.innerText="Email: "+userdata.email;
   const createdAt = userdata.createdAt;

const dateObj = new Date(createdAt);

const day = dateObj.getDate();
const month = dateObj.getMonth() + 1;
const year = dateObj.getFullYear();

const formattedDate = `${day}/${month}/${year}`;

dashdate.innerText = "Joined: " + formattedDate;
 }

const logoutbutton=document.getElementById("logoutBtn");
if(logoutbutton){
logoutbutton.addEventListener('click',function(){
  localStorage.removeItem("token");
  window.location.href="login.html";
  return;

})
}
