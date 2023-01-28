import navbar from '../components/nav.js'
import foot from '../components/foot.js'
let navBtn = document.getElementById('blog_navbar')
navBtn.innerHTML=navbar()
let footer_btn = document.getElementById('footer_btn')
footer_btn.innerHTML=foot()
let blog_modal = document.querySelector('.blog_modal');

// let closeBtn = document.querySelector('.close_btn');
// closeBtn.onclick = ()=>{
//     closeModal();
// }
function closeModal(){
    blog_modal.style.display = 'none';
}

// modal buttons:
let recents_btn = document.getElementById('recents_img');
recents_btn.onclick = ()=>{
    append_modal(modals[0]);
}

let modal2Btn =  document.getElementById('recents_grid1');
modal2Btn.onclick = ()=>{
    append_modal(modals[1]);
}
let modal3Btn =  document.getElementById('recents_grid2');
modal3Btn.onclick = ()=>{
    append_modal(modals[2]);
}
let modal4Btn =  document.getElementById('recents_grid3');
modal4Btn.onclick = ()=>{
    append_modal(modals[3]);
}
let modal5Btn =  document.getElementById('mBay-1');
modal5Btn.onclick = ()=>{
    append_modal(modals[1]);
}
let modal6Btn =  document.getElementById('mBay-2');
modal6Btn.onclick = ()=>{
    append_modal(modals[4]);
}
let modal7Btn =  document.getElementById('mBay-3');
modal7Btn.onclick = ()=>{
    append_modal(modals[5]);
}
let modal8Btn =  document.getElementById('salesBay1')
modal8Btn.onclick = ()=>{
    append_modal(modals[6]);
}
let modal9Btn =  document.getElementById('salesBay2');
modal9Btn.onclick = ()=>{
    append_modal(modals[7]);
}
let modal10Btn =  document.getElementById('salesBay3');
modal10Btn.onclick = ()=>{
    append_modal(modals[8]);
}
let modal11Btn =  document.getElementById('servBay1');
modal11Btn.onclick = ()=>{
    append_modal(modals[9]);
}
let modal12Btn =  document.getElementById('servBay2');
modal12Btn.onclick = ()=>{
    append_modal(modals[10]);
}
let modal13Btn =  document.getElementById('servBay3');
modal13Btn.onclick = ()=>{
    append_modal(modals[11]);
}




// modal-content:
let modals = [
    {
    image:"https://www.engagebay.com/blog/wp-content/w3-webp/uploads/2022/10/best-saas-deals-2022.pngw3.webp",
    heading : 'The Best Black Friday SaaS Deals For 2022 (70+ Fresh Deals)',
    line1: 'Pixpa’s versatile platform has everything you need to showcase your work, share ideas and sell your stuff online, without any coding knowledge.',
    line2: 'Klenty is a sales engagement platform that helps salespeople with sending personalized outreach that gets more replies and meetings booked.',
    line3:'SmartReach is an all-in-one sales enablement platform that specialises in cold email automation with focus on email deliverability. Easiest and fastest way to grow sales by helping you find prospects to multiple CRMs.',
    line4:'With Sender, your email marketing campaign will have high email deliverability, creative and engaging templates, email automation, and campaign analysis.'
},
{
    image:"https://www.engagebay.com/blog/wp-content/w3-webp/uploads/2022/09/hubspot-vs-mailchimp.pngw3.webp",
    heading : 'HubSpot vs MailChimp: A Complete Product Comparison',
    line1: 'HubSpot is an integrated CRM platform with tools for managing the marketing, sales, and customer service processes of businesses. The software comprises five hubs, which include CMS, Marketing, Service, Sales, and Operations hubs.',
    line2: 'With HubSpot, you have access to a free plan containing basic email marketing tools you need, like a drag-and-drop editor and email templates.',
    line3:'As for Mailchimp, it’s an all-in-one marketing automation platform that started out as an email marketing software but has evolved to offer features that span across social media management, website design, and customer relationship management.',
    line4:'Mailchimp’s email marketing features are closely similar to HubSpot. Like HubSpot, you have access to email templates on Mailchimp.'
},
{
    image:"https://www.engagebay.com/blog/wp-content/w3-webp/uploads/2022/02/personal-crm.pngw3.webp",
    heading : 'Why You Should Use a Personal CRM?',
    line1: 'You’re a new business or a self-employed individual looking to grow and expand your work.',
    line2: 'You attend many conferences, expos, and networking events, and you constantly collect a pocketful of business cards.',
    line3:'You don’t get enough time to spend with your loved ones.',
    line4:'You plan many events on your calendar, but due to scheduling conflicts, you tend to miss a lot of them.'
},
{
    image:"https://www.engagebay.com/blog/wp-content/w3-webp/uploads/2022/09/happy-customers.pngw3.webp",
    heading : 'Four Reasons To Invest In Happy Customers',
    line1: 'Positive word-of-mouth spreads quickly, it’s a fact! Real customer reviews are credible and convince other users, while paid or partner reviews sound too salesy and make other potential customers suspicious.',
    line2: 'In addition to praising your goods and services, happy customers are more likely to do business with you again.',
    line3:'Well, upselling and cross-selling can become much easier when your customers are happy with your products, services, and customer support. That brings in more revenue at little to no extra cost. ',
    line4:'A great customer experience promotes brand loyalty and aids in differentiating you from rivals. A lot of other companies may be offering great discounts or similar products and services, but you can always make your mark by making your customers happy.'
},
{
    image:"https://www.engagebay.com/blog/wp-content/w3-webp/uploads/2020/01/email-drip-campaign.pngw3.webp",
    heading : 'The Surprisingly Easy Guide For Email Drip Campaigns',
    line1: 'The first and foremost step to establishing a successful drip email campaign is to understand your target market. You cannot send the same type of email to everyone. ',
    line2: 'If you want people to read your emails, your content needs to be short, crisp, and to the point. The message you are sending through drip email needs to be clear and must convey what you want to achieve.',
    line3:'Once you have determined your target audience and email content, it is time to decide the number of emails a subscriber can expect. ',
    line4:'Be it purchasing a product, getting a subscription plan, or browsing for the first time, drip email sequences ensure that emails are sent at the right time.',
},
{
    image:"https://www.engagebay.com/blog/wp-content/w3-webp/uploads/2022/04/omnichannel-marketing.pngw3.webp",
    heading : 'All the Basics of Omnichannel Marketing',
    line1: 'Omnichannel marketing is the streamlined integration of messaging, branding, customer touchpoints, and other channels with the goal to provide a meaningful customer experience.',
    line2: 'By understanding the needs and behaviors of customers across all channels and touchpoints, you can create targeted messaging that resonates with them. This allows you to build stronger relationships with your customers, increasing their loyalty and driving sales growth.',
    line3:'Using a variety of different channels to reach and interact with customers can help you find new audiences that you might not have been able to connect with otherwise.',
    line4:'Omnichannel marketing is a more comprehensive and holistic approach to marketing that takes into account all potential channels through which a customer might interact with a brand.',
},
{
    image:"https://www.engagebay.com/blog/wp-content/w3-webp/uploads/2022/11/sales-volume.pngw3.webp",
    heading : '4 Strategies to Boost Your Revenue',
    line1: 'USP, or unique selling proposition, is the characteristic of a product that will appeal to your audience and help distinguish it from the competitors. ',
    line2: 'If you know nothing about your audience’s likes and dislikes, they will be uninterested in buying from you. To increase sales volume, you need to deeply understand your client’s needs and appreciate their choices. ',
    line3:'Qualifying leads implies determining whether someone meets your target audience criteria, while nurturing includes providing your prospects with relevant content based on their stage in the sales pipeline. ',
    line4:'The faster the sales cycle, the more products you can sell within a short span of time. You should automate routine marketing and sales-related tasks to fasten your sales cycle. Furthermore, invest more time and money into your most in-demand products and simplify the buying process. ',
},
{
    image:"https://www.engagebay.com/blog/wp-content/w3-webp/uploads/2022/09/strategic-selling.pngw3.webp",
    heading : 'What Is Strategic Selling?',
    line1: 'A sales framework that focuses on building relationships with various decision-makers and stakeholders rather than just a single contact.',
    line2: 'Strategic selling was primarily designed for managing B2B sales, and its basic goal is to provide sellers with enough information to undertake the right decisions regarding sales opportunities. ',
    line3:'It is based on the win-win principle, i.e., sellers seal deals with the aim of helping buyers solve problems and earn higher ROI. ',
    line4:'In simple terms, the sales model includes categorizing the different roles within a client’s company according to their influence on the purchase. Once that is done, it involves determining the level of support for the deal from each stakeholder, and using the information to finalize the deal.',
},
{
    image:"https://www.engagebay.com/blog/wp-content/w3-webp/uploads/2022/09/inside-out-side-sales.pngw3.webp",
    heading : 'Inside vs Outside Sales',
    line1: 'Inside sales is the process of selling products and services to customers remotely. That’s why it is often referred to as remote sales.',
    line2: 'Inside sales enables sales processes through the use of tools such as phone, email, VoIP, social media, and other digital communication tools to inform consumers about a company’s products and generate revenue.',
    line3:'Outside sales models involve getting out in the field and meeting with clients in person. They need to travel to talk to customers, hence, they are mostly found off-site. At times, outside sales are also known as field sales. ',
    line4:'While a major portion of the sales job can be done from the office, thanks to online communication tools like Skype and Zoom, outside sales requires reps to be available in person whenever and wherever required. ',
},
{
    image:"https://www.engagebay.com/blog/wp-content/w3-webp/uploads/2022/11/sorry-for-the-inconvenience.pngw3.webp",
    heading : 'The Right Way Of Saying ‘Sorry for the Inconvenience’',
    line1: 'First things first, you should avoid those exact words. Instead, start the message with better phrase, like: I recognize how critical this is.',
    line2: 'Clients need to feel that the organization is ready to acknowledge their mistakes.',
    line3:'Remedies that can be deployed are the best way to pacify someone who’s upset with you or your business. Add something like this after your apology: Would you mind taking a look at our Plan B?',
    line4:'You have already admitted your mistake. Your patrons expect you to be open to queries. Say something like: If you have any questions, please contact me at [email address].',
},
{
    image:"https://www.engagebay.com/blog/wp-content/w3-webp/uploads/2022/01/customer-service-tips-1.pngw3.webp",
    heading : '12 Customer Service Tips for Phenomenal Success',
    line1: 'Email is one of the most popular and simplest customer service channels, as it doesn’t require an employee of an organization to be available all the time. The contact page on your website can tell users the amount of time in which they can expect a response.',
    line2: 'With live chat, you can provide quick and effective support to existing and potential customers — even after hours, including nights, weekends, and holidays.',
    line3:'Some people prefer a telephone conversation over email or chat, especially to deal with urgent and time-sensitive issues. You can connect them with one of your customer service representatives to address their problems and solve issues at the earliest.',
    line4:'Your customers might use instant or direct messaging to converse with you directly, or they could connect with you socially.',
},
{
    image:"https://www.engagebay.com/blog/wp-content/w3-webp/uploads/2022/09/customer-needs.pngw3.webp",
    heading : 'The Extraordinary Power of Customer Needs & How to Solve Them',
    line1: 'Customer needs can be defined as the trigger that helps the customers make a purchase decision. A brand’s feature or benefit largely depends on the customer’s needs and affects their decision-making.',
    line2: 'Identifying customer needs involves deep market research around the industry and asking specific questions.',
    line3:'The best way to solve customer needs is by putting yourself in their shoes. Think about what would prevent your customers from purchasing your product.',
    line4:'If your customers don’t hear about you often, they will lose the post-purchase excitement increasing the churn rate after their subscription cycle gets over. A lot goes into nurturing the relationship with your customer.',
},
]



function append_modal(el){

    let modal = document.querySelector('.modal-content');
    modal.innerHTML = null;

    let modal_clBtn = document.createElement('div');
    modal_clBtn.innerHTML = '&times;'
    modal_clBtn.className = 'close_btn';
    modal_clBtn.onclick = ()=>{
        closeModal();
    }

    let img = document.createElement('img');
    img.src = el.image;

    let info = document.createElement('div');
    info.id = 'blog_modalInfo';

    let head = document.createElement('h3');
    head.innerText = el.heading;

    let line1 = document.createElement('li');
    line1.innerText = el.line1;

    let line2 = document.createElement('li');
    line2.innerText = el.line2;

    let line3 = document.createElement('li');
    line3.innerText = el.line3;

    let line4 = document.createElement('li');
    line4.innerText = el.line4;

    info.append(head,line1,line2, line3,line4);
    modal.append(modal_clBtn,img,info);
    blog_modal.style.display = 'block';
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