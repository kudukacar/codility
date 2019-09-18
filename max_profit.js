function solution(A) {
    const length = A.length;

    let start = A[0];
    let max = 0;

    for(let i = 1; i < length; i++) {
        const runningMax = A[i] - start;
        if(runningMax > max) {
            max = runningMax;
        }
        if(A[i] < start) {
            start = A[i];
        }
    }

    return max;
}

// https://app.codility.com/demo/results/trainingFP429X-VX5/