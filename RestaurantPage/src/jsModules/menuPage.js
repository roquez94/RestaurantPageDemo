export function menuPage() {

//use replaceChild instead of removing? [1/17/23]
  content.replaceChild(pageContent,menuPageContent)
   
    //home page content
    //create header
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    //onClick links here
    const homeLi = document.createElement('li');
      homeLi.innerHTML = "Home";
      homeLi.id="home";
    const menuLi = document.createElement('li');
      menuLi.innerHTML = "Menu";
      menuLi.id="menu";
      document.getElementById("menu").onclick = menuPage();
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

    //create page-content div container & contents
      //Menu page heading
    const menupageContent = document.createElement('div');
    const heading = document.createElement('div');
      heading.innerHTML = "<h1>Menu</h1>";
    menupageContent.appendChild(heading);

      //Menu contents
    const ramenInner1 = document.createElement('div');
    ramenInner1.innerHTML = "<h2>Beverages</h2>";
    ramenInner1.className = "ramen-outer";
    menupageContent.appendChild(ramenInner1);

    const ramenInner2 = document.createElement('div');
    ramenInner2.innerHTML = '<h3>Rum</h3> <p>Quality Rum from all over the globe that pairs well with all of our unique entrees</p> <h3>$10</h3>';
    ramenInner2.className = "ramen-outer";
    menupageContent.appendChild(ramenInner2);

    const ramenInner3 = document.createElement('div');
    ramenInner3.innerHTML = "<h2>Sides</h2>";
    ramenInner3.className = "ramen-outer";
    menupageContent.appendChild(ramenInner3);

    const ramenInner4 = document.createElement('div');
    ramenInner4.innerHTML = "<h3>Gyoza dumplings</h3> <p>Asian dumplings filled with a mixture of minced pork, chicken, or prawns, and various different crunchy vegetables. They offer lots in the way of traditional, authentic flavours, and its always great fun to get stuck in with your fingers. Chopsticks arent required here!</p> <h3>$8</h3>";
    ramenInner4.className = "ramen-outer";
    menupageContent.appendChild(ramenInner4);

    content.appendChild(menupageContent);


    return content
};