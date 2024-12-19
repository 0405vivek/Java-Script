console.log("03 Gross salary");

let basicSalary = 10000 ,hra, da , grossSalary;

if( basicSalary>0 && basicSalary >= 5000){
    hra = 0.08 * basicSalary;
    da = 0.2 * basicSalary;
    grossSalary = basicSalary + hra + da ;
    console.log("Gross Salary is : " + grossSalary);
}
else if(basicSalary>5000 && basicSalary >= 10000){
    hra = 0.12 * basicSalary;
    da = 0.3 * basicSalary;
    grossSalary = basicSalary + hra + da ;
    console.log("Gross Salary is : " + grossSalary);
}
else if(basicSalary>10000 && basicSalary >= 15000){
    hra = 0.15 * basicSalary;
    da = 0.4 * basicSalary;
    grossSalary = basicSalary + hra + da ;
    console.log("Gross Salary is : " + grossSalary);
}
else if(basicSalary>15000){
    hra = 0.2 * basicSalary;
    da = 0.5 * basicSalary;
    grossSalary = basicSalary + hra + da ;
    console.log("Gross Salary is : " + grossSalary);
}






