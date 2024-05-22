import{S as d,i as o}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function m(a){return a.map(({webformatURL:r,largeImageURL:s,tags:i,likes:e,views:t,comments:l,downloads:u})=>`<li class="gallery-item">
	<a class="gallery-link" href="${s}">
		<img
            class="gallery-img"
            src="${r}"
            alt="${i}"
        />
        <ul class="gallery-descript">
        <li class="gallery-descript__item"><span class="gallery-descript__span">likes</span> ${e}</li>
        <li class="gallery-descript__item"><span class="gallery-descript__span">Views</span> ${t}</li>
        <li class="gallery-descript__item"><span class="gallery-descript__span">Coments</span> ${l}</li>
        <li class="gallery-descript__item"><span class="gallery-descript__span">Dowloads</span> ${u}</li>
     </ul>
	</a>
</li>`).join("")}function g(a){const r="44023612-008a3c81351fe07b08d2580bd",s="https://pixabay.com/api/",i=new URLSearchParams({key:r,q:a,image_typ:"photo",orientation:"horizontal",safesearch:!0,per_page:20});return fetch(`${s}?${i}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}const n=document.querySelector(".form"),c=document.querySelector(".gallery"),p=document.querySelector(".loader"),f=new d(".gallery a",{captionsData:"alt",captionDelay:250});n.addEventListener("submit",a=>{a.preventDefault(),c.innerHTML="";const r=a.target.elements.query.value.trim();r?(p.classList.remove("is-hidden"),g(r).then(s=>{s.hits.length||o.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});const i=m(s.hits);c.insertAdjacentHTML("afterbegin",i),p.classList.add("is-hidden"),f.refresh()}).catch(s=>console.log(s))):o.error({title:"Error",message:"The search field is empty. Please check your input!",position:"topRight"}),n.reset()});
//# sourceMappingURL=commonHelpers.js.map
