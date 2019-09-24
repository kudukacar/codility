function solution(A) {
    const peaks = [];
    const length = A.length;

    if (length < 3) {
        return 0;
    }

    for (let i = 1; i < length - 1; i++) {
        if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
            peaks.push(i);
        }
    }
    const peaksCount = peaks.length;
    if (peaksCount < 2) {
        return peaksCount;
    }

    let flags = peaksCount;
    let flagCount = 1;
    let foundMax = false;

    let j = 0;
    let increment = 1;

    while (foundMax === false) {
        foundMax = true;
        while (j < peaksCount - 1) {
            let index = j + increment;
            index = Math.min(peaksCount - 1, j + increment);
            if (peaks[index] - peaks[j] >= flags) {
                j = index;
                increment = 1;
                flagCount++;
            } else if (index === peaksCount - 1) {
                break;
            } else {
                increment++;
            }
        }

        if (flagCount < flags) {
            flags -= 1;
            if (flags === 1) {
                return flags;
            }
            flagCount = 1;
            increment = 1;
            j = 0;
            foundMax = false;
        } else if (flagCount === flags) {
            return flagCount;
        }
    }
    return flagCount;
}