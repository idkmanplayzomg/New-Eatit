import { db, auth } from './firebase.js';

import {
doc,
getDoc,
collection,
addDoc,
query,
where,
onSnapshot,
serverTimestamp
} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';

const params=new URLSearchParams(location.search);
const threadId=params.get('id');

const threadContainer=document.getElementById('threadContainer');
const posts=document.getElementById('posts');

async function loadThread(){

const ref=doc(db,'threads',threadId);

const snap=await getDoc(ref);

if(!snap.exists()){

threadContainer.innerHTML='<div class="card">Thread not found</div>';
return;

}

const data=snap.data();

threadContainer.innerHTML=`
<div class="card">

<div class="post-title">${data.title}</div>

<div class="post-meta">
Posted by ${data.author}
</div>

<div>
${data.content}
</div>

</div>
`;

}

function realtimeComments(){

const q=query(collection(db,'posts'),where('threadId','==',threadId));

onSnapshot(q,(snapshot)=>{

posts.innerHTML='';

snapshot.forEach((doc)=>{

const data=doc.data();

posts.innerHTML += `
<div class="comment">
<div class="comment-author">${data.author}</div>
<div>${data.content}</div>
</div>
`;

});

});

}

loadThread();
realtimeComments();

const replyForm=document.getElementById('replyForm');

replyForm.addEventListener('submit',async(e)=>{

e.preventDefault();

if(!auth.currentUser){
alert('Login first');
return;
}

const content=document.getElementById('replyContent').value;

await addDoc(collection(db,'posts'),{
threadId,
author:auth.currentUser.email,
content,
createdAt:serverTimestamp()
});

document.getElementById('replyContent').value='';

});