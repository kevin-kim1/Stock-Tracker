// loadingChart();
function loadingChart() {
  const inputText = document.getElementById("chart-symbol-text");
  document.getElementById("chart-symbol-button").addEventListener("click", () => {
    const symbol = inputText.value;
    const screenWidth = screen.height;
    const nav = document.getElementById('nav')
    const header = document.getElementById('header');
    const form = document.getElementById('form');
    const navWidth = nav.offsetHeight;
    const headerWidth = header.offsetHeight;
    const formWidth = form.offsetHeight;
    const responsiveWidth = screenWidth - (navWidth + headerWidth + formWidth);
    const respWidthStr = responsiveWidth.toString();
    document.getElementById('tvchart').style.height = respWidthStr + "px";
      let chart = new TradingView.widget(
                {
                "container_id": "tvchart",
                "autosize": true,
                "symbol": symbol,
                "interval": "D",
                "timezone": "exchange",
                "theme": "light",
                "style": "1",
                "toolbar_bg": "#f1f3f6",
                "withdateranges": true,
                "hide_side_toolbar": false,
                "allow_symbol_change": true,
                "save_image": false,
                "studies": [
                  "MACD@tv-basicstudies",
                  "RSI@tv-basicstudies",
                  "MASimple@tv-basicstudies"
                ],
                "show_popup_button": true,
                "popup_width": "1000",
                "popup_height": "650",
                "locale": "in"
              }
      );
    })
}
loadingChart();




// <!-- TradingView Widget BEGIN -->
//   <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
//   new TradingView.widget(
//   {
//   "container_id": "technical-analysis",
//   "width": 998,
//   "height": 610,
//   "symbol": "AAPL",
//   "interval": "D",
//   "timezone": "exchange",
//   "theme": "light",
//   "style": "1",
//   "toolbar_bg": "#f1f3f6",
//   "withdateranges": true,
//   "hide_side_toolbar": false,
//   "allow_symbol_change": true,
//   "save_image": false,
//   "studies": [
//     "ROC@tv-basicstudies",
//     "StochasticRSI@tv-basicstudies",
//     "MASimple@tv-basicstudies"
//   ],
//   "show_popup_button": true,
//   "popup_width": "1000",
//   "popup_height": "650",
//   "locale": "in"
// }
//   );
//   </script>
// </div>
// <!-- TradingView Widget END -->
