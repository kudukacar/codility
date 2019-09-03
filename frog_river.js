
function solution(X, A) {
    const obj = {};

    for(let i = 0; i < A.length; i++) {
        if(!(A[i] in obj)) {
            obj[A[i]] = i;
        }
    }

    let time = obj[X];

    if(time === undefined) {
        return -1;
    }

    for(let j = 1; j <= X; j++) {
        if(!(j in obj)) {
            return -1;
        } else if(obj[j] > time) {
            time = obj[j];
        }
    }

    return time;
}

// https://app.codility.com/demo/results/trainingF59F5F-U9N/