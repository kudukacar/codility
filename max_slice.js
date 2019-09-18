function solution(A) {
    const length = A.length;
    let runningSum = A[0];
    let max = A[0];

    for(let i = 1; i < length; i++) {
        runningSum = Math.max(A[i] + runningSum, A[i]);
        if(runningSum > max) {
            max = runningSum;
        }
    }
    return max;
}

// https://app.codility.com/demo/results/trainingEF2CHA-AF7/