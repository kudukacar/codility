function isPrime(num) {
    if(num < 2) {
        return false;
    }

    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}

function isSemiPrime(num) {
    const sqrt = Math.floor(Math.sqrt(num));
    for(let i = 2; i <= sqrt; i++) {
        if ((num % i === 0 && isPrime(i)) && isPrime(num/i)) {
            return true;
        }
    }
    return false;
}

function solution(N, P, Q) {
    const semiPrimes = new Array(N + 1);
    
    for(let h = 0; h < 4; h++) {
        semiPrimes[h] = 0;
    }

    for(let i = 4; i <= N; i++) {
        if(isPrime(i) === false) {
            if(isSemiPrime(i)) {
                semiPrimes[i] = 1;
                continue;
            }
        }
        semiPrimes[i] = 0;
    }

    const length = P.length;
    const result = P.map(ele => 0);

    for(let k = 0; k < length; k++) {
        const slice = semiPrimes.slice(P[k], Q[k] + 1);
        result[k] = (slice.reduce((a,b) => a + b, 0));
    }

    return result;
}

// https://app.codility.com/demo/results/trainingW5VRWR-R8T/