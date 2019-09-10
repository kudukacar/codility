function solution(A) {
    const distinct = {};
    const length = A.length;

    for(let i = 0; i < length; i++) {
        distinct[A[i]] = true;
    }

    return Object.keys(distinct).length;
}

// https://app.codility.com/demo/results/trainingXHF7KW-GDT/