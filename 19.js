function addBinary(a, b) {
    let result = '';
    let carry = 0;
    let i = a.length-1;
    let j = b.length -1;
    
    while(i>=0 || j >=0 || carry){
        let bitA = i>=0 ? Number(a[i]) : 0;
        let bitB = i>=0 ? Number(b[i]) : 0;
        let sum = bitA + bitB + carry;
        
        result = (sum % 2) + result;
        carry = Math.floor(sum/2)
        
        i--;
        j--;
    }
    return result;
  }


console.log(addBinary("1010", "1101")); // Output: "10111"

