
function amort(rate, bal, term, num_payments) {
  let r = rate/100/12;
  //monthly payment
  let c = (r * bal / (1- Math.pow((1+r), -term)));
  
  function balanceFunction(num_payments){
    if(num_payments === 0){
      return bal;
    }
    if(num_payments > 0){
      let balanceForGivenMonth = Math.pow((1 + r), num_payments) * bal -(Math.pow((1 + r), num_payments) - 1) * Number(c) / r;
      return balanceForGivenMonth;
      }
  }
let balance = balanceFunction(num_payments);
let princ = balanceFunction(num_payments-1) - balance;

  
  function intFunction(){
   let i = c - princ;
   return ( i < 0 ?  -i : i);
 
  }
  return `num_payment ${num_payments} c ${c.toFixed(0)} princ ${princ.toFixed(0)} int ${intFunction().toFixed(0)} balance ${balance.toFixed(0)}`;
}
