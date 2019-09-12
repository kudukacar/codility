function solution(H) {
    const length = H.length;
    const blocks = [];
    let count = 0;

    let i = 0;
    while(i < length) {
        if(H[i] > blocks[blocks.length - 1] || blocks.length === 0) {
            blocks.push(H[i]);
            i++;
        } else if(H[i] < blocks[blocks.length - 1]) {
            while (H[i] < blocks[blocks.length - 1]) {
                blocks.pop();
                count++;
            }
        } else if(H[i] === blocks[blocks.length - 1]) {
            i++;
        }
    }
    return count + blocks.length;
}

// https://app.codility.com/demo/results/trainingQ6BK6R-PT9/