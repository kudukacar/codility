function solution(A) {
    const length = A.length;
    let count = 0;
    let passing = 0;

    for(let i = length - 1; i >= 0; i--) {
        if(A[i] === 1) {
            count++;
        } else {
            passing += count;
            if(passing > 1000000000) {
                return passing = -1;
            }
        }
    }

    return passing;
}

// https://app.codility.com/demo/results/trainingUYS66G-SUV/