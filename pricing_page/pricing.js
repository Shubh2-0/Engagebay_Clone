
import navbar from "../components/nav.js"

import foot from '../components/foot.js'
let nav=document.getElementById("navbar")
nav.innerHTML=navbar()
let footer = document.getElementById('bottom')
footer.innerHTML=foot()


let div1 = document.getElementById('one')
let div2 = document.getElementById('two')
let div3 = document.getElementById('three')
let div4 = document.getElementById('four')



let price0 = [
  '250 Contacts',
  'Email Marketing',
  'Autoresponders',
  'Email Broadcast',
  'Sequences',
  'Lead Grabbers',
  'Landing Pages',
  'CRM',
  'Helpdesk',
  'Live Chat',
]
let price1 = [
  '750 Contacts',
  'Email Templates',
  'Web Pop-ups',
  'Landing Page Builder',
  'Lead Scoring',
  'SMS Marketing',
  '3rd Party Integrations',
  'Social Suite',
  'Tag Manager',
]
let price2 = [
  '5000 Contacts',
  'Marketing Automation',
  'Push Notifications',
  'Site Messages',
  'Broadcast A/B Testing',
  'Landing Page A/B Testing',
  'Custom Domain',
  'Call Records',
  'Service Automation',
  'Products',
  'Proposal',
]
let price3 = [
  'Unlimited Contacts',
  'Marketing Automation',
  'Web Analytics',
  'Proposal Analytics',
  'SSO',
  'Role Management',
  'Goals',
  'Custom Reporting',
  'Dedicated Account Manager',
  'Uptime SLA',
  'Phone Support',
]
let nme = ['FREE', 'BASIC', 'GROWTH', 'PRO']
let arr1 = [price0, price1, price2, price3]
let arr = [div1, div2, div3, div4]

let Plan_price = ['0', '14.99', '49.99', '99.99']

for (let i = 0; i < 4; i++) {
  let child0 = document.createElement('div')
  child0.innerHTML = `
<div class="show_worth center">${nme[i]}</div>
<div class="actual_price1"><p class="actual_price center">$<span>${Plan_price[i]}</></p></div>
<p class="month center">per user / month</p>
`
  let price = arr1[i]
  let ul0 = document.createElement('ul')
  for (let i = 0; i < price.length; i++) {
    let li0 = document.createElement('li')
    li0.innerHTML = `
<div class="red">
<i class="fa-sharp fa-solid fa-check" style="font-size: 12px;"></i>
</div>
${price[i]}
`
    ul0.append(li0)
  }
  child0.append(ul0)

  let div_btn = document.createElement('div')
  let btn0 = document.createElement('button')
  btn0.innerHTML = `
SIGN UP NOW
<i class="fa-solid fa-arrow-right-long"></i>
`
  div_btn.append(btn0)
  arr[i].append(child0, div_btn)
}

let image_arr = [
  'https://images.g2crowd.com/uploads/report_medal/image/2047/medal.svg?1627568902611',
  'https://images.g2crowd.com/uploads/report_medal/image/2040/medal.svg?1627568902612',
  'https://images.g2crowd.com/uploads/report_medal/image/2000/medal.svg?1627568902612',
  'https://images.g2crowd.com/uploads/report_medal/image/2003/medal.svg?1627568902612',
  'https://images.g2crowd.com/uploads/report_medal/image/2043/medal.svg?1627568902612',
  'https://my.g2.com/assets/product-badges/users-love-us-2008b519df49af90dcfa7db4b5fe13c8ec24ced0348f0a6bd039711ad8bbffc7.svg?1627568902612',
]

let image_container = document.querySelectorAll('#child_batch_id>div')
let i = 0
for (let el of image_container) {
  let image = document.createElement('img')
  image.src = image_arr[i]
  i++
  el.append(image)
}

function append1(give_arr, div_give) {
  let heads = document.createElement('p')
  heads.className = 'list_names'
  heads.innerText = give_arr[0]
  let ulist = document.createElement('ul')
  for (let i = 1; i <= give_arr.length - 1; i++) {
    let li = document.createElement('li')
    li.innerHTML = `
<i class="fa-sharp fa-solid fa-check" style="font-size: 12px;"></i>
<p class="content_name">${give_arr[i]}</p>
`
    ulist.append(li)
  }
  div_give.append(heads, ulist)
}

// ############// "Marketing",// ############
let marketing = [
  'Marketing',
  '250 Contacts',
  '1,000 Branded Emails',
  'Lists',
  'Segmentation',
  'Predictive Lead Score',
  'Embed Forms',
  'Web Pop ups',
  'Email Templates',
  'Email Template Builder',
  'Auto Responders',
  'Tag Management',
  'Social Suite',
  'Integrations',
  'Reporting Dashboard',
  'Custom Fields',
  'Live Chat',
  'Video Marketing',
  'Facebook Ads',
  'Desktop Notifications',
  'Landing Pages',
  'Landing Page Builder',
  'SSL Enabled for Landing Pages',
  'Send Newsletters',
  'Email Broadcast',
  'Email Sequences',
  '500 MB File Storage',
  'Marketing Automation',
  'Site Messaging',
  'Web Rules',
  'Push Notifications',
  'Email Broadcast A/B Testing',
  'Automations/Workflows',
  'Nodes (Automation/Workflow)',
  'Triggers',
  'Code your own Landing Page',
  'Landing Page A/B Testing',
  'Custom Domain for Landing Pages',
  'Timezone based email delivery',
  'Conversational Inbox',
  'Web Analytics',
  'Custom Reporting',
  'Role Management',
]

// ############// "CRM & Sales",// ############
let crm = [
  'CRM & Sales',
  'Contacts & Companies',
  '360 degree contact view',
  'Tag Management',
  'Deals',
  'Tasks',
  'Appointment scheduling',
  'User activity',
  'Email tracking',
  'Email scheduling',
  'Gmail integration',
  'Outlook integration',
  'Office 365 integration',
  'Social suite',
  'Reports Dashboard',
  'Predictive Lead Score',
  'Calling minutes',
  'Custom Deal Milestones',
  'Custom Deal Tracks',
  'Leaderboard',
  'Call Reports',
  'Multi Currency',
  'Email Sequences',
  'Automations/Workflows',
  'Nodes (Automation/Workflow)',
  'Timezone Based Delivery',
  'Proposals',
  'Proposal Analytics',
  'Role Management',
  'Call Scripts',
  'Custom Reports',
  'Call Recordings',
  'Goals',
  'Account Based Marketing',
]
// ############// "Service Bay",// ############
let service = [
  'Service Bay',
  'Contact Management',
  'Ticketing Management',
  'Ticket Views',
  'Ticket Macros',
  'Groups',
  'Group Management',
  'Canned Responses',
  'Personal Note',
  'Customer 360 Degree View',
  'Desktop Notifications',
  'Push Notification',
  'Automations/Workflows',
  'Nodes (Automation/Workflow)',
  'Role Management',
]

// ############// "Specials",// ############
let specials = [
  'Specials',
  'File Repository',
  'SSO',
  'API',
  'Teams',
  'Team Hierarchy',
]

// ############// "Support",// ############
let support = [
  'Support',
  'Email & Chat Support',
  'Free Onboarding Sessions',
  'Dedicated Account Manager',
  'Phone Support',
]

function apped2(put_div, price, name) {
  let d1 = document.createElement('div')
  d1.className = 'first_div_of_compare_plan2'
  d1.innerHTML = `
<p class="worth_second_div">${name}</p>
<p class="amount_second_div">$<span>${price}</span></p>
<p class="month_second_div">per user/month</p>
`
  let d2 = document.createElement('div')

  let div_first = document.createElement('div')
  append1(marketing, div_first)

  let div_second = document.createElement('div')
  append1(crm, div_second)

  let div_third = document.createElement('div')
  append1(service, div_third)

  let div_fourth = document.createElement('div')
  append1(specials, div_fourth)

  let div_fivth = document.createElement('div')
  append1(support, div_fivth)

  d2.append(div_first, div_second, div_third, div_fourth, div_fivth)

  let d3 = document.createElement('div')
  d3.innerHTML = `
<button class="sign_up">
SIGN UP NOW
<span><i class="fa-sharp fa-solid fa-arrow-right"></i></span>
</button>
`
  put_div.append(d1, d2, d3)
}

let div_one = document.getElementById('number_one')
let div_two = document.getElementById('number_two')
let div_three = document.getElementById('number_three')
let div_four = document.getElementById('number_four')

apped2(div_one, 0, 'FREE')
apped2(div_two, 11.99, 'BASIC')
apped2(div_three, 39.99, 'GROWTH')
apped2(div_four, 79.99, 'PRO')

const value = (num, num2, arr) => {
  let list = arr[num].children[1].childNodes
  for (let i = 0; i < list.length; i++) {
    if (i > num2) {
      list[i].className = 'cut_off'
    }
  }
}

const cut_off = (num_arr, div_arr) => {
  for (let m = 0; m < 5; m++) {
    value(m, num_arr[m], div_arr)
  }
}

let div_arr1 = document.querySelectorAll('#number_one>div+div>div')
let num1 = [25, 14, 2, 0, 0]
cut_off(num1, div_arr1)

let div_arr2 = document.querySelectorAll('#number_two>div+div>div')
let num2 = [25, 16, 9, 0, 0]
cut_off(num2, div_arr2)

let div_arr3 = document.querySelectorAll('#number_three>div+div>div')
let num3 = [37, 25, 12, 2, 1]
cut_off(num3, div_arr3)

window.addEventListener('scroll', change)

function change() {
  if (window.scrollY > 1849 && window.scrollY < 5000) {
    done()
  }
  if (window.scrollY < 1845 || window.scrollY > 5002) {
    done2()
  }
}

// let btn_3=document.querySelectorAll("#button_div>button")

// for(let)

// console.log(btn_3)

let amount_arr = [0, 14.99, 49.99, 99.99]
let Monthly = document.getElementById('Monthly')
Monthly.addEventListener('click', function () {
  change1('Monthly', amount_arr)
})

let amount_arr1 = [0, 13.49, 44.99, 89.99]
let Yearly = document.getElementById('Yearly')
Yearly.addEventListener('click', function () {
  change1('Yearly', amount_arr1)
})

let amount_arr2 = [0, 11.99, 39.99, 79.99]
let Biennial = document.getElementById('Biennial')
Biennial.addEventListener('click', function () {
  change1('Biennial', amount_arr2)
})

function change1(give_id, aar) {
  let textt = document.querySelectorAll('.actual_price1 span')

  for (let i = 0; i < 4; i++) {
    textt[i].innerText = aar[i]
  }
  let btn_arr = document.querySelectorAll('#duration_button>button')
  for (let el of btn_arr) {
    if (el.id == give_id) {
      continue
    }
    el.backgroud = '#37C1F9'
  }
  let btn = document.getElementById(give_id)
  btn.backgroud = 'white'
  btn.color = '#37C1F9'
}

const comes = () => {
  let service_bay_div = document.getElementById('service_bay_div')
  let comapre = document.getElementById('comapre_plans')
  let first_pricing_div = document.getElementById('first_pricing_div')
  let duration_button = document.getElementById('duration_button')
  let compare=document.getElementById("compare_plan_div")
compare.style.display="grid"
  comapre.style.display = 'block'
  first_pricing_div.style.display = 'grid'
  duration_button.style.display = 'flex'
  service_bay_div.style.display = 'none'
}

const out = () => {
  let service_bay_div = document.getElementById('service_bay_div')
  service_bay_div.style.display = 'block'
  let comapre = document.getElementById('comapre_plans')
  comapre.style.display = 'none'
  let first_pricing_div = document.getElementById('first_pricing_div')
  first_pricing_div.style.display = 'none'
  let duration_button = document.getElementById('duration_button')
  duration_button.style.display = 'none'
let compare=document.getElementById("compare_plan_div")
compare.style.display="none"
}

let arr_button45 = document.querySelectorAll('#button_div>button')

for (let i = 0; i < arr_button45.length - 1; i++) {
  arr_button45[i].addEventListener('click', comes)
}

let btnrt = document.getElementById('service_bay')
btnrt.addEventListener('click', out)

function done() {
  let vg = document.querySelectorAll('.first_div_of_compare_plan2')
  for (let el of vg) {
    el.className = 'first_div_of_compare_plan'
  }
}

function done2() {
  let vg = document.querySelectorAll('.first_div_of_compare_plan2')
  for (let el of vg) {
    el.classList.remove('first_div_of_compare_plan')
  }
}
let cmpre1 = document.getElementById('cmpre_plans')
cmpre1.onclick= function(){
    window.location.href='../pricing_page/pricing.html'
}
let cmpre2 = document.getElementById('cmpre_plans_r')
cmpre2.onclick=function(){
  window.location.href = '../pricing_page/pricing.html'
}

let logo = document.getElementById('logo')
logo.onclick = ()=>{
    window.location.href = '../index.html'
}
let pricing_btn = document.getElementById('nav_pricing')
pricing_btn.onclick=function(){
window.location.href='../pricing_page/pricing.html'
}
let blog_btn = document.getElementById('nav_blog')
blog_btn.onclick = function(){
    window.location.href = '../blog/blog.html'
}
let login_btn = document.getElementById('nav_login')
login_btn.onclick=function(){
    window.location.href='../auth/login.html'
}
let freeDemoBtn = document.getElementById('nav_free_demo')
freeDemoBtn.onclick=function(){
    window.location.href = '../auth/signup.html'
}
let signupBtn = document.getElementById('nav_free_signup_btn')
signupBtn.onclick = function(){
    window.location.href = '../auth/signup.html'
}

for(let el of linee){
  el.style.textDecoration="line-through"
}