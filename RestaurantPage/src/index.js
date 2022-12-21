import "./style.css";

//needs fixing (11/23/22) - import images from directory/folder
function importAll(r) {
    r.keys().forEach(r)
  }
  
  importAll(require.context('./images/', true, /\.jpg\.svg\.png$/));
  

console.log("Roq Out Ramen");

function component() {
    //const element = document.createElement('div');

    //element.innerHTML = "Hello";

    //return element;

    //add html files into after completing html templates
}

document.body.appendChild(component());