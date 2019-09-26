function solution(A) {
    const length = A.length;
    if (length < 3) {
        return 0;
    }

    const peaks = A.map(ele => false);
    let countPeaks = 0;

    for (let i = 1; i < length - 1; i++) {
        if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
            peaks[i] = true;
            countPeaks++;
        }
    }

    if (countPeaks < 2) {
        return countPeaks;
    }

    const factors = [[1, length]];

    for (let j = 2; j <= countPeaks; j++) {
        if (length % j === 0) {
            factors.push([j, length / j]);
        }
    }

    if (factors.length === 1) {
        return 1;
    }

    let maxBlocks = 1;

    for (let k = 1; k < factors.length; k++) {
        let isPeak = true;
        const blockCount = factors[k][0];
        const blockSize = factors[k][1];
        for (let l = 0; l < blockCount; l++) {
            const slice = peaks.slice(l * blockSize, (l * blockSize) + blockSize);
            if (slice.indexOf(true) === -1) {
                isPeak = false;
                break;
            }
        }
        if (isPeak = true) {
            if (blockCount > maxBlocks) {
                maxBlocks = blockCount;
            }
        }
    }
    return maxBlocks;
}

// https://app.codility.com/demo/results/trainingGZW7PD-NS3/