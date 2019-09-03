function solution(N, A) {
    const length = A.length;
    const counters = {};
    let prevMax = 0;
    let max = 0;
    for(let i = 1; i <= N; i++) {
        counters[i] = 0;
    }

    for(let j = 0; j < length; j++) {
        const ele = A[j];
        if(ele <= N) {
            if(counters[ele] < prevMax) {
                counters[ele] = prevMax;
            }
            counters[ele] += 1;
            if(counters[ele] > max) {
                max = counters[ele];
            }
        } else {
            prevMax = max;
        }
    }

    for(let k = 1; k <= N; k++) {
        if(counters[k] < prevMax) {
            counters[k] = prevMax;
        }
    }

    return Object.values(counters);
}


// https://app.codility.com/demo/results/trainingV2XBTU-XNN/