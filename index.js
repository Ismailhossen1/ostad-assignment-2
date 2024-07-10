// ===**********  task 1 *********=== 

function arrange(s,indices){
    // space complexity of below line is O(n)
    let arr = new Array(indices.length)
     
    // time complexity of this code  O(n)
    for(let i=0; i<indices.length; i++){
      //  space complexity of this line is O(1)
        arr[indices[i]] = s[i]
    }

    console.log(arr.join(''));
}


let s = "dosta"
let indices =[4,0,1,2,3]
arrange(s,indices)

// Total Complexity:
// Time Complexity:𝑂(𝑛)
// Space Complexity: 𝑂(𝑛)






// ===**********  task 2 *********=== 


function strStr(haystack, needle) {
    return haystack.indexOf(needle);
}

let haystack = "hello";
let needle = "ll";

console.log(strStr(haystack, needle));
// time compexity of this code is O(n*m) the 'indexOf' method has time complexity O(n*m)
//space complexity is O(1)


