 var b1 = `1000.00!=

125 Market !=:125.45
126 Hardware =34.95
127 Video! 7.45
128 Book :14.32
129 Gasoline ::16.10`
;
var b2=`1233.00
125 Hardware;! 24.8?;
123 Flowers 93.5
127 Meat 120.90
120 Picture 34.00
124 Gasoline 11.00
123 Photos;! 71.4?;
122 Picture 93.5
132 Tyres;! 19.00,?;
129 Stamps 13.6
129 Fruits{} 17.6
129 Market;! 128.00?;
121 Gasoline;! 13.6?;`

function balance(book) {
  const arr = book
  .replace(/[^a-z0-9\\.\n ]/gi,'')
  .split('\n')
  .filter(el => el != '');
  console.log(arr);
  const orgBalance = arr.shift() * 1;
  let str = `Original Balance: ${orgBalance.toFixed(2)}\r\n`;
  let total = 0;
  let balance = orgBalance;
  arr.forEach(r => {
    let row = r.split(' ')
    balance -= row[2];
    str += `${row[0]} ${row[1]} ${(row[2] * 1).toFixed(2)} Balance ${balance.toFixed(2)}\r\n`;
    total += row[2] * 1;
  });
  str += `Total expense  ${total.toFixed(2)}\r\n`;
  str += `Average expense  ${(total / arr.length).toFixed(2)}`;
  return str;
}
 console.log(balance(b2));
 