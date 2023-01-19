function searchInsertPosition(nums, target) {
    let leftIndex = 0;
    let rightIndex = nums.length - 1;
    while (leftIndex <= rightIndex) {
        let middle = Math.floor((leftIndex + rightIndex) / 2);
        if (target == nums[middle]) {
            return middle;
        }
        if (target > nums[middle]) {
            leftIndex = middle + 1;
        } else {
            rightIndex = middle - 1;
        }
    }
    return leftIndex;
}

console.log(searchInsertPosition([1, 2, 3, 4, 5, 10], 7));