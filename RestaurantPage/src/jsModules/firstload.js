export function firstload() {

   let content = document.createElement('div');
    content.id = "content";
    
    //create header
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const homeLi = document.createElement('li');
      homeLi.innerHTML = "Home";
    const menuLi = document.createElement('li');
      menuLi.innerHTML = "Menu";
    const contactLi = document.createElement('li');
      contactLi.innerHTML = "Contact";
      
    ul.className = "tab-list";
    ul.appendChild(homeLi);
    ul.appendChild(menuLi);
    ul.appendChild(contactLi);

    nav.appendChild(ul);
    header.appendChild(nav);
    content.appendChild(header);

    return content;
}

