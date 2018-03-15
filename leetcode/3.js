var lengthOfLongestSubstring = function(s) {
    var ret = 0;
    var left = 0;
    var list = {};
    
    var arr = s.split('');

    for (var i = 0; i < arr.length; i ++) {
        if (list[arr[i]] != undefined && list[arr[i]] >= left) {
            left = list[arr[i]] + 1;
        }
        list[s[i]] = i;
        ret = Math.max(ret, i - left + 1);
    }
    return ret;
};

console.log(lengthOfLongestSubstring('dvdf'));

/*
    这道题 卡了一下 我居然先取得所有子串 然后去掉带重复字母的 最后再比较长度 显然太二逼
    后来看了一下提示 利用map存储字符出现的位置 遍历字符串串根据字符重复出现的位置 不断调整边界
    最后取得最长的无重复字符子串
*/