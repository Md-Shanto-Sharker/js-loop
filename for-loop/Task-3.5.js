/***
Subtask-2:
Display sum of all the even numbers from 51 to 85.
 */
let sum = 0;
for(let i = 51;i<=85;i++){
    if(i%2===0){
        sum=sum+i;
    }
}
console.log(sum);