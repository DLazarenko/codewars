function balance(book) {
  book = book.replace(/[^a-zA-Z0-9.\s]/g, '');
  let list = book.split("\n");
  let originalBalance = Number(list[0]);
  let result = "Original Balance: " + originalBalance.toFixed(2) + "\r\n";
  let totalExpense = 0;
  let iterations = 0;
  for(let i = 1; i < list.length; i++){
    if(list[i] !== ""){
       let expense = Number(list[i].match(/(\d+\.\d+)/)[0]);
       originalBalance = (originalBalance - expense);
       list[i] = list[i].replace(/(\d+\.\d+)/, expense.toFixed(2));
       result += list[i] + " Balance " + originalBalance.toFixed(2) + "\r\n";
       totalExpense += expense;
       iterations++;
    }
  }
  result = result + "Total expense  " + totalExpense.toFixed(2) + "\r\n" + "Average expense  " + (totalExpense/iterations).toFixed(2);
  return result;
}