function solution(K, A) {
    const length = A.length;
    let count = 0;
    let sum = 0;

    for(let i = 0; i < length; i++) {
        sum += A[i];
        if(sum >= K) {
            count++;
            sum = 0;
        }
    }

    return count;
}

// https://app.codility.com/demo/results/trainingVVFAMB-WPT/