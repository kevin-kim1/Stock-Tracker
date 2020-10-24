class StockTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
  }
  updateStock1(stock) {
    console.log(length);
    var tableOfStocks = document.querySelector("tbody");
    var shortName = stock[1].price.shortName + " (" + stock[1].symbol + ")";
    var rmo = "$" + stock[0].o;
    var rmdh = "$" + stock[0].h;
    var row = document.createElement("tr");
    var stockName = document.createElement("td");
    var marketOpenPrice = document.createElement("td");
    var markeyDayHighPrice = document.createElement("td");
    var buttonData = document.createElement("td");
    var button = document.createElement("button");
    stockName.textContent = shortName;
    marketOpenPrice.textContent = rmo;
    markeyDayHighPrice.textContent = rmdh;
    var uniqueID = Math.floor(Math.random() * 100).toString();
    var idSelect = uniqueID.split('');
    idSelect.unshift('#');
    var idStr = idSelect.join('');
    console.log(idStr);
    button.setAttribute("id", uniqueID);
    button.textContent = "Send SMS";
    buttonData.appendChild(button);
    row.appendChild(stockName);
    row.appendChild(marketOpenPrice);
    row.appendChild(markeyDayHighPrice);
    row.appendChild(buttonData);
    row.classList.add('table-sm');
    tableOfStocks.appendChild(row);
    $(document).ready(function () {
      $(idStr).click(function () {
        var SID = "ACf53d9774ae285b301ea86ee1353866ae";
        var Key = "a7bba04a2b74232f4b7e20f8f22a284d";
        $.ajax({
          type: 'POST',
          username: SID,
          password: Key,
          url: 'https://api.twilio.com/2010-04-01/Accounts/' + SID + '/Messages.json',
          data: {
            "To": "+19096823456",
            "From": "+17144551405",
            "Body": shortName + "  Market Open Price: " + rmo + "  Market Day High Price: " + rmdh ,
          },
          beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa(SID + ':' + Key));
          },
          success: function (data) {
            console.log(data);
          },
          error: function (data) {
            console.log(data);
          }
        });
      });
    });
  }
}
