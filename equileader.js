function solution(A) {
    const length = A.length;
    const dominator = Math.floor(length/2) + 1;
    const count = {};
    let leader = null;
    let totalCount = null;

    for(let i = 0; i < length; i++) {
        if(count[A[i]] === undefined) {
            count[A[i]] = 1;
        } else {
            count[A[i]] += 1;
        }
    }

    for(ele in count) {
        if(count[ele] >= dominator) {
            leader = parseInt(ele);
            totalCount = count[ele];
        }
    }

    if(leader === null) {
        return 0;
    }

    let runningCount = 0;
    let equileader = 0;

    for(let i = 0; i < length; i++) {
        if(A[i] === leader) {
            runningCount += 1;
        }
        const remainder = totalCount - runningCount;
        if(runningCount >= Math.floor((i + 1)/2) + 1 && remainder >= Math.floor((length - i - 1)/2) + 1) {
            equileader += 1;
        }
    }

    return equileader;

}

// https://app.codility.com/demo/results/trainingDU9686-5FM/