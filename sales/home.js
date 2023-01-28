// for color of every count of work on the first child
let color_arr = [
  'Blue',
  'Brown',
  'Cyan',
  'Gold',
  'Green',
  'Grey',
  'Maroon',
  'Orange',
  'Pink',
  'Purple',
  'Red',
  'Magenta',
  'Peach',
  'Teal',
]
let arr_divv = document.querySelectorAll('.total_count')
for (let i = 0; i < 4; i++) {
  let num = Math.floor(Math.random() * color_arr.length - 1)
  arr_divv[i].style.color = color_arr[num]
}

let boxes_arr = document.querySelectorAll('.total_count')
async function length() {
  let arr2333 = ['deals', 'tickets', 'tasks', 'web_rules']
  let i = 0
  for (let el of arr2333) {
    let data = await fetch(`https://likeable-grass-gymnast.glitch.me/${el}`)
    data = await data.json()
    boxes_arr[i].innerHTML = data.length
    i++
  }
  document.getElementById('loader_img').style.display='none'
}
async function contact_fun() {
  try{
    let res = await fetch(`https://likeable-grass-gymnast.glitch.me/deals`)
    let data = await res.json();
    contact_div_append(data)
  }catch(err){
    console.log(err)
  }
}
let parent1 = document.getElementById('contact_div');
function contact_div_append(data){
  parent1.innerHTML = null;
  let api_name = 'deals'
  length()
  data.forEach(function (el, i) {
    let child = document.createElement('div')
    child.className = 'contact_child'
    let grand_child = document.createElement('div')
    grand_child.setAttribute('class','content_show');
    let btn = document.createElement('button')
    let name = document.createElement('p')
    let num = document.createElement('p')
    name.setAttribute('class','person_name')
    name.textContent = el.Name
    num.setAttribute('class','person_number')
    num.textContent = el.Contact
    grand_child.append(name,num)
    btn.innerHTML=`<i class="fa-solid fa-trash"></i>`
    child.append(grand_child,btn)
    // here we give two remove function one for server and one dom
    grand_child.addEventListener('click', function () {
      module()
      module_content1(el)
    })
    btn.addEventListener('click', function () {
      remove_dom(child)
      let id = el.id
      remove_server(el, id, api_name)
    })
    child.append(grand_child, btn)
    parent1.append(child)
  })
}

function module_content1(el) {
  let form33 = document.getElementById('form_div')
  form33.innerHTML = null
  form33.innerHTML = `
<h1>Details</h1>
<p>Name: ${el.Name}</p>
<p>Contact Number: ${el.Contact}</p>
<p>Date: ${el.Date}</p>
<p>Comapany Name: ${el.Company}</p>
<p>Note: ${el.Note}</p>
<p>Selected Tags: ${el.Tag}</p>
<p>Description: ${el.Desc}</p>
<p>Amount: ${el.Amount}+${el.Slct}</p>
`
}

//  for tickets
async function tickets() {
  let parent2 = document.getElementById('tickets_div')
  let api_name = 'tickets'
  let data2 = await fetch(`https://likeable-grass-gymnast.glitch.me/tickets`)
  data2 = await data2.json()
  length()
  data2.forEach(function (el, i) {
    let child = document.createElement('div')
    child.className = 'tickets_div_child'
    let grand_child = document.createElement('div')
    grand_child.className = 'content_show'
    grand_child.addEventListener('click', function (l) {
      module()
      module_content2(el)
    })
    grand_child.innerHTML = `
<p class="person_name">Assign to: ${el.Assignee}</p><p class="person_number">Subject: ${el.Subject}</p></div>`
    let btn = document.createElement('button')
    btn.className = 'remove.btn'
    btn.innerHTML = `
<i class="fa-solid fa-trash"></i>
`
    // here we give two remove function one for server and one dom
    btn.addEventListener('click', function () {
      remove_dom(child)
      let id = el.id
      remove_server(el, id, api_name)
    })
    child.append(grand_child, btn)
    parent2.append(child)
  })
}

function module_content2(el) {
  let form33 = document.getElementById('form_div')
  form33.innerHTML = null
  form33.innerHTML = `
<h1>Details</h1>
<p>Assign Person Name: ${el.Assignee}</p>
<p>Subject: ${el.Subject}</p>
<p>Email: ${el.Email}</p>
<p>Message: ${el.input}</p>
`
}

async function tasks() {
  let parent2 = document.getElementById('tasks_div')
  let api_name = 'tasks'
  let data3 = await fetch(`https://likeable-grass-gymnast.glitch.me/tasks`)
  data3 = await data3.json()
  length()
  data3.forEach(function (el, i) {
    let child = document.createElement('div')
    child.className = 'tasks_div_child'
    if (el.Priority == 'High') {
      child.style.backgroundColor = '#FF7342'
      child.style.color = 'white'
    } else if (el.Priority == 'Medium') {
      child.style.backgroundColor = '#ffbd42'
      child.style.color = 'white'
    } else {
      child.style.backgroundColor = '#a1b302'
      child.style.color = 'white'
    }
    let grand_div = document.createElement('div')
    grand_div.className = 'long_div_hieght'
    grand_div.addEventListener('click', function () {
      module()
      module_content3(el)
    })
    grand_div.innerHTML = `
<p>Task Name: ${el.Name}</p>
<p>Priority: ${el.Priority}</p>
<p>Type: ${el.Type}</p>
<p>Status: ${el.Status}</p>
<p>Note: ${el.Notes}<p>

`
    let btn = document.createElement('button')
    btn.className = 'remove.btn'
    btn.innerHTML = `
<i class="fa-solid fa-trash"></i>
`
    // here we give two remove function one for server and one dom
    btn.addEventListener('click', function () {
      remove_dom(child)
      let id = el.id
      remove_server(el, id, api_name)
    })
    child.append(btn, grand_div)
    parent2.append(child)
  })
}

function module_content3(el) {
  let form33 = document.getElementById('form_div')
  form33.innerHTML = null
  form33.innerHTML = `
<h1>Details</h1>
<p>Task: ${el.Name}</p>
<p>Date: ${el.Date}</p>
<p>Priority: ${el.Priority}</p>
<p>Type: ${el.Type}</p>
<p>Status: ${el.Status}</p>
<p>Notes: ${el.Notes}</p>
<p>Contact: ${el.Contacts}</p>
<p>Company: ${el.Company}</p>
`
}


async function automation() {
  let parent4 = document.getElementById('automation_div')
  let api_name = 'web_rules'
  let data4 = await fetch(`https://likeable-grass-gymnast.glitch.me/web_rules`)
  data4 = await data4.json()
  length()
  data4.forEach(function (el, i) {
    let child = document.createElement('div')
    child.className = 'automation_div_child'
    let grand_div = document.createElement('div')
    grand_div.className = 'automation_div_hieght'
    grand_div.addEventListener('click', function () {
      module()
      module_content4(el)
    })
    grand_div.innerHTML = `
<p>Name: ${el.name}</p>
<p>Rule: ${el.rule}</p>
<p>Condition: ${el.condition}</p>
<p>Description: ${el.desc}</p>
`
    let btn = document.createElement('button')
    btn.className = 'remove.btn'
    btn.innerHTML = `
<i class="fa-solid fa-trash"></i>
`
    // here we give two remove function one for server and one dom
    btn.addEventListener('click', function () {
      remove_dom(child)
      let id = el.id
      remove_server(el, id, api_name)
    })
    child.append(btn, grand_div)
    parent4.append(child)
  })
}

function module_content4(el) {
  let form33 = document.getElementById('form_div')
  form33.innerHTML = null
  form33.innerHTML = `
<h1>Details</h1>
<p>Name: ${el.name}</p>
<p>Rule: ${el.rule}</p>
<p>Condition: ${el.condition}</p>
<p>Action: ${el.action}</p>
<p>Contain: ${el.contain}</p>
<p>Value: ${el.value}</p>
<p>Description: ${el.desc}</p>
`
}

length()
contact_fun()
tickets()
tasks()
automation()




let contact_btn = document.getElementById('deal_submit')
contact_btn.addEventListener('click', function () {
  document.getElementById('loader_img').style.display='flex'
  contact_fun()
})

let tickets_btn = document.getElementById('ticket_submit')
tickets_btn.onclick = function () {
  tickets()
  document.getElementById('loader_img').style.display='flex'
  
}

document.getElementById('task_submit').addEventListener('click', function () {
  tasks()
  document.getElementById('loader_img').style.display='flex'
 
})

let submit_btn3 = document.getElementById('web_submit')
submit_btn3.addEventListener('click', function () {
  automation()
  
})

function module() {
  let modul = document.getElementById('big_div')
  modul.style.display = 'block'
}
function remove_dom(child) {
  child.remove()
  document.getElementById('loader_img').style.display='flex'
}

async function remove_server(el, id, api_name) {
  try {
    let data = await fetch(
      `https://likeable-grass-gymnast.glitch.me/${api_name}/${id}`,
      {
        method: 'DELETE',
        body: JSON.stringify(el),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    length()
    document.getElementById('loader_img').style.display='none'
  } catch (err) {
    console.log(err)
  }
}

let hh = document.getElementById('close')

hh.addEventListener('click', close)

function close() {
  let one = document.getElementById('sales_cards')
  one.style.display = 'grid'
  let two = document.getElementById('big_div')
  two.style.display = 'none'
}


