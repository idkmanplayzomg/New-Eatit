import { auth, db } from './firebase.js';

import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword
} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';

import {
doc,
setDoc
} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';

const registerForm=document.getElementById('registerForm');

if(registerForm){

registerForm.addEventListener('submit',async(e)=>{

e.preventDefault();

try{

const username=document.getElementById('username').value;
const email=document.getElementById('email').value;
const password=document.getElementById('password').value;

const cred=await createUserWithEmailAndPassword(auth,email,password);

await setDoc(doc(db,'users',cred.user.uid),{
username,
email,
createdAt:Date.now()
});

alert('Account created');
location.href='index.html';

}catch(error){

alert(error.message);
console.error(error);

}

});

}

const loginForm=document.getElementById('loginForm');

if(loginForm){

loginForm.addEventListener('submit',async(e)=>{

e.preventDefault();

try{

const email=document.getElementById('email').value;
const password=document.getElementById('password').value;

await signInWithEmailAndPassword(auth,email,password);

alert('Logged in');
location.href='index.html';

}catch(error){

alert(error.message);
console.error(error);

}

});

}