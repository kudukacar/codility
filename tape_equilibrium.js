function solution(A) {

    const sum = A.reduce((a,b) => a + b);
    let runningSum = A[0];
    let min = Math.abs(runningSum - (sum - runningSum));

    for(let i = 1; i < A.length - 1; i++) {
        runningSum += A[i];
        const diff = Math.abs(runningSum - (sum - runningSum));
        if( diff < min) {
            min = diff;
        }
    }
    return min;
}

// https://app.codility.com/demo/results/trainingPN8AC8-DBX/