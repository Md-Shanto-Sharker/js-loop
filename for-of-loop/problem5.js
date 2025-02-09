// অ্যারে থেকে শুধুমাত্র স্ট্রিং গুলো প্রিন্ট করা

const mixArray =['apple',10, 'banana', true, 'cherry',20];
for(let a of mixArray){
    if(typeof a ==="string"){
        console.log(a);
    }
}
