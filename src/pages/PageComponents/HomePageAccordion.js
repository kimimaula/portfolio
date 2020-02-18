import './styles/HomePageAccordion.css'
import React from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

const HomePageAccordion = () => {

    return(
    <Accordion>

    <Card className="card-accordian">
        <Accordion.Toggle as={Card.Header} eventKey="0">
        <strong>Resume</strong>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
        <Card.Body>
        <h6><strong>Self-Taught Web Developer | MERN</strong></h6>
        <p>Aug 2019 – Present</p>
        <ul>
            <li>Spent the last few months learning JavaScript. </li>
            <li>Visit my demo page at https://my-prof-19a8f.web.app/</li>
            <li>Willing and eager to learn more.</li>
            <li>Definitely not perfect but I am improving from day to day!</li>
            <li>What I lack with experience, I make up with a strong dedication and thirst for knowledge</li>
            <li>Spends more than 8 hours a day learning while doing some side jobs to sustain myself in order to pursue my dream</li>
        </ul>

        <h6><strong>Recruiting Coordinator / Sourcing Specialist Randstad USA  |  Kuala Lumpur, Malaysia (Retrenchment) </strong></h6>
        <p>Mar 2019 – July 2019</p>
        <h6><strong>Honeywell Research </strong></h6>
        <ul>
        <li>Finding and sourcing resumes for Honeywell USA regarding their competitor for IT and engineering roles</li>
        <ul>
        <li>Roles Include items such as IT Cyber Security and GDPR Compliance in the automotive industries</li>
        <li>Also includes engineering roles such as Test Engineer, Mechanical Automotive Engineering, Lidar Engineer and QA Engineer as well as team leads.</li>
        <li>Basic minimum requirement usually involve knowledge on either Matlab, Autocad or C++ depending on the area of Engineering.
        Recruitment Coordinator, Whirlpool </li>
        <li>Send and check candidates background checks, while performing other administrative duties</li>
        </ul>
        <li>Ensure all documents completed before onboarding candidates</li>
        <li>Contact candidate to ensure timely completion of all documents</li>
        </ul>

        <h6><strong> EvolusiTech Administrator</strong></h6> 
        <p>July 2017 – January 2019 (Retrenchment)</p>
        <h6><strong>Retail and dropship business model for gadgets, phones and laptops, and bitcoin mining</strong></h6> 
        <ul>
        <li>Running a business - Manage day to day accounting (inventories, returns, shipping)</li>
        <li>Customer service – deals with customers who complain regarding faulty products</li>
        <li>Vendor management – Deal with more than not – very agressive vendors which requires high level of meticulousness and patience</li>
        <li>Analysis – Analyze market trends to make a projection of the next item to be ordered and shipped</li>
        <li>Monitor daily development of bitcoin prices and control selling and buying</li>
        <li>Source for potential buyers of Bitcoin and assist in buying and selling</li>
        </ul>

        <h6><strong>Agoda.com 
        Customer Service Specialist (Quality and Assurance) </strong></h6> 
        <p>July 2016 – July 2017 (Contractual Basis)</p>
        <ul>
        <p>Being in a contact center, the scopes of the job is more challenging than that of a call center. as it requires the skills below:</p>
        <li>Multitasking -Multitasking is the most important skill as we do not only handle huge amounts of calls, but emails as well at the same time -The aspect above makes the job more challenging as I am required to multitask with efficiency and accuracy </li>
        <li>Time management - Records of SLA and productivity are extremely accurate, hence self time management is important</li>
        <li>Problem Solving -Guests do not call in when they do not encounter a problem, hence as customer service specialists, we are given the capability to extend our help as we see fit, as each agent is independent and quick on their feet </li>
        <li>Independent -We do not consult for most of our issues, rather we have a database containing all the knowledge and each agent is expected to be independent and justify the reasons for each of their actions</li>
        <li>Time management - Records of SLA and productivity are extremely accurate, hence self time management is important to ensure</li>
        <li>Data Analysis and reporting -Analyses data of KPI to ascertain root causes of problems -Sends out daily reports of agent performance</li>
        <p>Achievements, Accomplishments and Projects so far</p> 
        <li>Exceedeed management expectation for Service Level Agreement as well as customer satisfaction </li>
        <li>Ping Task - being given the responsibility to assist new hires on their queries and assist o improve new hires on SLA and KPI achievement </li>
        <li>Quality Assurance and Compliance Monitoring </li>
        <li>Coaching and training Customer Service agents for service improvement</li>
        <li>Exceeded management expectations for hours spent on the job </li>
        <li>No emergency leaves / lateness </li>
        </ul>

        </Card.Body>
        </Accordion.Collapse>
    </Card>

    <Card className="card-accordian">
        <Accordion.Toggle as={Card.Header} eventKey="1">
        <strong>Website Features</strong>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
        <Card.Body>
            <h6><strong>Fully Implemented Authentication system</strong></h6>
                <ul>
                    <li>Certain features are only available when you are logged in</li>
                    <li>View your dashboard</li>
                    <li>Even if the frontend is hacked, only a valid token issued when you log in enables update/changes</li>
                </ul>
            <h6><strong>Working Shopping System</strong></h6>
                <ul>
                    <li>Adding a new product so other users can see</li>
                    <li>Adding products to a cart and editing cart</li>
                    <li>Ordering Products</li>
                </ul>
            <h6><strong>Taken into account for compatibility of 98% of users</strong></h6>
                <ul>
                    <li>This means that this website will have issues or bugs with only 2% of global worldwide users</li>
                </ul>
            <h6><strong>Single Page Application(SPA)</strong></h6>
                <ul>
                    <li>This website only contains one page. Whenever you click on a different button, it does not refresh or redirect to a different page, instead, the page only re-renders. You may notice this if you inspect the DOM element by pressing f12. When a new page opened, the parts of the DOM that flashes are only the parts of the DOM that updates</li>
                </ul>
            <h6><strong>A responsive web design for mobile and desktop</strong></h6>
                <ul>
                    <li>I have tested and checked the codes for compatibility of most browsers. Though it will be very highly likely that it might not work on Internet Explorer. In the initial design phase, I had thought to implement for IE as well, but decided against it because global worldwide usage shows less than 2% of users still use Internet Explorer.</li>
                    <li>UI definitely still has a long way to go with myself pushing updates constantly whenever I see a UI defect</li>
                </ul>
        </Card.Body>
        </Accordion.Collapse>
    </Card>
    <Card className="card-accordian">
        <Accordion.Toggle as={Card.Header} eventKey="2">
        <strong>What was it built with?</strong>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2">
        <Card.Body>
        <h6><strong>MERN Stack (Mongo, Express, Node, React)</strong></h6>
        <h6><strong>Front End</strong></h6>
            <li><strong>React JS/Javascript</strong></li>
            <ul>
                <li>React Dom</li>
                <li>React Hooks</li>
                <li>React Bootstrap</li>
                <li>React Router Dom</li>
                <li>Axios</li>
            </ul>
        <h6><strong>Why React JS</strong></h6>
        <p>With a strong team to back it up and maintain it, solid documentation, promises of fast loading time - I didn't see what's not to love about React JS </p>
             <ul>
                <li>Good support from the community</li>
                <li>Fast loading due to Virtual Dom</li>
                <li>New updates and features which makes it easier as time goes by</li>
            </ul>
        <h6><strong>Back End</strong></h6>
            <li><strong>Express/MongoDB</strong></li>
                <ul>
                    <li>MongoDB as database</li>
                    <li>Express</li>
                    <li>Mongoose ORM</li>
                    <li>Multer</li>
                    <li>BCrypt</li>
                    <li>jsonwebtoken</li>
                    <li>connect-busboy</li>
                    <li>express-formidable</li>
                </ul>
        <h6><strong>Deploy</strong></h6>
            <li><strong>App Deployment</strong></li>
                <ul>
                    <li>Front End : Firebase</li>
                    <li>Server : Heroku</li>
                    <li>Databse : MongoDB</li>
                </ul>
        </Card.Body>
        </Accordion.Collapse>
    </Card>

    <Card className="card-accordian">
        <Accordion.Toggle as={Card.Header} eventKey="3">
        <strong>More Features Coming Soon!</strong>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="3">
        <Card.Body>
        <h6><strong>Front End</strong></h6>
            <ul>
                <li><strong>Improvements to come</strong></li>
                <ul>
                    <li>Improve UI/UX design</li>
                    <li>Add Timeout if fetch/post request fail</li>
                    <li>Improve Error modal message to specify in username and password page</li>
                    <li>Improve Error modal to show if file is not png, jpg or jpeg and show size error</li>
                    <li>improve alert when account is created</li>
                    <li>improve error message codes</li>
                    <li>a contact page with a form where you can leave your details</li>
                    <li>clean up assets folder</li>
                    <li>clean up server redundant images</li>
                    <li>remove the ability for users to buy their own products</li>
                    <li>improve schema for the users on the backend</li>
                    <li>improve fetching when params not available yet</li>
                    <li>refactor axios fetches to be more lean</li>
                    <li>better responsive design for tablets</li>
                    <li>image cropper when user adding images</li>
                    <li>clean up profile page code to be leaner</li>
                    <li>clear all pages when the user logs out</li>
                    <li>make the profile display more scaleable for large amounts of items</li>
                    <li>fix page loading order - when profile page loads up it shows error first</li>
                    <li>profile page - fix some errors where axios fetching unused data and return error</li>
                    <li>add links to order items to redirect to product page</li>
                    <li>fix order date</li>
                    <li>improve orders accordion</li>
                    <li>shooper page is showing all options when logged out automatically</li>
                    <li>give ability to add amount of items for vendors</li>
                    <li>cart page - more scaleable for all phones</li>
                    <li>improve ui for ordered items</li>
                    <li>add logic in backend when item deleted</li>
                    <li>test behavior when more items are added to cart and orders</li>
                    <li>set orientation to be only vertical</li>
                    <li>Add ability to edit products (currently only editing API exists in the backend)</li>
                    <li>A Personality Quiz</li>
                </ul>
            </ul>
        </Card.Body>
        </Accordion.Collapse>
    </Card>

    <Card className="card-accordian">
        <Accordion.Toggle as={Card.Header} eventKey="4">
        <strong>Changelog</strong>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="4">
        <Card.Body>
        <h6><strong>Changelogs/Updates</strong></h6>
            <ul>
                <li><strong>Changelog 16/2/2019</strong></li>
                <ul>
                    <li>Major Changes to UI</li>
                    <li>Images now hosted on AWS S3 so image will persist</li>  
                </ul>

                <li><strong>Changelog 18/2/2019</strong></li>
                <ul>
                    <li>Fixed bugs on signup page (user being able to signup with same email)</li>
                    <li>Fixed bugs on error modal</li>
                    <li>Added ability for users to update their username and email</li>  
                </ul>
            </ul>
        </Card.Body>
        </Accordion.Collapse>
    </Card>

    <Card className="card-accordian">
        <Accordion.Toggle as={Card.Header} eventKey="5">
        <strong>About Me</strong>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="5">
        <Card.Body>
        <h6><strong>My name is Kimmi</strong></h6>
        <h6><i>"I was once in a pit of despair, until I learned to code" - Kimmi</i></h6>
            <ul>
                <li>Self-Taught Developer</li>
                <li>Friendly</li>
                <li>Hardworking</li>
                <li>Adaptive</li>
                <li>Eager to learn</li>
            </ul>
        <p>I spend the last 4 months learning Javascript and React JS. When my precious company decided to cut costs and move to india, I had thought that was it, I didn't know what to do with my life anymore. I had little left to lose and it just felt like a pit of despair that I was not going to get out of.</p>
        <p>I had always loved designing web pages as I have made a few as part of my freelancing project. Though it was never in code format. I had always used either Wix or Wordpress. This is my first attempt at making a fully functional dynamic webpage with Javascript with the MERN stack</p>
        <p>I will begin by saying, coding is definitely not easy. There were time I just wanted to give up and throw in the towel and there were times where it got so frustrating because I could not make something work even if it looks exactly the same as the official documentation. A lot of preserverence and passion is needed to keep on going. It took me about 2 grueling months to finally grasp the fundamentals of Javascript and to get used to it, and later on I started picking up the MERN stack</p>
        <p>The reason why I picked up this stack first was simply because, essentially, from frontend to backend I would only need to use Javascript. No other language would be needed. React also remains to be on the top of the list for developers when picking a framework which was why I decided to adopt it.</p>
        <p>I am a hands on learner, which means that I will learn as I do. The more I do the more I learned so I jumped straight into the frameworks after learning Javascript. This was a painful process for me but I knew that this was also the most effective way for me to learn. I made so much mistakes - from silly typos which took me 2 days to debug to functions simply not working because I had not realised that the state of the components were not setup properly. I overcame each challenge with a strong strong sense of purpose and dedication, and eventually learned to write programs better and to be a lot more meticulous with my work. All the mistakes and heartache was not in vain because at the end of it, <strong>I Learned</strong>, and that is what was most important to me.</p>
        <p>This page was developed in a span of about 2 months, if you are interested in having a page of your own, do contact me at kimimaula@gmail.com. I am also currently looking out for positions so if you have any positions, please also do reach out to me. Click here to leave a message or email me at kimimaula@gmail.com</p>
        </Card.Body>
        </Accordion.Collapse>
    </Card>
    <Card className="card-accordian">
        <Accordion.Toggle as={Card.Header} eventKey="6">
        <strong>How to use this website?</strong>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="6">
        <Card.Body>
        <h6><strong>Shopper</strong></h6>
        <p>You can jump right in by signing up. The reason that you need to sign up and log in is that certain features will only appear once you have logged in. Check it out. Click on Shopper without logging in and you will only see the current products on sale. If you click on an item, you will not have the ability to add items to cart</p>
        <p>After logging in though, you will see more features unlocked such as opening up your dashboard to check your profile, adding a new product, adding products to cart and checking your orders</p>
        <p>If you don't want to sign up, you can just log in with the details:</p>
        <p>Email : test12345@test.com <br/>Password: test12345</p>
        </Card.Body>
        </Accordion.Collapse>
    </Card>

    <Card className="card-accordian">
        <Accordion.Toggle as={Card.Header} eventKey="7">
        <strong>TL : DR </strong>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="7">
        <Card.Body>
        <p> - A Demo page - click on shopper to get started</p>
        <p> - Looking out for opportunities</p>
        <p> - Page is new and experimental</p>
        <p> - Few bug fixes and features to come soon</p>
        </Card.Body>
        </Accordion.Collapse>
    </Card>

    </Accordion>
    )  
}

export default HomePageAccordion;