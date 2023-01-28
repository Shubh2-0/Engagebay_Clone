let token = localStorage.getItem('tkn');
let username = localStorage.getItem('username');
if(token==''||username==''){
    window.location.href='../auth/login.html'
}else{
      getData(token,username)
}
// import nav from '../components/login_nav.js'
// let navright_div =document.getElementById('nav')
// navright_div.innerHTML = nav('Market','Contacts','Forms','Landing Pages','Templates','Campaigns')

window.addEventListener('click',function(e){
    let toggle_div = document.getElementById('mrkt_dropdown')
    let btn = document.getElementById('marketing_content')
    let img = document.getElementById('mrkt_logo_img')
    let text = document.getElementById('mrkt_active')
    let drpdown = document.getElementById('mrkt_dropdown')
    if(e.target==btn||e.target==img||e.target==text||e.target==drpdown){
    }else{
        toggle_div.style.display='none'
    }
})
let mrktBtn = document.getElementById('marketing_content')
mrktBtn.onclick=function(){
    let toggle_div = document.getElementById('mrkt_dropdown')
    if(toggle_div.style.display===''||toggle_div.style.display=='none'){
        toggle_div.style.display='flex'
    }else{
        toggle_div.style.display='none'

    }
}

async function getData(token,username){
    let url = `https://masai-api-mocker.herokuapp.com/user/${username}`
    let res = await fetch(url,{
        method:'GET',
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    let data = await res.json()
    showProfile(data)
}

function showProfile(data){
    let name = document.getElementById('name')
    name.textContent = data.name
    let email = document.getElementById('email')
    email.textContent = data.username
}

let logouuBtn = document.getElementById('log_out')
logouuBtn.onclick = function(){
    localStorage.setItem('tkn','');
    localStorage.setItem('username','');
    window.location.href = '../auth/login.html'
    
}

let logo = document.getElementById('logo')
logo.onclick = function(){
    // window.location.href = '../landing_page/index.html'
}

let sales  = document.getElementById('sales_page')
sales.onclick= function(){
    window.location.href = '../sales/home/home.html'
}