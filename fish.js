function solution(A, B) {
    const length = A.length;
    const downstream = [];
    const upstream = [];

    for(let i = 0; i < length; i++) {
        if(B[i] === 0) {
            if(downstream.length === 0) {
                upstream.push(A[i]);
            }
            while(downstream.length > 0) {
                if(downstream[downstream.length - 1] < A[i]) {
                    downstream.pop();
                    if(downstream.length === 0) {
                        upstream.push(A[i]);
                    }
                } else {
                    break;
                }                
            }
        } else {
            downstream.push(A[i]);
        }
    }
    return downstream.length + upstream.length;
}

// https://app.codility.com/demo/results/trainingPB3HFA-AUZ/