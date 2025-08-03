function strstr(haystack,needle){
    if(needle.length === 0) return 0;
    for(let i =0;i<haystack.length; i++){
        if(haystack.substring(i,i+needle.length) === needle){
            return i;
        }
    }
    return -1;
}
console.log(strstr("hello","ll"));

function strstr1(haystack,needle){
    if(needle.length === 0) return 0;
    for(let i =0;i<haystack.length; i++){
       if(haystack[i] === needle[0]){
        for(let j =0;j<needle.length;j++){
            if(haystack[i+j] !== needle[j]){
            }
        }
        return i;
       }
    }
    return -1;
}
console.log(strstr1("mississippi","issip"));