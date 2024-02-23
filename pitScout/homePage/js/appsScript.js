/*
const sheets = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/15UFKTD1KegE9WYtVfG3TSJWM6UskqyxDziANYmAP0pg/edit?usp=sharing");
const sheet = sheets.getSheetByName("hoja1");

const valuesAray = [];

const doPost = (e) => {

  var jsonString = e.postData.contents;
  var jsonData = JSON.parse(jsonString);

  // Append data to Google Sheet
  var objectArray = Object.values(jsonData);
  sheet.appendRow(objectArray)
 
  return ContentService.createTextOutput("Se logro");
};


*/