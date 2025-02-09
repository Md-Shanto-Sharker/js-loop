// অ্যারে থেকে শুধুমাত্র নম্বর (number) প্রিন্ট করা

const numbers=["hello", 5, 8, "world", true, 12, "JS"];
for(const num of numbers){
    if(typeof num === "number"){
        console.log(num);
    }
}