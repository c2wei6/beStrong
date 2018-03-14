var reverse = function(x) {
    var res = 0;
    
    if (x > 0) {
        res = Number((''+x).split('').reverse().join(''));
    } else {
        res = 0-Number((''+(0-x)).split('').reverse().join(''));
    }
    
    return (res < -2147483648 || res > 2147483647) ? 0 : res ;
};

/*
   提交了n次 反复尝试
   一开始先忽略了符号
   后又忽略了32位限制
   然后又没注意是对翻转结果判定 不是参数
   英文水平 基础功 可见都不行
*/
