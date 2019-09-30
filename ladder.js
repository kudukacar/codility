result = { 1: 1, 2: 2 }

function fib(N) {
    let max = Math.pow(2, 30);
    if (result[N]) {
        return result[N];
    }
    result[N] = fib(N - 1) + fib(N - 2);
    return result[N] = result[N] % max;
}

function solution(A, B) {
    const result = [];
    A.forEach((ele, i) => {
        result.push(fib(ele) % Math.pow(2, B[i]));
    })
    return result;
}

// https://app.codility.com/demo/results/trainingUGGZ2V-G7Z/