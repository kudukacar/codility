function solution(N) {
    let min = 1 + N;
    const sqrt = Math.floor(Math.sqrt(N));

    for (let i = 2; i <= sqrt; i++) {
        if (N % i === 0) {
            const newMin = N / i + i;
            if (newMin < min) {
                min = newMin;
            }
        }
    }
    return min * 2;
}

// https://app.codility.com/demo/results/trainingHVUTAR-TJ6/