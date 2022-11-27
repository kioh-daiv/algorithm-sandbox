const costs = [
    841, 41, 801, 223, 686
  ];

// const memo = new Array(costs.length).fill(-1);

// memo[0] = costs[0];
// memo[1] = costs[1];

// const dp = (n) => {
//     if(memo[n] != -1) return memo[n];
//     memo[n] = Math.min((dp(n-1)+costs[n]), dp(n-2)+costs[n])
//     return memo[n]
// }
// dp(memo.length-1)
// console.log(memo)


if (costs.length == 1) return costs[0];
let second = costs[costs.length - 1];
let first = costs[costs.length - 2] + second;

for (let index = costs.length - 3; index >= 0; index--) {
    const score = costs[index];
    const temp = first;
    first = score + Math.min(first, second);
    second = temp;
}
// return Math.min(first, second);

console.log(Math.min(first, second))