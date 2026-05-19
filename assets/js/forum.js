import { db, auth } from './firebase.js';

import {
collection,
addDoc,
getDocs,
serverTimestamp
} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';

const threadForm=document.getElementById('threadForm');

if(threadForm){

threadForm.addEventListener('submit',async(e)=>{

e.preventDefault();

if(!auth.currentUser){
alert('Login first');
return;
}

try{

const title=document.getElementById('title').value;
const content=document.getElementById('content').value;

const thread=await addDoc(collection(db,'threads'),{
title,
content,
author:auth.currentUser.email,
createdAt:serverTimestamp(),
votes:0
});

location.href=`thread.html?id=${thread.id}`;

}catch(error){

console.error(error);
alert(error.message);

}

});

}

const threadList=document.getElementById('threadList');

async function loadThreads(){

if(!threadList) return;

const snap=await getDocs(collection(db,'threads'));

threadList.innerHTML='';

snap.forEach((doc)=>{

const data=doc.data();

threadList.innerHTML += `
<div class="card">

<div class="post-title">
<a href="thread.html?id=${doc.id}" style="color:white;text-decoration:none;">
${data.title}
</a>
</div>

<div class="post-meta">
Posted by ${data.author || 'Unknown'}
</div>

<div>
${data.content.substring(0,150)}
</div>

<div class="vote-bar">
<button class="vote-btn">⬆ ${data.votes || 0}</button>
<button class="vote-btn">💬 Open</button>
</div>

</div>
`;

});

}

loadThreads();