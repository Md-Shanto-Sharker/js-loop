// শুধুমাত্র ট্রুথি (Truthy) ভ্যালুগুলো প্রিন্ট করা

const array=[0, "Hi", "", undefined, null, "JavaScript", false, 42];


for (const a of array){
    if(a){
        console.log(a);
    }
}
