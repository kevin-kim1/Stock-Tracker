loadNews();
function loadNews() {
  const currentDate = new Date();
  const dd = String(currentDate.getDate()).padStart(2, '0');
  const mm = String(currentDate.getMonth() + 1).padStart(2, '0');
  const year = currentDate.getFullYear();
  const date = year + '-' + mm + '-' + dd;
  const newsData = fetch('https://finnhub.io/api/v1/company-news?symbol=AAPL&from=' + date +'&to='+ date +'&token=btp4fp748v6pbh1ev3a0')
    .then(res => res.json())
    .then(data => console.log(data));
  console.log(newsData);
}
