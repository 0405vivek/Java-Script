
function Hello(h1,h2){
    console.log("hello........");
    setTimeout(h2,2000) 
}
function Hello2(){
    console.log("hello2........");
    
    
}
function Hello3(){
    console.log("hello3........");
    
}

function Test(name,h,h1,h2){
    console.log("hello........",name);
    setTimeout(h,1000)    
}

Test("Vivek",Hello,Hello2,Hello3)