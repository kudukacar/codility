function solution(A) {
    const length = A.length;
    const dominator = Math.floor(length/2) + 1;
    const count = {};

    if(length === 0) {
        return -1;
    }

    A.forEach(element => {
        if(count[element] === undefined) {
            count[element] = 1;
        } else {
            count[element] += 1;
        }
    });

    for(let i = 0; i < length; i++) {
        if(count[A[i]] >= dominator) {
            return i;
        }
    }
    return -1;

}

// https://app.codility.com/demo/results/trainingV4BW7T-T68/