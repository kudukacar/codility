function solution(A) {
    A.sort((a,b) => a - b);

    const length = A.length;

    let i = 0;
    let j = 1;

    while(j <= length) {
        if(A[i] != j) {
            return 0;
        }
        i++;
        j++;
    }

    return 1;
}

// https://app.codility.com/demo/results/trainingCCXP4H-U2G/