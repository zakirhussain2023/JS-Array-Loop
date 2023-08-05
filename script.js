//1.Array increment and multiply
console.log("1.Array increment and multiply")
let f=[10,20,30,40,50];
for(let i=0;i<f.length;i++){
    console.log((f[i]+2)*3);
}

//2.Print Array Reverse Order
console.log("2.Print Array Reverse Order")
let a=[10,20,30,40];
for(let i=(a.length-1);i>=0;i--){
   console.log(a[i])
   
}
//3.Two array concat and print reverse
console.log("3.Two array concat and print reverse")
let c=[10,20,30,40,];
let d=[50,60,70,80];

let e=c.concat(d);

for(let i=e.length-1;i>=0;i--){
    console.log(e[i])
}