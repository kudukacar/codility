function solution(A) {
    const length = A.length;

    if(length === 0) {
        return 1;
    }

    const obj = {};

    for(let i = 0; i < length; i++) {
        obj[A[i]] = true;
    }

    for(let j = 1; j <= length + 1; j++) {
        if(obj[j] === undefined) {
            return parseInt(j);
        }
    }
}
// https://app.codility.com/demo/results/trainingFUM8EK-FYX/