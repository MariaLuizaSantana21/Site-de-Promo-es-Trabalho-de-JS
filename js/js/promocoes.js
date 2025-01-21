let list = document.querySelector(".list");
import { produtos } from './produtos.js';


function initApp() {
  produtos.forEach((value, index) => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('item');
    newDiv.innerHTML = `
            <img src="/js/imag/${value.imagem}">
            <div class="title">${value.title}</div>
            <div class="price">${value.price.toLocaleString()}
            </div>`;
    list.appendChild(newDiv);
  })

}
initApp();

