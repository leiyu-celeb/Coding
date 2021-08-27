const subsets = function(nums) {
    const res = [];

    function dfs(index, path) {
        res.push(path.slice());
        for(let i = index; i < nums.length; i++) {
            path.push(nums[i]);
            dfs(i + 1, path);
            path.pop();
        }
    }
    dfs(0, []);
    return res;
}



const subsets = function(nums) {
    const res = [];

    function dfs(index, path) {
        res.push(path.slice());
        for(let i = index; i < nums.length; i++) {
            path.push(nums[i]);
            dfs(i + 1, path);
            path.pop();
        }
    }
    dfs(0, []);
    return res;
}


