var twoSum = function(nums, target) {
    for (var i = 0; i < nums.length; i ++) {
        for (var j = i + 1; j < nums.length; j ++) {
            if (nums[i]+nums[j] == target) {
                return [i, j]; 
            } else {
                continue;
            }
        }
    }
};

//最简单的做法 穷举 
//看到discuss里有用hash做的 还有其他比较高级的办法

//所以简单了解了一下hash
