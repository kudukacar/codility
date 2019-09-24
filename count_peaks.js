function solution(A) {
    const length = A.length;
    if(length < 3) {
        return 0;
    }

    const peaks = A.map(ele => false);
    let countPeaks = 0;

    for(let i = 1; i < length - 1; i++) {
        if(A[i] > A[i-1] && A[i] > A[i + 1]) {
            peaks[i] = true;
            countPeaks++;
        }
    }

    if(countPeaks === 0) {
        return 0;
    }

    if(countPeaks === 1) {
        return 1;
    }

    const factors = [];

    for(let i = 1; i <= countPeaks; i++) {
        if(length % i === 0) {
            factors.push([i, length/i]);
        }
    }

    if(factors.length === 1) {
        return 1;
    }

    let countBlocks = 1;

    for(let i = 1; i < factors.length; i++) {
        let isPeak = true;
        for(let j = 0; j < factors[i][0]; j++) {
            const slice = peaks.slice(j * factors[i][1], (j * factors[i][1]) + factors[i][1]);
            if(slice.indexOf(true) === -1) {
                isPeak = false;
                break;
            }
        }
        if(isPeak = true) {
            if(factors[i][0] > countBlocks) {
                countBlocks = factors[i][0];
            }
        }
    }
    return countBlocks;
}

