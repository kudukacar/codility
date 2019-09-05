function solution(A) {
    const length = A.length;
    let avg = (A[0] + A[1]) / 2;
    let start = 0;

    for (let i = 0; i < length - 1; i++) {
        const twoAvg = (A[i] + A[i + 1]) / 2;
        if (twoAvg < avg) {
            start = i;
            avg = twoAvg;
        }
        if (i < length - 2) {
            const threeAvg = (A[i] + A[i + 1] + A[i + 2]) / 3;
            if (threeAvg < avg) {
                start = i;
                avg = threeAvg;
            }
        }
    }
    return start;
}

// https://app.codility.com/demo/results/trainingPPMJDM-9Q2/


