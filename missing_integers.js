function solution(A) {
    const filtered = A.filter(ele => ele > 0);
    const length = filtered.length;

    if(length === 0) {
        return 1;
    }

    const obj = {};

    for(let i = 0; i < length; i++) {
        obj[filtered[i]] = true;
    }

    let j = 1;

    while(j) {
        if(obj[j] === undefined) {
            return j;
        }
        j++;
    }
}

// https://app.codility.com/demo/results/trainingPKERDT-UVB/