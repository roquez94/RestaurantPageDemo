export function contactPage() {
   
    //change up to match contact theme
    
  //create contact-content div container & contents
      //Menu page heading
      const contactpageContent = document.createElement('div');
      const heading = document.createElement('div');
        heading.innerHTML = "<h1>Contact Us</h1>";
      contactpageContent.appendChild(heading);
  
        //Menu contents
      const ramenInner1 = document.createElement('div');
      ramenInner1.innerHTML = "<h2>Papi San</h2><p>Chef</p><p>555-555-5554</p><p>totallyRealEmail@notFake.com</p>";
      ramenInner1.className = "ramen-outer";
      contactpageContent.appendChild(ramenInner1);
  
      const ramenInner2 = document.createElement('div');
      ramenInner2.innerHTML = '<h2>Madre Pa</h2> <p>Bar Tender</p><p>555-555-5555</p><p>ReallyRealEmail@notFake.com</p>';
      ramenInner2.className = "ramen-outer";
      contactpageContent.appendChild(ramenInner2);
  
      const ramenInner3 = document.createElement('div');
      ramenInner3.innerHTML = "<h2>Young Sinatra</h2><p>Head Server</p><p>555-555-5552</p><p>UltraRealEmail@notFake.com</p>";
      ramenInner3.className = "ramen-outer";
      contactpageContent.appendChild(ramenInner3);
  
      const ramenInner4 = document.createElement('div');
      ramenInner4.innerHTML = "<h2>Mr. Manager</h2> <p>Co-Manager</p><p>555-555-5557</p><p>SimplyRealEmail@notFake.com</p>";
      ramenInner4.className = "ramen-outer";
      contactpageContent.appendChild(ramenInner4);
  
    //removes last pages content, home, menu, etc.
    content.removeChild(content.lastChild);
    //adds new page to content div
    content.appendChild(contactpageContent);

    return content
};