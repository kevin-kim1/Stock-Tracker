loadNews();
function loadNews() {
  fetch('https://finnhub.io/api/v1/company-news?symbol=PLTR&from=2020-12-19&to=2020-12-19&token=btp4fp748v6pbh1ev3a0')
    .then(res => res.json())
    .then(data => console.log(data));
}
