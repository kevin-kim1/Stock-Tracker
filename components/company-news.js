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
        const pstTimeStamp = new Date(data[0].datetime * 1000);
        document.getElementById('headline').textContent = data[0].headline;
        document.getElementById('date').textContent = pstTimeStamp;
        document.getElementById('image').setAttribute("src", data[0].image);
        document.getElementById('summary').textContent = data[0].summary;
        document.getElementById('source').textContent = "By " + data[0].source;
        document.getElementById('link').setAttribute("href", data[0].url);
        document.getElementById('link').textContent = "Click for full article";
      });
  })
}
loadNews();
