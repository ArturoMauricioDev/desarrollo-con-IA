const CHATGPT_LAUNCH = new Date("2022-11-30T00:00:00");

const MILESTONES = [];

function updateCounter() {
  const now = new Date();
  const diff = now - CHATGPT_LAUNCH;
  const dias = Math.floor(diff / 86400000);
  const horas = Math.floor((diff % 86400000) / 3600000);
  const minutos = Math.floor((diff % 3600000) / 60000);
  const segundos = Math.floor((diff % 60000) / 1000);

  document.getElementById("counter-days").textContent = dias;
  document.getElementById("counter-detail").textContent =
    `${String(horas).padStart(2, "0")} h : ${String(minutos).padStart(2, "0")} m : ${String(segundos).padStart(2, "0")} s`;
}

updateCounter();
setInterval(updateCounter, 1000);
