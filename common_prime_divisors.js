function isPrime(num) {
    if (num < 2) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function primeDivisors(num) {
    let primeDivisorsString = "";
    const sqrt = Math.floor(Math.sqrt(num));
    for(let i = 1; i <= sqrt; i++) {
        if(num % i === 0) {
            if(isPrime(i)) {
                primeDivisorsString += i; 
            }
            if(isPrime(num/i) && num/i !== i) {
                primeDivisorsString += num/i;
            }
        }
    }
    return primeDivisorsString;
}

function solution(A, B) {
    const length = A.length;
    let count = 0;

    for(let i = 0; i < length; i++) {
        if(primeDivisors(A[i]) === primeDivisors(B[i])) {
            count++;
        }
    }
    return count;
}

// https://app.codility.com/demo/results/training6MWV3M-93K/