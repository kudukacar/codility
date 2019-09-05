function solution(A, B, K) {
    if (A % K === 0 || B % K === 0) {
        return Math.floor((B - A) / K) + 1;
    } else {
        while(A < B) {
            A++
            if(A % K === 0) {
                return Math.floor((B - A) / K) + 1;
            }
        }
    }
    return Math.floor((B - A) / K)
}

// https://app.codility.com/demo/results/trainingSUJ5B9-Q5T/