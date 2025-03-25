/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const sum = nums.reduce((num, acc) => {
        return num + acc
    });
    if(sum %2 !== 0)
        return false;
    const map = new Map();
    return partition(0,nums, sum/2, map);
};
function partition(index, nums, sum, map) {
    if(sum === 0)
        return true;
    if(index >= nums.length)
        return false;
    const uniqueKey = `${index}-${sum}`;
    if(map.has(uniqueKey)) {
        return map.get(uniqueKey);
    }
    let consider =false;
    if(nums[index] <= sum)
     consider = partition(index+1,nums, sum - nums[index], map);
    const notConsider = partition(index+1, nums, sum, map);
    const res = consider || notConsider;
    map.set(uniqueKey, res);
    return res;
}