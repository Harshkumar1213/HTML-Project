const clock = document.querySelector(".clock");
const date = document.querySelector(".date");

clock.addEventListener("load", tick);

function tick() {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  const html = `TIME-<span>${h} :</span><span>${m} :</span><span>${s}</span>`;      
  clock.innerHTML = html;
  
  const d = now.getDate();
  const M = now.getMonth();
  const y = now.getFullYear();

  const D = `DATE-<span>${d} :</span><span>${M} :</span><span>${y}</span>`;
  date.innerHTML = D;
  
}

setInterval(tick, 1000);