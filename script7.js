/* script.js */
const toggle = document.getElementById('toggleTheme');
const inc = document.getElementById('increase');
const dec = document.getElementById('decrease');

// theme toggle
toggle.addEventListener('click', ()=>{
  document.body.classList.toggle('dark');
});

// font size control
function changeFont(delta){
  document.querySelectorAll('.stotra').forEach(el=>{
    const style = window.getComputedStyle(el).fontSize;
    const current = parseFloat(style);
    el.style.fontSize = (current + delta) + 'px';
  });
}
inc.addEventListener('click', ()=>changeFont(2));
dec.addEventListener('click', ()=>changeFont(-2));