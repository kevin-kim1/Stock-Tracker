function loadingChart() {
  let symbol = document.getElementById("chart-symbol-text");
  document.getElementById("chart-symbol-button").addEventListener("click", () => {
    let symbolArr = symbol.value.split(', ');
    for (let i = 0; i < symbolArr.length; i++) {
      let chartDiv = document.createElement("div");
      chartDiv.classList.add("tradingview-widget-container");
      let uniqueID = Math.floor(Math.random() * 100).toString().split('');
      uniqueID.shift('#');
      uniqueID = uniqueID.join('');
      let chart = new TradingView.widget({
        autosize: true,
        symbol: "NASDAQ:" + symbolArr[i],
        interval: "D",
        timezone: "Etc/UTC",
        theme: "light",
        style: "1",
        locale: "in",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        allow_symbol_change: true,
        container_id: "tvchart",
      });
      chartDiv.appendChild(chart);
      console.log(chartDiv);
      document.getElementById('tvchart').appendChild(chartDiv);
    }
  })
}

loadingChart();
