/*
const sheets = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1Wp_QgUnH_PtpC1e8yE43PAC7R7JhB9BoxLQdgCa9bcI/edit?usp=sharing");
const otherSheets = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1oiC8HWQLwiBp9W1koaDpsg1ynXAcVvpQB0GdGoJAYLY/edit?usp=sharing");

const valuesAray = [];

const doPost = (e) => {


  var jsonString = e.postData.contents;
  var jsonData = JSON.parse(jsonString);

  var teamNumber = jsonData.numero_equipo;
  const sheet = sheets.getSheetByName(teamNumber);
  const otherSheet = otherSheets.getSheetByName(teamNumber);

  // Append data to Google Sheet
  var objectArray = Object.values(jsonData);
  sheet.appendRow(objectArray)
  otherSheet.appendRow(objectArray)
 
  return ContentService.createTextOutput("Se logro");
};


*/