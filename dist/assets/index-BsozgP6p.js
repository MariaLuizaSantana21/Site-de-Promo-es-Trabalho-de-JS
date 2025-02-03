(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const n=[{id:1,title:"Café com Leite",imagem:"img1.jpg",description:"",atualprice:"R$ 8,00",price:"R$ 10,00"},{id:2,title:"Chocolate Quente Tradicional",imagem:"img2.jpg",description:"",atualprice:"R$ 10,00",price:"R$ 15,00"},{id:3,title:"Brownie com sorvete de creme",imagem:"img3.jpg",description:"",atualprice:"R$ 12,00",price:"R$ 20,00"},{id:4,title:"Sanduiche Misto",imagem:"img4.png",description:"",atualprice:"R$ 5,00",price:"R$ 8,00"},{id:5,title:"Petit Gâteau com sorvete de creme",imagem:"img5.jpg",description:"",atualprice:"R$ 15,00",price:"R$ 25,00"},{id:6,title:"Croissants Tradicional",imagem:"img6.jpg",description:"",atualprice:"R$ 12,00",price:"R$ 16,00"}];let s=document.querySelector(".list");function p(){n.forEach((c,t)=>{let i=document.createElement("div");i.classList.add("item"),i.innerHTML=`
            <img src="./src/img${c.imagem}" 
            <div class="title">${c.title}</div>
            <div class="atualprice">${c.atualprice.toLocaleString()}</div>
            <div class="price">${c.price.toLocaleString()}</div>
            `,s.appendChild(i)})}p();const l=document.getElementById("pesquisa");function d(c){s.innerHTML="",c.forEach(t=>{const i=document.createElement("div");i.classList.add("item"),i.innerHTML=`
            <img src="./src/img/${t.imagem}" 
            <div class="title">${t.title}</div>
            <div class="atualprice">${t.atualprice.toLocaleString()}</div>
            <div class="price">${t.price.toLocaleString()}</div>
            `,s.appendChild(i)})}function m(){const c=l.value.toLowerCase(),t=n.filter(i=>i.title.toLowerCase().includes(c)||i.atualprice.toLowerCase().includes(c));d(t)}d(n);l.addEventListener("input",m);
