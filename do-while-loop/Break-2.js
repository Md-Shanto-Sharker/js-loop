/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

let sum = 0;
let n = 1;
while(n<=120){
    sum+=n;
    console.log(sum);
    if(sum>=100){
        break;
    }
    n++
}
