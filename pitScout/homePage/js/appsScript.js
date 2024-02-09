/*
const sheets = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/15UFKTD1KegE9WYtVfG3TSJWM6UskqyxDziANYmAP0pg/edit?usp=sharing");
const sheet = sheets.getSheetByName("hoja1");

const doPost = (e) => {
  
  let data = e.parameter;

  // Extract data from the form
  let teamName = data.teamNameInput;
  let numeroEquipo = data.numero_equipo;
  let progInput = data.progInput;
  let tipoDeChasis = data.tipoDeChasis;
  let tipoDeLlanta = data.tipoDeLlanta;
  let imagenesEquipo = data.imagenes_equipo;

  // Add data to the sheet
  sheet.appendRow([teamName, numeroEquipo, progInput, tipoDeChasis, tipoDeLlanta, imagenesEquipo]);

  return ContentService.createTextOutput("Se logro");
};

*/