import reviews from '../components/reviews.js'
let user_reviews = document.getElementById('usr_rev_div')
let login_link = document.getElementById('signin_link')
login_link.onclick = function(){
    window.location.href='login.html'
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
    async signup(name,email,password,username,mobile,description){
        this.name=name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.mobile= mobile;
        this.description = description;

        let api = `https://masai-api-mocker.herokuapp.com/auth/register`;
        try{

            let res = await fetch(api,{
                method:'POST',
                body: JSON.stringify(this),
                headers:{
                    'Content-Type':'application/json'
                }
            })
            let data = await res.json()
            signupStatus(data)
        }catch(err){
            console.log(err)
        }
    }
}
let register = new User()
let signupBtn = document.getElementById('login_btn')
signupBtn.onclick=function(){
    let name = document.getElementById('name').value;
    let username= document.getElementById('username').value;
    let url = document.getElementById('url').value;
    let password = document.getElementById('password').value;
    let mobile = Math.floor(Math.random()*100000).toString();
    let desc = (Math.random() *23).toString(36).substring(7);
    if(username.length>4 && (password.length>7) && chkLower(password) && chkUppercase(password) && chkNum(password)&& password.includes('@')|| password.includes('.')|| password.includes('/')|| password.includes('#')|| password.includes('%')){
        register.signup(name,url,password,username,mobile,desc)  
    }else{
        let error = document.getElementById('err_msg')
        error.style.display = 'block'
        setTimeout(() => {
            error.style.display = 'none'
        }, 3000);
    }
     document.getElementById('name').value=''
    document.getElementById('username').value=''
     document.getElementById('url').value=''
     document.getElementById('password').value=''
}
function chkUppercase(string){
    let i=0;
    let char = ''
    while(i<string.length){
        char = string[i];
        if(char===char.toUpperCase()){
            return true;
        }
        i++
    }
    return false;
}
function chkLower(string){
    let i=0;
    let char = ''
    while(i<string.length){
        char = string[i];
        if(char===char.toLowerCase()){
            return true;
        }
        i++
    }
    return false
}
function chkNum(string){
    let i=0;
    let char = ''
    while(i<string.length){
        char = string[i];
        if(!isNaN(char*1)){
            return true;
        }
        i++
    }
    return false;
}

function signupStatus(data){
console.log(data)
if(data.error){
    showModal('Signup Failed, invalid Credentials',false,'red')
}else{
    showModal('Signup Success, go to Login Page',true,'green')
}
}

let modal = document.getElementById('modal')
function showModal(message,status,color){
    modal.style.display='block'
    let msg = document.getElementById('modal_message')
    msg.textContent = message;
    msg.style.color = color;
    let okBtn = document.getElementById('ok_login')
    console.log(status)
    if(!status){
        okBtn.style.display = 'none'
    }else{
        okBtn.style.display = 'flex'
    }
}
let cnclModal = document.getElementById('cancel_modal')
cnclModal.onclick= function(){
    modal.style.display = 'none'
}
let closeModal = document.getElementById('close_modal')
closeModal.onclick=function(){
    modal.style.display = 'none'
}
if(window.onclick==modal){
    // modal.style.display = 'none'
    console.log('yes')
}

let toLogin = document.getElementById('ok_login')
toLogin.onclick = function(){
    window.location.href='login.html'
}


let logo = document.querySelector('.logo');
logo.onclick =function(){
 window.location.href = '../index.html'
}