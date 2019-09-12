function solution(S) {
    const length = S.length;
    if(length === 0) {
        return 1;
    }

    if(length % 2 === 1) {
        return 0;
    }

    const stack = [];
    const chars = {"{":"}", "[":"]", "(":")"};

    for(let i = 0; i < length; i++) {
        if(chars[S[i]] != undefined) {
            stack.push(S[i]);
        } else if(chars[stack[stack.length - 1]] === S[i]) {
            stack.pop();
        } else {
            return 0;
        }
    }

    if(stack.length === 0) {
        return 1;
    } else {
        return 0;
    }
}

// https://app.codility.com/demo/results/training523BRN-V9D/