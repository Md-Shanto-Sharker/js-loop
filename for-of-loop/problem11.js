// শুধুমাত্র প্রথম পাওয়া স্ট্রিংটি প্রিন্ট করো, এরপর লুপ বন্ধ করো

const mixArray=[100, true, "hello", "world", false, "JavaScript"];

for (const a of mixArray){
    if(typeof a==="string"){
        console.log(a);
        break;
    }
}