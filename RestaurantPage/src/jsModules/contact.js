export function contactPage() {
    content.textContent = '';
    
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

    return content
};