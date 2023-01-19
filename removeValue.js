function removeValue(nums, val) {
    const zero = "X";
    let counter = 0;
    let i = 0;
    while (i < nums.length) {
        if (nums[i] == val) {
            nums.splice(i, 1);
            nums.push(zero);
        }
        if (nums[i] != "X" && nums[i] != val) {
            counter++
            i++;
        }
    }
    return counter
}

console.log(removeValue([0, 1, 2, 2, 3, 0, 4, 2], 2))