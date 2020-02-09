import React from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

const HomePageAccordion = () => {

    return(
        <Accordion>
    <Card className="card-accordian">
        <Accordion.Toggle as={Card.Header} eventKey="0">
        <strong>Website Features</strong>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
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
                </ul>
        </Card.Body>
        </Accordion.Collapse>
    </Card>
    <Card className="card-accordian">
        <Accordion.Toggle as={Card.Header} eventKey="1">
        <strong>What was it built with?</strong>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
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
                    <li>Mongoose</li>
                    <li>Multer</li>
                    <li>BCrypt</li>
                    <li>jsonwebtoken</li>
                    <li>connect-busboy</li>
                    <li>express-formidable</li>
                </ul>
        </Card.Body>
        </Accordion.Collapse>
    </Card>
    <Card className="card-accordian">
        <Accordion.Toggle as={Card.Header} eventKey="2">
        <strong>More Features Coming Soon!</strong>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2">
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
        <Accordion.Toggle as={Card.Header} eventKey="3">
        <strong>About Me</strong>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="3">
        <Card.Body>
        <h6><strong>My name is Kimmi</strong></h6>
        <h6><i>"I was once in a pit of despair, until I learned to code" - Kimmi</i></h6>
            <ul>
                <li>Self-Taught Developer</li>
                <li>Friendly</li>
                <li>Hardworking</li>
                <li>Eager to learn</li>
            </ul>
        <p>I spend the last 4 months learning Javascript and React JS. When my precious company decided to cut costs and move to india, I had thought that was it, I didn't know what to do with my life anymore. I had little left to lose and it just felt like a pit of despair that I was not going to get out of.</p>
        <p>I had always loved designing web pages as I have made a few as part of my freelancing project. Though it was never in code format. I had always used either Wix or Wordpress. A special thanks to my friend Desiree, who had always supported me throughout this experience and who also started me down this path by convincing me that I could turn a passion into a career.  This is my first attempt at making a fully functional dynamic webpage with Javascript with the MERN stack</p>
        <p>I will begin by saying, coding is definitely not easy. There were time I just wanted to give up and throw in the towel and there were times where it got so frustrating because I could not make something work even if it looks exactly the same as the official documentation. A lot of preserverence and passion is needed to keep on going. It took me about 2 grueling months to finally grasp the fundamentals of Javascript and to get used to it, and later on I started picking up the MERN stack</p>
        <p>The reason why I picked up this stack first was simply because, essentially, from frontend to backend I would only need to use Javascript. No other language would be needed. React also remains to be on the top of the list for developers when picking a framework which was why I decided to adopt it.</p>
        <p>I am a hands on learner, which means that I will learn as I do. The more I do the more I learned so I jumped straight into the frameworks after learning Javascript. This was a painful process for me but I knew that this was also the most effective way for me to learn. I made so much mistakes - from silly typos which took me 2 days to debug to functions simply not working because I had not realised that the state of the components were not setup properly. I overcame each challenge with a strong strong sense of purpose and dedication, and eventually learned to write programs better and to be a lot more meticulous with my work. All the mistakes and heartache was not in vain because at the end of it, <strong>I Learned</strong>, and that is what was most important to me.</p>
        <p>This page was developed in a span of about 2 months, if you are interested in having a page of your own, do contact me at kimimaula@gmail.com. I am also currently looking out for positions so if you have any positions, please also do reach out to me. Click here to leave a message or email me at kimimaula@gmail.com</p>
        </Card.Body>
        </Accordion.Collapse>
    </Card>
    <Card className="card-accordian">
        <Accordion.Toggle as={Card.Header} eventKey="4">
        <strong>How to use this website?</strong>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="4">
        <Card.Body>
        <h6><strong>Shopper</strong></h6>
        <p>You can jump right in by signing up. The reason that you need to sign up and log in is that certain features will only appear once you have logged in. Check it out. Click on Shopper without logging in and you will only see the current products on sale. If you click on an item, you will not have the ability to add items to cart</p>
        <p>After logging in though, you will see more features unlocked such as opening up your dashboard to check your profile, adding a new product, adding products to cart and checking your orders</p>
        <p>If you don't want to sign up, you can just log in with the details:</p>
        <p>Email : test12345@test.com <br/>Password: test12345</p>
        </Card.Body>
        </Accordion.Collapse>
    </Card>
    </Accordion>
    )  
}

export default HomePageAccordion;