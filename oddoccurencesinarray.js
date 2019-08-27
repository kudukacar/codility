function solution(A) {

    if(A.length < 2) {
        return A[0];
    }

    const obj = {};

    for(let i = 0; i < A.length; i++) {
       if(A[i] in obj) {
            delete obj[A[i]];
       } else {
           obj[A[i]] = true;
       }
    }

    return parseInt(Object.keys(obj)[0]);

}

// https://app.codility.com/demo/results/trainingFY5NZU-4NC/