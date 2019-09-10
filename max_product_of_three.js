function solution(A) {
    A.sort((a,b) => a - b);
    const length = A.length;

    const first = A[0] * A[1] * A[length - 1];
    const last = A[length - 1] * A[length - 2] * A[length - 3];

    return Math.max(first, last);
}

// https://app.codility.com/demo/results/training6YV8ND-4V8/