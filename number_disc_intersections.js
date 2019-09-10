function solution(A) {
    const intersections = [];
    const length = A.length;
    let count = 0;

    for(let i = 0; i < length; i++) {
        intersections.push([i - A[i], i + A[i]]);
    }

    intersections.sort((a,b) => a[0] - b[0]);

    for(let j = 0; j < length; j++) {
        for(let k = j + 1; k < length; k++) {
            if(intersections[k][0] <= intersections[j][1]) {
                count++;
                if(count > 10000000) {
                    return -1;
                }
            } else {
                break;
            }
        }
    }
    return count;
}

// https://app.codility.com/demo/results/trainingCW74GC-9AW/