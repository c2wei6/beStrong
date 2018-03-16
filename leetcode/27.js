
var removeElement = function(nums, val) {
    for (var i = nums.length-1; i >= 0; i --) {
        if (nums[i] === val) {
            nums.splice(i, 1);
        }
    }
};

// 倒序遍历 正序的话 会使下标前移 无法完成遍历