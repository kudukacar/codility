function solution(S, P, Q) {
    const length = P.length;
    const obj = {A:1, C:2, G:3, T:4};
    const results = [];

    for(let i = 0; i < length; i++) {
        const start = P[i];
        const end = Q[i];
        const subString = S.slice(start, end+1);

        if(subString.indexOf("A") > -1) {
            results.push(obj["A"]);
        } else if(subString.indexOf("C") > -1) {
            results.push(obj["C"]);
        } else if(subString.indexOf("G") > -1) {
            results.push(obj["G"]);
        } else {
            results.push(obj["T"]);
        }
    }

    return results;
}


// https://app.codility.com/demo/results/trainingHY9ZNN-MG6/