// অ্যারে থেকে শুধুমাত্র বুলিয়ান (true/false) প্রিন্ট করা

const array = [true, "text", false, 10, "hello", true, 0];
for (const a of array){
    if(typeof a ==='boolean'){
        console.log(a);
    }
}