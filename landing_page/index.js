AOS.init({
  offset: 300,
  duration: 1000,
});

const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 3000,
    dispalyOnInteraction: false,
  },
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let fcf = document.getElementById("Free_CRM_features");
let ms = document.getElementById("marketing_software");
let ss = document.getElementById("Sales_software");
let hds = document.getElementById("help_software");

let fcf1 = document.getElementById("fcf");
let ms1 = document.getElementById("ms");
let ss1 = document.getElementById("ss");
let hds1 = document.getElementById("hds");

fcf1.onclick = () => {
  ms.style.display = "none";
  fcf.style.display = "flex";
  ss.style.display = "none";
  hds.style.display = "none";

  ms1.style.borderBottom = "0";
  fcf1.style.borderBottom = "4px solid blue";
  ss1.style.borderBottom = "0";
  hds1.style.borderBottom = "0";
};

ss1.onclick = () => {
  ms.style.display = "none";
  fcf.style.display = "none";
  ss.style.display = "flex";
  hds.style.display = "none";

  ms1.style.borderBottom = "0";
  fcf1.style.borderBottom = "0";
  ss1.style.borderBottom = "4px solid blue";
  hds1.style.borderBottom = "0";
};

ms1.onclick = () => {
  ms.style.display = "flex";
  fcf.style.display = "none";
  ss.style.display = "none";
  hds.style.display = "none";

  ms1.style.borderBottom = "4px solid blue";
  fcf1.style.borderBottom = "0";
  ss1.style.borderBottom = "0";
  hds1.style.borderBottom = "0";
};

hds1.onclick = () => {
  ms.style.display = "none";
  fcf.style.display = "none";
  ss.style.display = "none";
  hds.style.display = "flex";

  ms1.style.borderBottom = "0";
  fcf1.style.borderBottom = "0";
  ss1.style.borderBottom = "0";
  hds1.style.borderBottom = "4px solid blue";
};

  import foot from '../components/foot.js'
  import nav from '../components/nav.js'
  let navbar = document.getElementById('navbar');
  navbar.innerHTML=nav()
  let footer = document.getElementById('footer_sec')
  footer.innerHTML= foot()

  let indexPg = document.getElementById('display')
  let drpdown = document.getElementById('free_tools_hover')
 indexPg.addEventListener('mouseover',function(){
   drpdown.style.display = 'none'

 })
 
let cmpre1 = document.getElementById('cmpre_plans')
cmpre1.onclick= function(){
    window.location.href='../pricing_page/pricing.html'
}
let cmpre2 = document.getElementById('cmpre_plans_r')
cmpre2.onclick=function(){
  window.location.href = '../pricing_page/pricing.html'
}

let logo = document.getElementById('logo')
logo.addEventListener('click',function(){
  window.location.href='index.html'
})
let blog_btn = document.getElementById('nav_blog')
blog_btn.onclick = function(){
    window.location.href = './blog/blog.html'
}
let pricing_btn = document.getElementById('nav_pricing')
pricing_btn.onclick=function(){
window.location.href='./pricing_page/pricing.html'
}
let login_btn = document.getElementById('nav_login')
login_btn.onclick=function(){
    window.location.href='./auth/login.html'
}
let freeDemoBtn = document.getElementById('nav_free_demo')
freeDemoBtn.onclick=function(){
    window.location.href = './auth/signup.html'
}
let signupBtn = document.getElementById('nav_free_signup_btn')
signupBtn.onclick = function(){
    window.location.href = './auth/signup.html'
}