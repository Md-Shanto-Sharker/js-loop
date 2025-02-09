// শুধুমাত্র জোড় সংখ্যাগুলোর সমষ্টি বের করো

const numbers = [3, 8, 12, 5, 7, 10, 15, 18];
let sum = 0;
for (let a of numbers){
    if(a%2===0){
        sum = sum + a
    }
    
}
console.log(sum);