function removeDuplicates(nums) {
    let i = nums.length - 1;
    while (i > 0) {
        if (nums[i] !== "_") {
            if (nums[i - 1] === nums[i]) {
                nums.unshift(nums[i]);
                nums.splice(i + 1, 1);
                nums[i] = "_";
                i--;
            } else {
                if (i - 1 !== 0 && nums[i - 1] === nums[i]) {
                    nums.unshift(nums[i]);
                    nums.splice(i + 1, 1);
                } else {
                    i--
                }
            }
        }

    }
    return nums
}

console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 4]))