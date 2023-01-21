import { menuPage } from "./menuPage";
import { contactPage } from "./contactPage";
import { homePage } from "./homePage";

export function firstload() {

   let content = document.createElement('div');
    content.id = "content";
    
    //home page content
    //create header
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    //onClick links here after DOM content has loaded
    const homeLi = document.createElement('li');
      homeLi.innerHTML = "Home";
      homeLi.id="home";

    const menuLi = document.createElement('li');
      menuLi.innerHTML = "Menu";
      menuLi.id = "menu";

    const contactLi = document.createElement('li');
      contactLi.innerHTML = "Contact";
      contactLi.id="contact";

      
    ul.className = "tab-list";
    ul.appendChild(homeLi);
    ul.appendChild(menuLi);
    ul.appendChild(contactLi);

    nav.appendChild(ul);
    header.appendChild(nav);
    content.appendChild(header);

    document.addEventListener('DOMContentLoaded', function () {
      menuLi.addEventListener('click', menuPage, false);
    });

    document.addEventListener('DOMContentLoaded', function () {
      contactLi.addEventListener('click', contactPage, false);
    });

      document.addEventListener('DOMContentLoaded', function() {
      homeLi.addEventListener('click', homePage, false);
    });

      //create initial-Home-page-content div container & contents
      //Main page heading
      const pageContent = document.createElement('div');
      pageContent.id = "pageContent";
      const heading = document.createElement('div');
        heading.innerHTML = "<h1>Roq's Rum & Ramen</h1>";
      pageContent.appendChild(heading);
  
        //Main contents
      const ramenInner1 = document.createElement('div');
      ramenInner1.innerHTML = "<p>Roq's has the best Ramen! The seating, presentation, and customer service are super! I eat ramen daily and this is my favorite spot and best in the world. Believe it!</p><p>Naruto</p>";
      ramenInner1.className = "ramen-outer";
      pageContent.appendChild(ramenInner1);
  
      const ramenInner2 = document.createElement('div');
      ramenInner2.innerHTML = '<h2>Hours</h2><p>Sunday: 12pm - 8pm</p><p>Monday: 10:30am - 9pm</p><p>Tuesday: 10:30am - 9pm</p><p>Wensday: 10:30am - 9pm</p><p>Thursday: 10:30am - 9pm</p><p>Friday: 10:30am - 11pm (Karoake Night!)</p><p>Saturday: 10:30am - 11pm (Dance Hall)</p><h3>Happy Hour 3pm - 6pm everyday!</h3> ';
      ramenInner2.className = "ramen-outer";
      pageContent.appendChild(ramenInner2);
  
      const ramenInner3 = document.createElement('div');
      ramenInner3.innerHTML = "<h3>Location</h3><h2>678 Main St, Greenville, America";
      ramenInner3.className = "ramen-outer";
      pageContent.appendChild(ramenInner3);
  
     
      content.appendChild(pageContent);
    
    return content;
}