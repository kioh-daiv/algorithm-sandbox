const n = 5;
const arr = new Array(n+1).fill(-1);
arr[0] = 1
arr[1] = 1
arr[2] = 2

const dp = (n) => {
    if(arr[n] != -1) return arr[n];
    arr[n] = dp(n-1) + dp(n-2) + dp(n-3);
    return arr[n]
}

dp(5)

console.log(arr[5])