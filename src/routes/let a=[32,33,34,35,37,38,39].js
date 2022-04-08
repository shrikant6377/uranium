let a=[32,33,34,35,37,38,39]
var w=0
for(let i=a[0];i<=a[a.length-1];i++){
    w=w+i
}
var x=0
for(let j=0;j<a.length;j++){
    x=x+a[j]
}
let m=w-x
console.log(m)