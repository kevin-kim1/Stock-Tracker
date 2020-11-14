loadingChart();
function loadingChart() {
    new TradingView.widget({
      autosize: true,
      symbol: "NASDAQ:AAPL",
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

// class Chart {
//   constructor(chartSymbol) {
//     this.chartSymbol = chartSymbol;
//   }
//   updateChart(chart) {
//      new TradingView.widget({
//        width: 980,
//        height: 610,
//        symbol: "NASDAQ:" + chart[0].symbol,
//        interval: "D",
//        timezone: "Etc/UTC",
//        theme: "light",
//        style: "1",
//        locale: "in",
//        toolbar_bg: "#f1f3f6",
//        enable_publishing: false,
//        allow_symbol_change: true,
//        container_id: "tvchart",
//      });
//   }
//   start() {
//     this.updateChart();
//   }
// }
