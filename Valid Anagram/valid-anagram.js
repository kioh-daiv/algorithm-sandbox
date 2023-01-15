// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// > Example 1:
// >
// > Input: s = "anagram", t = "nagaram"
// > Output: true

// > Example 2:
// >
// > Input: s = "rat", t = "car"
// > Output: false

// > Constraints:
// >
// > 1 <= s.length, t.length <= 5 * 104
// > s and t consist of lowercase English letters.

// first approach using hashmap

// var isAnagram = function (s, t) {
//   if (s.length !== t.length) return false;

//   // because the loop count is equal , so we can only hold one loop to solve
//   // reduce 1 loop;
//   const hashmap1 = new Map();
//   const hashmap2 = new Map();
//   for (let index = 0; index < s.length; index++) {
//     if (hashmap1.has(s[index])) {
//       hashmap1.set(s[index], hashmap1.get(s[index]) + 1);
//     } else {
//       hashmap1.set(s[index], 1);
//     }
//     if (hashmap2.has(t[index])) {
//       hashmap2.set(t[index], hashmap2.get(t[index]) + 1);
//     } else {
//       hashmap2.set(t[index], 1);
//     }
//   }
//   console.log(hashmap1);
//   console.log(hashmap2);
//   // const hashmap1 = new Map();
//   // for (let index = 0; index < s.length; index++) {
//   //   const element = s[index];
//   //   if (hashmap1.has(element)) {
//   //     hashmap1.set(element, hashmap1.get(element) + 1);
//   //   } else {
//   //     hashmap1.set(element, 1);
//   //   }
//   // }
//   // // console.log(hashmap1);

//   // const hashmap2 = new Map();
//   // for (let index = 0; index < t.length; index++) {
//   //   const element = t[index];
//   //   if (hashmap2.has(element)) {
//   //     hashmap2.set(element, hashmap2.get(element) + 1);
//   //   } else {
//   //     hashmap2.set(element, 1);
//   //   }
//   // }
//   // console.log(hashmap2);
//   // remember the loop of Map
//   for (let [key, value] of hashmap2) {
//     // console.log(key + " = " + value);
//     if (!(hashmap1.has(key) && hashmap1.get(key) === value)) {
//       return false;
//     }
//   }
//   return true;
// };

// time space O(n) or O(S+T)
// memory space O(S+T)

// second approach sort it
// I thought of it, but I was afraid my idea was wrong, so I didn't practice *50
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // console.log([...s].sort());
  // console.log([...t].sort());

  // [1, 2] == [1, 2]      // false
  // https://marycore.jp/prog/js/array-equal/
  // return [...s].sort() == [...t].sort();
  return JSON.stringify([...s].sort()) === JSON.stringify([...t].sort());
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));

// ★ the downside is what's the time complexity of doing sort ??
// usually the interviewers just assume the sorting doesn't take extra space, so basically O(1)
