
for(let i=1;i<=5;i++){
    let str="";
    for(let j=1;j<=i;j++){
        str=str+ j +"";
    }
    console.log(str);
}

console.log("******************");

for(let i=1;i<=5;i++){
    let str="";
    for(let j=1;j<=i;j++){
        str=str+ i +" ";
    }
    console.log(str);
}

console.log("******************");

{
    let n = 5;
    for (let i = 1; i <= n; i++) {
        let str = " +";
        let space  = '  ';
        // console.log(space.repeat((n-i))+str.repeat(i));
        console.log(space.repeat((n-i))+str.repeat(i));
    }


}

console.log("******************");

{
    let i ,j ,k=1;

    for(i=1;i<=5;i++){

        let data = " ";
        for(j=1;j<=i;j++){
            data = data+k+" ";
            k++;
             
        }
        console.log(data);
    }
}

console.log("******************");

{
    let i ,j ,k=1;

    for(i=1;i<=5;i++){

        let data = " ";
        for(j=i;j<=5;j++){
            data = data+j+" ";
            // k++;
          
        }
        console.log(data);
    }
}

console.log("******************");


