function solution(arr)
{
    let max=-1;
    let tmp=0;
    for(let i = 0;i<arr.length;i++)
    {
        if(arr[i]>='0'&&arr[i]<='9')
        {
            let cur = parseInt(arr[i]);
            tmp*=10;
            tmp+=cur;
            if(max<tmp)
                max=tmp;
        }
        else
        {
            tmp=0;
        }
    }
    return max;
}

console.log(solution("055e" ))