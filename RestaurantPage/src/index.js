import "./style.css";
import './jsModules/firstload.js';
import { firstload } from "./jsModules/firstload.js";

//needs fixing (11/23/22) - import images from directory/folder
function importAll(r) {
    r.keys().forEach(r)
  }
  
  importAll(require.context('./images/', true, /\.jpg\.svg\.png$/));
  

console.log("Roq Out Ramen");

function component() {
    // const element = document.createElement('div');
    // element.innerHTML = "Hello";
    // return element;
    return firstload();

}

document.body.appendChild(component());