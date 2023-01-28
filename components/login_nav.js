export default function(active='Marketing',one='',two='',three='',four='',five=''){
    return `
    <div id="navbar">
            <div id="nav_left">
                <div id="logo">
                    <img src="https://cdn5.engagebay.com/images/256x256.png" alt="logo">
                </div>
                <div id="marketing">
                    <div id="marketing_content">
                        <img id="mrkt_logo_img" src="../images/announce_orange.svg" alt="mrkt Logo">
                        <p id="page_active">${active} <span><svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L6.3802 7L11 1" stroke="#CD5C02" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    </span> </p>
                    </div>
                    <div id="mrkt_dropdown"><div id="marketing_page"><span><img src="../images/mrkting.svg" alt=""></span> Marketing</div>
                    <div id="sales_page"><span><img src="../images/sales.svg" alt=""></span> Sales</div>
                    <div id="service_page"> <span><img src="../images/srcice.svg" alt=""></span> Service</div>
                    <div id="live_chat_page"> <span><img src="../images/live_chat.svg" alt=""></span> Livechat</div>
                </div>
                    </div>
                </div>
            </div>
            <div id="nav_mid">
                <div class="nav_mid_list" id="mark_contacts">${one} </div>
                <div class="nav_mid_list" id="mark_forms">${two} </div>
                <div class="nav_mid_list" id="mark_landing_pg">${three}</div>
                <div class="nav_mid_list" id="mark_temp">${four} </div>
                <div class="nav_mid_list" id="campagins">${five} </div>
            </div>
            <div id="nav_right">
                <div id="srchBtn">
                    <img src="../images/Search.svg" alt="srch button">
                </div>
                <div id="addBtn">
                    <img src="../images/Add.svg" alt="addBtn">
                </div>
                <div id="contacts">
                    <img src="../images/50 Contact Inbox.svg" alt="">
                </div>
                <div id="profile_dropdown">
                    <div id="profile">
                        <img src="../images/Profile.svg" alt="">
                    </div>
                    <div class="dropdown_content">
                        <div id="prof_header">
                            <div id="prof_img">
                                <img src="../images/Profile.svg" alt="prof_img">
                            </div>
                            <div id="prof_name">
                                <p id="name">name</p>
                                <p id="email">email</p>
                            </div>
                        </div>
                        <hr>
                        <div id="prof_other">
                            <div class="billing"><span><img src="../images/cart.svg" alt=""></span> Billing</div>
                            <div><span><img src="../images/pro_setting.svg" alt=""></span> Preferences</div>
                            <div> <span><img src="../images/prof.svg" alt=""></span> Account Settings</div>
                            <div> <span><img src="../images/earn.svg" alt=""></span> Refer & Earn</div>
                            <div> <span><img src="../images/fedback.svg" alt=""></span> Feedback</div>
                            <hr>
                            <div id='log_out' > <span><img src="../images/logout.svg" alt=""></span> Logout</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}