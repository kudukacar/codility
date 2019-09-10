function solution(A) {
    const length = A.length;

    if(length < 3) {
        return 0;
    }

    A.sort((a,b) => b - a);

    for(let i = 0; i < length - 2; i++) {
        const p = A[i];
        const q = A[i + 1];
        const r = A[i + 2];
        if(p < q + r && q < p + r && r < p + q) {
            return 1;
        }
    }

    return 0;
}

// https://app.codility.com/demo/results/trainingUN5WTP-FNB/