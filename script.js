// Accessible disclosure menu for small screens
const btn=document.getElementById('menu-btn'),nav=document.getElementById('nav'),scrim=document.getElementById('scrim');
const icon=btn.querySelector('i'),label=btn.querySelector('span');
function setMenu(open){
  nav.classList.toggle('open',open);scrim.classList.toggle('open',open);
  document.documentElement.classList.toggle('menu-open',open);
  btn.setAttribute('aria-expanded',open);
  icon.className=open?'fa-solid fa-xmark':'fa-solid fa-bars';
  label.textContent=open?'Close':'Menu';
}
btn.addEventListener('click',()=>setMenu(!nav.classList.contains('open')));
scrim.addEventListener('click',()=>setMenu(false));
nav.addEventListener('click',e=>{if(e.target.closest('a'))setMenu(false)});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){setMenu(false);btn.focus()}});
window.matchMedia('(min-width:901px)').addEventListener('change',e=>{if(e.matches)setMenu(false)});
