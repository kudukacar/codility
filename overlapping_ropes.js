function solution(A, B) {
    const length = A.length;
    let count = 1;
    let start = B[0];

    if(length <= 1) {
        return length;
    }

    for(let i = 1; i < length; i++) {
        if(A[i] > start) {
            count++;
            start = B[i];
        }

    }
    return count;
}
// https://app.codility.com/demo/results/trainingMH3JZN-SJB/