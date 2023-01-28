//products button hover function
let products_div = document.getElementById('on_prod_hover')
let prod_btn = document.getElementById('nav_products')
// show the div on product div hover (mouseover)
prod_btn.addEventListener('mouseover',showProd_div)

// show the product div function
function showProd_div(){
    products_div.style.display='block'
    hideRes_div()
    dropdown_div.style.display = 'none'
}
// hide the products div function
function hideProd_div(){
    products_div.style.display='none'
}


let pricing = document.getElementById('nav_pricing')
pricing.addEventListener('mouseover',function(){
    hideProd_div()
    hideRes_div()
    dropdown_div.style.display = 'none'
    resource_div.style.display = 'none'
})

// Logo : on click will reload and on hover will hide all the divs
let logo = document.getElementById('logo')
logo.addEventListener('mouseover',function(){
    hideProd_div()
    hideRes_div()
    dropdown_div.style.display = 'none'
})

// resources button hover functions 
let resource_div = document.getElementById('on_resources_hover')
let resourceBtn = document.getElementById('nav_resources')
resourceBtn.addEventListener('mouseover',showresDiv)
// show resources div function
function showresDiv(){
    resource_div.style.display='block'
    dropdown_div.style.display = 'none'
}
// hide resources div function
function hideRes_div(){
    resource_div.style.display='none'
}

// Products list on-click functioning 
let allInOne = document.getElementById('allinone_btn')
allInOne.onclick = function(){
    document.getElementById('allinone').style.color = '#00B888';
    document.getElementById('mrkting').style.color = 'black';
    document.getElementById('CRM').style.color='black';
    document.getElementById('service').style.color = 'black';
    
    allInOne.style.backgroundColor='#D9F4ED';
    marketingBtn.style.backgroundColor= '';
    CRM_btn.style.backgroundColor=''
    serviceBtn.style.backgroundColor=''
    document.getElementById('prod_hover_allinone_suite').style.display = 'flex'
    document.getElementById('prod_hover_marketing_bay').style.display='none'
    document.getElementById('prod_hover_CRM').style.display='none'
    document.getElementById('prod_hover_service').style.display='none'
}
// on clicking on the marketing bay button
let marketingBtn = document.getElementById('marketing_bay_btn')
marketingBtn.addEventListener('click',function(){
    document.getElementById('allinone').style.color = 'black';
    document.getElementById('mrkting').style.color = '#FF7A00';
    document.getElementById('CRM').style.color='black';
    document.getElementById('service').style.color = 'black';

    marketingBtn.style.backgroundColor= '#FFEBD9';
    allInOne.style.backgroundColor=''
    CRM_btn.style.backgroundColor=''
    serviceBtn.style.backgroundColor=''
    document.getElementById('prod_hover_allinone_suite').style.display = 'none'
    document.getElementById('prod_hover_marketing_bay').style.display='flex'
    document.getElementById('prod_hover_CRM').style.display='none'
    document.getElementById('prod_hover_service').style.display='none'
})

// on clicking on the CRM & sales button
let CRM_btn = document.getElementById('CRM_btn')
CRM_btn.addEventListener('click',function(){
    document.getElementById('allinone').style.color = 'black';
    document.getElementById('mrkting').style.color = 'black';
    document.getElementById('CRM').style.color='#FFC800';
    document.getElementById('service').style.color = 'black';

    marketingBtn.style.backgroundColor= '';
    allInOne.style.backgroundColor=''
    serviceBtn.style.backgroundColor=''
    CRM_btn.style.backgroundColor='#FFF7D9'
    document.getElementById('prod_hover_allinone_suite').style.display = 'none'
    document.getElementById('prod_hover_marketing_bay').style.display='none'
    document.getElementById('prod_hover_CRM').style.display='flex'
    document.getElementById('prod_hover_service').style.display='none'
})
// on clicking on the service bay button
let serviceBtn = document.getElementById('service_bay_btn')
serviceBtn.addEventListener('click',function(){
    document.getElementById('allinone').style.color = 'black';
    document.getElementById('mrkting').style.color = 'black';
    document.getElementById('CRM').style.color='black';
    document.getElementById('service').style.color = '#725AFF';

    marketingBtn.style.backgroundColor= '';
    allInOne.style.backgroundColor=''
    CRM_btn.style.backgroundColor=''
    serviceBtn.style.backgroundColor='#e1e1ff'
    document.getElementById('prod_hover_allinone_suite').style.display = 'none'
    document.getElementById('prod_hover_marketing_bay').style.display='none'
    document.getElementById('prod_hover_CRM').style.display='none'
    document.getElementById('prod_hover_service').style.display='flex'
})

// inside resource : selecting all the buttons and all the divs 
let allBtns = document.querySelectorAll('.res_btns')
let alldivs = document.querySelectorAll('.resources_hide_divs')
allBtns.forEach((btn,id)=>{
    btn.addEventListener('click',function(){
        show_content(btn,id)
    })
})
function show_content(btn,index){
alldivs.forEach((el,id)=>{
if(id===index){
    // el.style.color = 'blue'
    btn.style.backgroundColor = '#e1e1ff'
    el.style.display='block'
}else{
    btn.style.color = ''
    btn.style.backgroundColor = ''
    el.style.display='none'
}
})
}


// Free tools On hover effect 
let freeToolBtn = document.getElementById('nav_free_tools')
let dropdown_div = document.getElementById('free_tools_hover')
freeToolBtn.addEventListener('mouseover',function(){
    hideProd_div()
    hideRes_div()
    dropdown_div.style.display = 'flex'
})
// let blog_btn = document.getElementById('nav_blog')
// blog_btn.onclick = function(){
//     window.location.href = './blog/blog.html'
// }
blog_btn.addEventListener("mouseover",function(){
    hideProd_div()
    hideRes_div()
    dropdown_div.style.display = 'none'
})



// let login_btn = document.getElementById('nav_login')
// login_btn.onclick=function(){
//     window.location.href='./auth/login.html'
// }
login_btn.addEventListener('mouseover',function(){
    hideProd_div()
    hideRes_div()
    dropdown_div.style.display = 'none'
})

// let pricing_btn = document.getElementById('nav_pricing')
// pricing_btn.onclick=function(){
// window.location.href='./pricing_page/pricing.html'
// }

// let freeDemoBtn = document.getElementById('nav_free_demo')
// freeDemoBtn.onclick=function(){
//     window.location.href = './auth/signup.html'
// }

// let signupBtn = document.getElementById('nav_free_signup_btn')
// signupBtn.onclick = function(){
//     window.location.href = './auth/signup.html'
// }