// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Giải thích: nums[0] + nums[1] = 2 + 7 = 9

// solution 1
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return [];
// };

// solution 2
var twoSum = function (nums, target) {
  let hashMap = new Map();
  
  for (let index = 0; index < nums.length; index++) {
    const complete = target - nums[index];

    if (hashMap.has(complete)) {
      return [hashMap.get(complete), index];
    }

    hashMap.set(nums[index], index);
  }
  return [];
};

console.log(twoSum([2, 8, 1, 15], 9));
