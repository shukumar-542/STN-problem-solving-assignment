const checkPalindrome= (str)=>{
    let rev = []
    for(let i = str.length-1 ; i >= 0 ; i--){
        rev.push( str[i])
    }
    let result = rev.join('')
    if(result === str){
        console.log('string is palindrome');
    }else{
        console.log('not palindrome');
    }
}


checkPalindrome('shuku')