const permute = function(nums) {
    const res = [];
    const used = {};

    function dfs(path) {
        if(path.length === nums.length) {
            res.push(path.slice());
            return ;
        }
        for(let num of nums) {
            if(used[num]) continue;
            path.push(num);
            used[num] = true;
            dfs(path);
            path.pop();
            used[num] = false;
         }
    }
    dfs([]);
    return res;
}


let nums = [1,2,3];

console.log(permute(nums));


