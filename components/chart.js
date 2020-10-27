loadingChart();
function loadingChart() {
    let symbol = document.getElementById('pairs').value;
    new TradingView.widget({
      width: 980,
      height: 610,
      symbol: symbol,
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
}
