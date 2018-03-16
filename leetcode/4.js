var findMedianSortedArrays = function(nums1, nums2) {
    var nums = nums1.concat(nums2).sort(function (a,b){return a-b});
    return nums.length%2 == 0 ? (nums[nums.length/2]+nums[nums.length/2-1])/2:nums[(nums.length-1)/2];
};

// 拼接数组 排序
// 根据奇偶求中位数