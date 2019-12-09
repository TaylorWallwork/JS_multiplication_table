/****************** 
Table Functions
*******************/

window.onload = () => {
  const submitNumbers = document.getElementById("submit-numbers");
  const resetTable = document.getElementById("reset-button");
  const tableWrap = document.getElementById("table");
  
  const rowMax = 6;
  const colMax = 6;

  // create a function that resets the table and attach it to the reset button
  const clearTable = () => {
    tableWrap.innerHTML = "";
  };
  const inputReset = () => {
    document.getElementById("input-row").value = "";
    document.getElementById("input-col").value = "";
  };
    
  // create the table and conditions for table values
  const createTable = (rowValues, colValues) => {
    if (rowValues < 0 || rowValues > rowMax || isNaN(rowValues)) {
      rowValues = rowMax;
    }

    if (colValues < 0 || colValues > colMax || isNaN(colValues)) {
      colValues = colMax;
    }
    // loop through the row values, insert a table row for each row value
    for (var r = 0; r < rowValues; r++) {
      var x = tableWrap.insertRow(r);
      // loop through the column values, insert column for each column value
      for (var c = 0; c < colValues; c++) {
        var y = x.insertCell(c);
        y.innerHTML = (c+1) + " X " + (r+1) + " = " + (c+1) * (r+1);
      }
    }
  };

  //Create function to execute table once the button is clicked 
  submitNumbers.addEventListener("click", () => {
    let rowValues = parseInt(document.getElementById("input-row").value);
    let colValues = parseInt(document.getElementById("input-col").value);
    
    clearTable();
    createTable(rowValues, colValues);
  });

  resetTable.addEventListener("click", () => {
    inputReset();
    clearTable();
  });
};
