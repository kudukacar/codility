function solution(N) {
    const binary = [];
    while(N > 0) {
        binary.unshift(N % 2);
        N = Math.floor(N/2);
    }
    maxCount = 0;
    runningCount = 0;
    binary.forEach(ele => {
        if(ele === 1) {
            if(runningCount > maxCount) {
                maxCount = runningCount;
            }
            runningCount = 0;
        } else {
            runningCount += 1;
        }
    })
    return maxCount;
}

//https://app.codility.com/demo/results/training3J7DNX-ZFY/