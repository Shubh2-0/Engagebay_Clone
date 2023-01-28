function navbar(){
    return `
    <div id="nav">
        <div id="logo">
            <img src="https://www.engagebay.com/new/assets/img/engagebay-logo.svg" alt="Logo">
        </div>
        <div id="nav_list">
            <div id="nav_products">Products <span class="down_arrow"> <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L6.3802 7L11 1" stroke="black" stroke-width="2" stroke-linecap="round"/>
            </svg></span></div>
            <div id="nav_pricing">Pricing</div>
            <div id="nav_resources">Resources <span class='down_arrow'><svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L6.3802 7L11 1" stroke="black" stroke-width="2" stroke-linecap="round"/>
            </svg> </span> </div>
            <div id="nav_free_tools">Free Tools <span class='down_arrow'> <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L6.3802 7L11 1" stroke="black" stroke-width="2" stroke-linecap="round"/>
            </svg></span>
                <div id="free_tools_hover">
                    <p>UTM Builder</p>
                    <p>Email Signature</p>
                    <p>Email Tracker</p>
                    <p>Email Validator</p>
                </div>
            </div>

            <div id="nav_blog">Blog</div>
            <div id="nav_login">Login</div>
        </div>
        <div id="nav_btns">
            <button id="nav_free_demo">Free Demo</button>
            <button id="nav_free_signup_btn">Free Signup</button>
        </div>
    </div>
    <div id="on_prod_hover">
        <div id="on_prod_hover_content">
            <div id="prod_hover_left">
                <div id="allinone_btn">
                    <img src="../images/allinone.jpg" alt="allinone image">
                    <div id="allinone"> All-in-One Suite</div>
                </div>
                <div id="marketing_bay_btn">
                    <img src="../images/marketing bay.png" alt="marketing Bay Image">
                    <div id="mrkting">Marketing Bay</div>
                </div>
                <div id="CRM_btn">
                    <img src="../images/crm logo.png" alt="CRM Image">
                    <div id="CRM">CRM & Sales Bay</div>
                </div>
                <div id="service_bay_btn">
                    <img src="../images/sales.png" alt="Service Bay image">
                    <div id="service">Service Bay</div>
                </div>
            </div>
            <div id="prod_hover_allinone_suite">
                <div id="prod_hover_mid_left">
                    <p class="prod_hover_mid_line">Marketing Automation</p>
                    <p class="prod_hover_mid_line">Email Marketing</p>
                    <p class="prod_hover_mid_line">Email Sequences</p>
                    <p class="prod_hover_mid_line">Landig Pages</p>
                    <p class="prod_hover_mid_line">Web Forms</p>
                    <p class="prod_hover_mid_line">360 Degree Customer View</p>
                    <p class="prod_hover_mid_line">Appoinment Scheduling</p>
                    <p class="prod_hover_mid_line">Software</p>
                    <p class="prod_hover_mid_line">Contact Mnangement Software</p>
                    <p class="prod_hover_mid_line">Why EngageBay CRM?</p>
                </div>
                <div id="prod_hover_mid_right">
                    <p class="prod_hover_mid_line">Free CRM</p>
                    <p class="prod_hover_mid_line">Sales CRM</p>
                    <p class="prod_hover_mid_line">CRM Database</p>
                    <p class="prod_hover_mid_line">Free Live Chat Software</p>
                    <p class="prod_hover_mid_line">Marcos</p>
                    <p class="prod_hover_mid_line">SLA</p>
                    <p class="prod_hover_mid_line">Views</p>
                    <p class="prod_hover_mid_line">Tickets</p>
                </div>
            </div>
            <div id="prod_hover_marketing_bay">
                <div id="prod_hover_mid_left">
                    <p class="prod_hover_mid_line">Marketing Automation</p>
                    <p class="prod_hover_mid_line">Email Marketing</p>
                    <p class="prod_hover_mid_line">Email Sequences</p>
                    <p class="prod_hover_mid_line">Landig Pages</p>
                    <p class="prod_hover_mid_line">Web Forms</p>
                    <p class="prod_hover_mid_line">SMS Marketing</p>
                </div>
                <div id="prod_hover_mid_right">
                    <p class="prod_hover_mid_line">Inbound Marketing </p>
                    <p class="prod_hover_mid_line">Site Messaging</p>
                    <p class="prod_hover_mid_line">Push Notifications</p>
                    <p class="prod_hover_mid_line">Contact Segmentation</p>
                    <p class="prod_hover_mid_line">Email Templates</p>
                    <p class="prod_hover_mid_line">Bulk SMS Marketing</p>
                </div>
            </div>
            <div id="prod_hover_CRM">
                <div id="prod_hover_mid_left">
                    <p class="prod_hover_mid_line">360 Degree Customer View</p>
                    <p class="prod_hover_mid_line">Appointment Scheduling</p>
                    <p class="prod_hover_mid_line">Software</p>
                    <p class="prod_hover_mid_line">Contact Management Software</p>
                    <p class="prod_hover_mid_line">Free CRM</p>
                    <p class="prod_hover_mid_line">Sales CRM</p>
                    <p class="prod_hover_mid_line">CRM Email Integration</p>
                    <p class="prod_hover_mid_line">Sales Tools</p>
                </div>
                <div id="prod_hover_mid_right">
                    <p class="prod_hover_mid_line">Lead Scoring</p>
                    <p class="prod_hover_mid_line">Project Management</p>
                    <p class="prod_hover_mid_line">CRM Telephony</p>
                    <p class="prod_hover_mid_line">Lead Management</p>
                    <p class="prod_hover_mid_line">Employee Engagement</p>
                    <p class="prod_hover_mid_line">Deal Management</p>
                    <p class="prod_hover_mid_line">CRM Text Messaging</p>
                </div>
            </div>
            <div id="prod_hover_service">
                <div id="prod_hover_mid_left">
                    <p class="prod_hover_mid_line">Free Live Chat Software</p>
                    <p class="prod_hover_mid_line">Marcos</p>
                    <p class="prod_hover_mid_line">SLA</p>
                    <p class="prod_hover_mid_line">Views</p>
                    <p class="prod_hover_mid_line">Tickets</p>
                    <p class="prod_hover_mid_line">helpdesk Reports</p>
                </div>
                <div id="prod_hover_mid_right">
                    <p class="prod_hover_mid_line">Service Automations</p>
                    <p class="prod_hover_mid_line">Cannel Responses</p>
                    <p class="prod_hover_mid_line">Support Groups</p>
                    <p class="prod_hover_mid_line">Custom Ticket Views</p>
                </div>
            </div>

            <div id="prod_hover_right">
                <div class="right_sec_head">
                    <p class="all_plans">ALL PLANS</p>
                    <hr>
                </div>
                <div class="prod_right_container">
                    <div>
                        <img src="../images/List.jpg" alt="free Logo">
                        <div>
                            <h5>Free</h5>
                            <p>Useful for solopereneurs Free for teams of up to 15 members</p>
                        </div>
                    </div>
                    <div>
                        <img src="../images/reward.png" alt="Basic Logo">
                        <div>
                            <h5>Basic</h5>
                            <p>Best suited for basic users who have a limited customer base</p>
                        </div>
                    </div>
                    <div>
                        <img src="../images/luggage.jpg" alt="Growth Logo">
                        <div>
                            <h5>Growth</h5>
                            <p>Ideal for startups to manage their business and scale faster</p>
                        </div>
                    </div>
                    <div>
                        <img src="../images/building.png" alt="pro Logo">
                        <div>
                            <h5>Pro</h5>
                            <p>Great for teams that require additional features to grow their business 7X</p>
                        </div>
                    </div>
                    <div class="compare_plans_div">
                        <img src="../images/setting.png" alt="Compare all plans div">
                        <div id="cmpre_plans">Compare all Plans <span id="for_arrow">&#8594</span> </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="on_resources_hover">
        <div id="on_resources_hover_content">
            <div id="resource_hover_left">
                <div class="res_btns" id="res_landing_page">Landing Pages Guide</div>
                <div class="res_btns" id="res_marketing">Inbound Marketing Guide</div>
                <div class="res_btns" id="res_popups">Website Popups Guide</div>
                <div class="res_btns" id="res_automation">Marketing Automation Guide</div>
                <div class="res_btns" id="res_email">Email Marketing Guide</div>
                <div class="res_btns" id="res_lead">Lead Generation Guide</div>
                <div class="res_btns" id="res_crm_guide">CRM Guide</div>
                <div class="res_btns" id="res_helpdesk">Helpdesk Guide</div>
                <div class="res_btns" id="res_integ">Integrations</div>
                <div class="res_btns" id="res_case_std">Case Sutdy</div>
            </div>
            <div class="resources_hide_divs" id="resource_hover_landing_page">
                <p class="prod_hover_mid_line">The Basics</p>
                <p class="prod_hover_mid_line">How To Choose</p>
                <p class="prod_hover_mid_line">Template</p>
                <p class="prod_hover_mid_line">Traffic Generation Tips</p>
                <p class="prod_hover_mid_line">Landing Page Recipes</p>
                <p class="prod_hover_mid_line">Best Practices</p>
            </div>
            <div class="resources_hide_divs" id="resource_hover_marketing_guide">
                <p class="prod_hover_mid_line">The Basics</p>
                <p class="prod_hover_mid_line">Inbound vs Overbound</p>
                <p class="prod_hover_mid_line">Engaging Web Bisotors</p>
                <p class="prod_hover_mid_line">Engagement and Conversions</p>
                <p class="prod_hover_mid_line">Nurturing Web Visitors</p>
                <p class="prod_hover_mid_line">Closing Deals</p>
            </div>
            <div class="resources_hide_divs" id="resource_hover_popups_guide">
                <p class="prod_hover_mid_line">What are Web Popus?</p>
                <p class="prod_hover_mid_line">Types of Web Popus</p>
                <p class="prod_hover_mid_line">Advantages of Web Popus</p>
                <p class="prod_hover_mid_line"> Tips and Tricks </p>
            </div>
            <div class="resources_hide_divs" id="resource_hover_automatic_guide">
                <p class="prod_hover_mid_line">The Basics</p>
                <p class="prod_hover_mid_line">Segmenting Leads</p>
                <p class="prod_hover_mid_line">Automated Email Templates</p>
                <p class="prod_hover_mid_line">Email Personalization</p>
                <p class="prod_hover_mid_line">Tools and Platforms</p>
            </div>
            <div class="resources_hide_divs" id="resource_hover_email_guide">
                <p class="prod_hover_mid_line">Introduction</p>
                <p class="prod_hover_mid_line">Advantages</p>
                <p class="prod_hover_mid_line">Elements</p>
                <p class="prod_hover_mid_line">Value Ladder</p>
                <p class="prod_hover_mid_line">Lead Nurturing</p>
                <p class="prod_hover_mid_line">Landing Pages</p>
                <p class="prod_hover_mid_line">Strategies</p>
            </div>
            <div class="resources_hide_divs" id="resource_hover_generation_guide">
                <p class="prod_hover_mid_line">What Is a Lead?</p>
                <p class="prod_hover_mid_line">Importance of Lead Generation</p>
                <p class="prod_hover_mid_line">Lead Prospect</p>
                <p class="prod_hover_mid_line">Master Lead Generation</p>
                <p class="prod_hover_mid_line">Lead Generation Best Practices</p>
            </div>
            <div class="resources_hide_divs" id="resource_hover_CRM_guide">
                <p class="prod_hover_mid_line">What is CRM?</p>
                <p class="prod_hover_mid_line">Sales CRM</p>
                <p class="prod_hover_mid_line">Email Marketing CRM</p>
                <p class="prod_hover_mid_line">CRM with Marketing Automation</p>
                <p class="prod_hover_mid_line">Sales Automation</p>
                <p class="prod_hover_mid_line">Sales Management</p>
                <p class="prod_hover_mid_line">Sales Pipeline</p>
                <p class="prod_hover_mid_line">Small Business Marketing Automation</p>
            </div>
            <div class="resources_hide_divs" id="resource_hover_helpdesk_guide">
                <p class="prod_hover_mid_line">Helpdesk Software</p>
                <p class="prod_hover_mid_line">Especially Small</p>
                <p class="prod_hover_mid_line">Purpose of Helpdesk Software</p>
                <p class="prod_hover_mid_line">Right Helpdesk Software</p>
                <p class="prod_hover_mid_line">Resolve Angry Customer</p>
                <p class="prod_hover_mid_line">Main Geatures of Help Desk</p>
                <p class="prod_hover_mid_line">EngageBay's Helpdesk</p>
            </div>
            <div class="resources_hide_divs" id="resource_hover_integrations">
                <p class="prod_hover_mid_line">Zapier</p>
                <p class="prod_hover_mid_line">SendGrid</p>
                <p class="prod_hover_mid_line">Mailgun</p>
                <p class="prod_hover_mid_line">Mandrill</p>
                <p class="prod_hover_mid_line">Xero</p>
            </div>
            <div class="resources_hide_divs" id="resource_hover_case_study">
                <p class="prod_hover_mid_line">All in One case Study</p>
            </div>
            <div id="resource_hover_right">
                <div class="right_sec_head">
                    <p class="all_plans">ALL PLANS</p>
                    <hr>
                </div>
                <div class="prod_right_container">
                    <div>
                        <img src="../images/List.jpg" alt="free Logo">
                        <div>
                            <h5>Free</h5>
                            <p>Useful for solopereneurs Free for teams of up to 15 members</p>
                        </div>
                    </div>
                    <div>
                        <img src="../images/reward.png" alt="Basic Logo">
                        <div>
                            <h5>Basic</h5>
                            <p>Best suited for basic users who have a limited customer base</p>
                        </div>
                    </div>
                    <div>
                        <img src="../images/luggage.jpg" alt="Growth Logo">
                        <div>
                            <h5>Growth</h5>
                            <p>Ideal for startups to manage their business and scale faster</p>
                        </div>
                    </div>
                    <div>
                        <img src="../images/building.png" alt="pro Logo">
                        <div>
                            <h5>Pro</h5>
                            <p>Great for teams that require additional features to grow their business 7X</p>
                        </div>
                    </div>
                    <div class="compare_plans_div">
                        <img src="../images/setting.png" alt="Compare all plans div">
                        <div id="cmpre_plans_r">Compare all Plans <span id="for_arrow">&#8594</span> </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}

export default navbar;