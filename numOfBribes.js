function minimumBribes(q) {
    // Write your code here
    let bribeCount = 0;
    let n = q.length - 1;
    for (let i = n; i >= 0; i--) {
        if (q[i] != i + 1) {
            if ((i - 1 >= 0) && q[i - 1] == i + 1) {
                bribeCount++;
                let temp = q[i - 1];
                q[i - 1] = q[i];
                q[i] = temp;
            } else if ((i - 2 >= 0) && q[i - 2] == i + 1) {
                bribeCount += 2;
                let temp = q[i - 2];
                q[i - 2] = q[i];
                q[i] = temp;
            } else {
                console.log("Too chaotic");
                return;
            }
        }
    }
    console.log(bribeCount);
}

const arr = [1, 2, 5, 3, 7, 8, 6, 4]
minimumBribes(arr)