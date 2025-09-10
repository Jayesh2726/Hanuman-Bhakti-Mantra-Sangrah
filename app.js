function getParam(name){
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

(function initMantraPage(){
  const card = document.getElementById("mantraCard");
  if(!card) return;

  const id = getParam("id");
  const m = MANTRAS[id] || MANTRAS["hanuman-chalisa"];

  document.title = `${m.subtitle} • Hanuman Devotional`;
  document.getElementById("mantraTitle").textContent = m.title;
  document.getElementById("mantraSub").textContent   = m.subtitle;
  document.getElementById("mantraText").textContent  = m.text.trim();
})();
