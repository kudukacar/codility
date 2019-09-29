function solution(N, M) {
    const wrappers = {};
    let count = 0;

    if(N % M === 0) {
        return N/M;
    }

    let i = 0;

    while(true) {
        if (wrappers[i % N]) {
            return count;
        }
        wrappers[i % N] = true;
        count++;
        i += M;
    }

    return count;
}

// https://app.codility.com/demo/results/trainingM5PPKB-RWC/