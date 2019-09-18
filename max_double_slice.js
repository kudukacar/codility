function solution(A) {
    sumLeft = A.map(ele => 0);
    sumRight = A.map(ele => 0);
    const length = A.length;

    for(let i = 1; i < length - 1; i++) {
        sumLeft[i] = Math.max(A[i], sumLeft[i - 1] + A[i]);
    }

    for(let i = length - 2; i > 0; i--) {
        sumRight[i] = Math.max(A[i], sumRight[i + 1] + A[i]);
    }

    let max = 0;

    for(let i = 1; i < length - 1; i++) {
        max = Math.max(sumLeft[i - 1] + sumRight[i + 1], sumLeft[i - 1], max);
    }

    return Math.max(0, max);
    
}

// https://app.codility.com/demo/results/trainingAYPX5V-6YJ/
