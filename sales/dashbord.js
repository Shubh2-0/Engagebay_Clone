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
  for (let i = 0; i < 5; i++) {
    let num = Math.floor(Math.random() * color_arr.length - 1)
    arr_divv[i].style.color = color_arr[num]
  }
  
  let boxes_arr = document.querySelectorAll('.total_count')

  let content_show = async()=>{
    try{
        let res = await fetch(`https://likeable-grass-gymnast.glitch.me/deals`)
        let data = await res.json();
        contact_div_append(data)
        document.getElementById('dash_contacts').textContent = data.length;
        document.getElementById('loader_img').style.display='none'
      }catch(err){
        console.log(err)
      }
  }
  content_show()
  let contactData = document.getElementById('contact_data')
 let contact_div_append= (data)=>{
    contactData.innerHTML = null;
    data.forEach((element) => {
        let main_div = document.createElement('div')
        let cont_data = document.createElement('div')
        let name = document.createElement('p')
        name.textContent = "Name:  " + element.Name;
        let number = document.createElement('p')
        number.textContent = "Number: "+ element.Contact;
        let del_btn = document.createElement('div')
        del_btn.innerHTML=`<i class="fa-solid fa-xmark">`
        cont_data.append(name,number)
        main_div.append(cont_data,del_btn)
        contactData.append(main_div)
        cont_data.addEventListener('click',function(){
            module_content1(element)
        })
        del_btn.onclick=function(){
            del_contact(element,'deals')
        }
    });
 }

  function module_content1(el) {
    document.getElementById('big_div').style.display = 'block'
    document.getElementById('close').onclick = function(){
        document.getElementById('big_div').style.display = 'none'
    }
    let contact_details= document.getElementById('form_div')

    let cont_modal = document.createElement('div')
    cont_modal.setAttribute('class','form_div')
    contact_details.innerHTML = `
  <h1>Details</h1>
  <p>Name: ${el.Name}</p>
  <p>Contact Number: ${el.Contact}</p>
  <p>Date: ${el.Date}</p>
  <p>Comapany Name: ${el.Company}</p>
  <p>Note: ${el.Note}</p>
  <p>Selected Tags: ${el.Tag}</p>
  <p>Description: ${el.Desc}</p>
  <p>Amount: ${el.Amount} ${el.Slct}</p>
  `
  }
  let del_contact = async(el,sec)=>{
    document.getElementById('loader_img').style.display='flex'
    try{
        await fetch(
            `https://likeable-grass-gymnast.glitch.me/${sec}/${el.id}`,
            {
              method: 'DELETE',
              body: JSON.stringify(el),
              headers: {
                'Content-Type': 'application/json',
              },
            },
          )
          content_show()
          tickets()
          tasks()
          automation()
    }catch(err){
        console.log(err)
    }
  }

let tickets= async()=>{
    try{
        let res = await fetch(`https://likeable-grass-gymnast.glitch.me/tickets`)
        let data = await res.json()
        showtoTickect(data)
        document.getElementById('dash_tickets').textContent = data.length;
        document.getElementById('loader_img').style.display='none';
           }catch(err){
        console.log(err)
    }
}
tickets();

let ticket_content = document.getElementById('tickets_div')
function showtoTickect(data){
ticket_content.innerHTML=null;
data.forEach((element)=>{
    let main_div = document.createElement('div')
    let cont_data = document.createElement('div')
    let name = document.createElement('p')
    name.textContent = "Subject:  " + element.Subject;
    let number = document.createElement('p')
    number.textContent = "Assigned to: "+ element.Assignee;
    let del_btn = document.createElement('div')
    del_btn.innerHTML=`<i class="fa-solid fa-xmark">`
    cont_data.append(name,number)
    main_div.append(cont_data,del_btn)
    ticket_content.append(main_div)
    del_btn.onclick=function(){
        del_contact(element,'tickets')
    }
    cont_data.onclick=function(){
        show_ticket_modal(element)
    }
})
}

let show_ticket_modal = (el)=>{
    document.getElementById('big_div').style.display = 'block'
    document.getElementById('close').onclick = function(){
        document.getElementById('big_div').style.display = 'none'
    }
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

let tasks = async()=>{
    try{
       let res =  await fetch(`https://likeable-grass-gymnast.glitch.me/tasks`)
  let data  = await res.json()
  showTask(data);
  document.getElementById('dash_tasks').textContent = data.length;
  document.getElementById('loader_img').style.display='none';
    }catch(err){
        console.log(err)
    }
}
tasks()

let taskContainer = document.getElementById('tasks_div')
function showTask(data){
    taskContainer.innerHTML=null;
    data.forEach((el)=>{
        let div1 = document.createElement('div')
        let div2 = document.createElement('div')
        div2.innerHTML=`  <p>Task - ${el.Name} </p>
        <p>Type - ${el.Type}  </p>
        <p>Priority - ${el.Priority} </p>
        <p>Status - ${el.Status} </p>`
        let del_btn = document.createElement('div')
        del_btn.innerHTML=`<i class="fa-solid fa-xmark">`
        div1.append(div2,del_btn);
        taskContainer.append(div1)
        del_btn.onclick=function(){
            del_contact(el,'tasks')
        }
        div2.onclick = function(){
            module_content3(el)
        }
       
    })
}

function module_content3(el) {
    document.getElementById('big_div').style.display = 'block'
    document.getElementById('close').onclick = function(){
        document.getElementById('big_div').style.display = 'none'
    }
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

  let automation = async()=>{
    try{
        let res = await fetch(`https://likeable-grass-gymnast.glitch.me/web_rules`)
        let data  = await res.json();
        automation_div(data);
        document.getElementById('dash_auto').textContent = data.length;
  document.getElementById('loader_img').style.display='none';

    }catch(err){
console.log(err)
    }
  }
  automation()

  let auto = document.getElementById('automation_div')
  function automation_div(data){
    auto.innerHTML=null;
    data.forEach((el)=>{
        let div1 = document.createElement('div')
        let div2 = document.createElement('div')
        div2.innerHTML=`  <p>Name - ${el.name} </p>
        <p>Contain - ${el.contain} </p>
        <p>Description - ${el.desc} </p>`
        let del_btn = document.createElement('div')
        del_btn.innerHTML=`<i class="fa-solid fa-xmark">`
        div1.append(div2,del_btn);
        auto.append(div1)
        del_btn.onclick=function(){
            del_contact(el,'web_rules')
        }
        div2.onclick = function(){
            module_content4(el)
        }
    })
  }
  function module_content4(el) {
    document.getElementById('big_div').style.display = 'block'
    document.getElementById('close').onclick = function(){
        document.getElementById('big_div').style.display = 'none'
    }
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

  
let contact_btn = document.getElementById('deal_submit')
contact_btn.addEventListener('click', function () {
  document.getElementById('loader_img').style.display='flex'
  setTimeout(() => {
    content_show()
  }, 2000);
})

let tickets_btn = document.getElementById('ticket_submit')
tickets_btn.onclick = function () {
  document.getElementById('loader_img').style.display='flex'
  setTimeout(() => {
    tickets()
  }, 2000);
  
}

document.getElementById('task_submit').addEventListener('click', function () {
  document.getElementById('loader_img').style.display='flex'
  setTimeout(() => {
    tasks()
  }, 2000);
})

let submit_btn3 = document.getElementById('web_submit')
submit_btn3.addEventListener('click', function () {
  document.getElementById('loader_img').style.display='flex'
  setTimeout(() => {
    automation()
  }, 2000);
  
})
