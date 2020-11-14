loadingChart();
function loadingChart() {
  let symbol = document.getElementById("chart-symbol-text");
  document.getElementById("chart-symbol-button").addEventListener("click", () => {
    console.log(symbol);
    new TradingView.widget({
      autosize: true,
      symbol: "NASDAQ:" + symbol.value,
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
  })
}
