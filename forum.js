*{
margin:0;
padding:0;
box-sizing:border-box;
}

body{
background:#0f1113;
color:white;
font-family:Arial,sans-serif;
}

.layout{
display:flex;
min-height:100vh;
}

.sidebar{
width:240px;
background:#1a1c1f;
padding:20px;
border-right:1px solid #2f3336;
}

.sidebar h1{
margin-bottom:30px;
color:#ff4500;
}

.sidebar a{
display:block;
padding:12px;
margin-bottom:10px;
background:#272b30;
color:white;
text-decoration:none;
border-radius:10px;
}

.sidebar a:hover{
background:#343a40;
}

.feed{
flex:1;
padding:20px;
max-width:800px;
margin:auto;
}

.topbar{
margin-bottom:20px;
}

.topbar input{
width:100%;
padding:14px;
background:#1f2326;
border:none;
border-radius:12px;
color:white;
}

.card{
background:#1a1c1f;
border:1px solid #2f3336;
border-radius:16px;
padding:20px;
margin-bottom:20px;
}

.post-title{
font-size:24px;
margin-bottom:10px;
}

.post-meta{
color:#888;
font-size:14px;
margin-bottom:15px;
}

.vote-bar{
display:flex;
gap:10px;
margin-top:15px;
}

.vote-btn{
background:#272b30;
border:none;
padding:8px 12px;
border-radius:10px;
color:white;
cursor:pointer;
}

textarea,input{
width:100%;
padding:14px;
background:#1f2326;
border:none;
border-radius:12px;
color:white;
margin-bottom:15px;
}

textarea{
min-height:140px;
resize:vertical;
}

.button{
background:#ff4500;
border:none;
padding:14px 20px;
border-radius:999px;
color:white;
font-weight:bold;
cursor:pointer;
}

.button:hover{
opacity:0.9;
}

.center-box{
max-width:500px;
margin:80px auto;
background:#1a1c1f;
padding:30px;
border-radius:16px;
border:1px solid #2f3336;
}

.comment{
padding:15px;
border-bottom:1px solid #2f3336;
}

.comment-author{
font-weight:bold;
margin-bottom:8px;
color:#ffb089;
}