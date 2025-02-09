// শুধুমাত্র স্ট্রিংগুলোর দৈর্ঘ্য প্রিন্ট করো

const array = ["apple", 100, "banana", true, "cherry", false, "grape"];

for (const a of array){
    if(typeof a==="string"){
        console.log(a.length);
    }
}