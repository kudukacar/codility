function solution(N) {
    let count = 0;
    const sqrt = Math.floor(Math.sqrt(N));

    for(let i = 1; i <= sqrt; i++) {
        if(N % i === 0) {
            count++;
            if(N/i != i) {
                count++;
            }
        }
    }
    return count;
}

// https://app.codility.com/demo/results/trainingS5S5TD-JQA/