import reviews from '../components/reviews.js'
let user_reviews = document.getElementById('usr_rev_div')

let signup_link = document.getElementById('signup_link')
signup_link.onclick=function(){
    window.location.href = 'signup.html'
}
let reviewData = reviews()
let id =  Math.floor(Math.random()*6)
reviewData.forEach((el,ind)=>{
    if(id===ind){
        appendReview(el)
    }
})
function appendReview(data){
   let img = document.createElement('img') 
   img.src = data.url
    let div = document.createElement('div');
    let p1 = document.createElement('p')
    p1.textContent=data.dec;
    p1.setAttribute('class','user_content')
    let p2 = document.createElement('p')
    p2.textContent=data.name
    p2.setAttribute('id','reviewr_name')
    div.append(p1,p2)
    user_reviews.append(img,div)
}


class User{
    constructor(){
    }
    getData = async (password,username)=>{
        this.password = password;
        this.username = username;
        let api = `https://masai-api-mocker.herokuapp.com/auth/login`;
        try{
        let res = await fetch(api,{
            method:'POST',
            body: JSON.stringify(this),
            headers:{
                'Content-Type':'application/json'
            }
        })
        let dta = await res.json()
        loginStatus(dta,username)
    }catch(err){
        let msg = document.getElementById('err_msg')
        msg.style.display = 'block'
        setTimeout(() => {
            msg.style.display = 'none';
        }, 3000);
    }
}
}
let login = new User();
let loginBtn = document.getElementById('login_btn')
loginBtn.onclick=function(){
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value;
    login.getData(password,username)
}

function loginStatus(dta,username){
    if(dta.error==true){
        let msg = document.getElementById('err_msg')
        msg.style.display = 'block'
        setTimeout(() => {
            msg.style.display = 'none';
        }, 2000);
    }else{
        localStorage.setItem('tkn',dta.token);
        localStorage.setItem('username',username);
        console.log(dta)
        window.location.href = '../sales/home.html'
    }
}

let logo = document.querySelector('.logo');
logo.onclick =function(){
 window.location.href = '../index.html'
}