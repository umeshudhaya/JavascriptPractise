const firebaseConfig = {
    apiKey: "AIzaSyC0l8Cy3OPWDeppUZzxFXEk8e_Ckp4-Xxo",
    authDomain: "contact-form-29931.firebaseapp.com",
    databaseURL: "https://contact-form-29931-default-rtdb.firebaseio.com",
    projectId: "contact-form-29931",
    storageBucket: "contact-form-29931.appspot.com",
    messagingSenderId: "263122473361",
    appId: "1:263122473361:web:7139508a6e368f8ca38a30",
    measurementId: "G-7Z1Z3ZYVZ3"
  };
  //initialize firebase 
  firebase.initializeApp(firebaseConfig);

  //reference for my datbase
 var contactFormDB= firebase.database().ref('contactForm');

 document.getElementById('contactform').addEventListener('submit',submitForm);

 function submitForm(e){
    e.preventDefault();
    var name =getElementVal('name');
    var email =getElementVal('email');
    var message =getElementVal('message');

    saveMessage (name,email,message);

    // after submitting message  then enable alert
    document.querySelector('.alert').style.display="block";
     

    //remove the alert

    setTimeout (() => {
        document.querySelector('.alert').style.display="none";

    },3000)

    //reset the form
    document.getElementById('contactform').reset();

 }
 const saveMessage=  (name,email,message)=>{
   var newContactForm =contactFormDB.push();

   newContactForm.set({
    name: name,
    email: email,
    message: message,

   });

   
 };

const getElementVal=(id) =>{
    return document.getElementById(id).value;
};