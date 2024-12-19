console.log("04 Tax calculation");

let amt=5500 , tax , totalTax;

if( amt>0 && amt<=2500){
    tax=0;
    totalTax=amt-tax;
    console.log("No tax");
}
else if(amt>2500 && amt<=5000){
    tax=0.1*amt;
    totalTax=amt-tax;
    console.log("10% tax" + totalTax);
}
else if(amt>5000 && amt<=10000){
    
    tax=0.2*amt;
    totalTax=amt-tax;
    console.log("20% tax" + totalTax);
}
else if( amt>10000){
    
    tax=0.3*amt;
    totalTax=amt-tax;
    console.log("30% tax" + totalTax);
}

