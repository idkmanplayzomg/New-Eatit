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

await addDoc(collection(db,'threads'),{
title:document.getElementById('title').value,
content:document.getElementById('content').value,
author:auth.currentUser?.email || 'Guest',
createdAt:serverTimestamp()
});

alert('Thread created!');
location.href='forum.html';
});
}

const threadList=document.getElementById('threadList');

async function loadThreads(){
if(!threadList) return;

const snap=await getDocs(collection(db,'threads'));

snap.forEach((doc)=>{
const data=doc.data();

threadList.innerHTML += `
<div class="post">
<div class="post-header">
<a href="thread.html?id=${doc.id}">${data.title}</a>
</div>
<div class="post-content">
Posted by ${data.author}
</div>
</div>
`;
});
}

loadThreads();