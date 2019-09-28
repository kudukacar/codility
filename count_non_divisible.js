function solution(A) {
    const length = A.length;
    const result = [];
    let B = A.slice(0);
    B.sort((a, b) => b - a);
    const nonDivisble = {};
    B.forEach(element => {
        nonDivisble[element] = 0;
    });

    for (let i = 0; i < length; i++) {
        if (B[i + 1] === B[i]) {
            nonDivisble[B[i]] -= 1;
            continue;
        }
        for (let j = i + 1; j < length; j++) {
            if (B[i] % B[j] > 0) {
                nonDivisble[B[i]]++;
            }
        }
        nonDivisble[B[i]] += i;
    }

    A.forEach((ele, i) => {
        result[i] = nonDivisble[ele];
    });

    return result;
}

// https://app.codility.com/demo/results/trainingJYECSK-CHU/