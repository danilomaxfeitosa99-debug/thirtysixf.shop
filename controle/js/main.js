/* =========================================================
   Egészség Ma - pressel scripts
   ========================================================= */

/* --- 1. Cikk dátuma (automatikus, magyarul) --------------- */
(function () {
  var el = document.getElementById('articleDate');
  if (!el) return;
  var d = new Date();
  var months = ['JAN', 'FEB', 'MÁR', 'ÁPR', 'MÁJ', 'JÚN', 'JÚL', 'AUG', 'SZEP', 'OKT', 'NOV', 'DEC'];
  el.innerHTML = d.getFullYear() + '. ' + months[d.getMonth()] + ' ' + d.getDate() + '. <span class="chev">&#8964;</span>';
})();

/* --- 2. Figyelmeztetés dátuma (automatikus, magyarul) ----- */
(function () {
  var el = document.getElementById('vidwarnDate');
  if (!el) return;
  var d = new Date();
  var weekdays = ['vasárnap', 'hétfő', 'kedd', 'szerda', 'csütörtök', 'péntek', 'szombat'];
  var months = ['január', 'február', 'március', 'április', 'május', 'június', 'július', 'augusztus', 'szeptember', 'október', 'november', 'december'];
  el.textContent = d.getFullYear() + '. ' + months[d.getMonth()] + ' ' + d.getDate() + '., ' + weekdays[d.getDay()];
})();

/* --- 3. Back-redirect (desktop) --------------------------- */
/* Egy dummy history bejegyzést tol be, majd figyeli a vissza/előre
   navigációt (popstate). Ha aktiválódik, a felhasználót a lenti
   URL-re irányítja, ahelyett hogy elhagyná az oldalt. */
(function () {
  var BACKREDIRECT_URL = "https://google.com";
  var fired = false;

  history.pushState({ br: true }, "", location.href);

  window.addEventListener("popstate", function () {
    if (fired) return;
    fired = true;
    window.location.href = BACKREDIRECT_URL;
  });
})();
