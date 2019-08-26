function solution(A, K) {
    if (A.length <= 1 || K === 0) {
        return A;
    }

    K = K % A.length;

    for (let i = 0; i < K; i++) {
        A.unshift(A.pop());
    }

    return A;
}

// https://app.codility.com/demo/results/trainingUACDAT-VUM/