
let isPalindrome = function(st){
    let l = 0
    let r = st.length-1

    while(l < r){
        if(st[l] !== st[r]){
            return false;
        }
        l++;
        r--;
    }
    return true;
};

console.log(isPalindrome("madam"))