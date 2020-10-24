class App {
  constructor(stockTable) {
    this.stockTable = stockTable;
    this.handleGetStockSuccess = this.handleGetStockSuccess.bind(this);
    this.handleGetStockError = this.handleGetStockError.bind(this);
  }

  handleGetStockSuccess(stock) {
    this.stockTable.updateStock1(stock);
  }
  handleGetStockError(error) {
    console.error(error);
  }

  getStock() {
    // Make Modal for instructions
    let symbolText = document.getElementById("symbol-text");
    document.getElementById("symbol-button").addEventListener("click", () => {
      let symbol = symbolText.value.split(', ');
      for (let i = 0; i < symbol.length; i++) {
          let req1 = fetch(
            "https://finnhub.io/api/v1/quote?symbol=" + symbol[i] + "&token=btp4fp748v6pbh1ev3a0"
          );
          let req2 = fetch(
            "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-profile?symbol=" + symbol[i],
            {
              headers: {
                "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
                "x-rapidapi-key":
                  "2f30e7d715msha980bdcc640e4bap160df7jsnd31b09791699",
              },
            }
          );

          Promise.all([req1, req2])
            .then((responses) => {
              return Promise.all(responses.map((res) => res.json()));
            })
            .then((data) => {
              this.handleGetStockSuccess(data);
            });
      }
      document.getElementById("symbol-button").setAttribute("disabled", "");
      setTimeout(function () {
        document.getElementById("symbol-button").removeAttribute("disabled");
      }, 3000);
    });
  }
  start() {
    this.getStock();
  }
}
