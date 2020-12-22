function loadNews() {
  const currentDate = new Date();
  const dd = String(currentDate.getDate()).padStart(2, '0');
  const mm = String(currentDate.getMonth() + 1).padStart(2, '0');
  const year = currentDate.getFullYear();
  const date = year + '-' + mm + '-' + dd;
  document.getElementById('news-symbol-button').addEventListener('click', () => {
    const inputText = document.getElementById("news-symbol-text");
    const symbol = inputText.value;
    const newsData = fetch(
      "https://finnhub.io/api/v1/company-news?symbol="+ symbol +"&from=" +
        date +
        "&to=" +
        date +
        "&token=btp4fp748v6pbh1ev3a0"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // document.getElementById('headline').textContent = data[0].headline;
      });
    console.log(newsData);
    console.log(symbol);
  })
}
loadNews();
