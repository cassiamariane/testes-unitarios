const moveElement = function(nums) {
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == null){
            const fromIndex = i
            const toIndex = nums.length;

            const element = nums.splice(fromIndex, 1)[0];

            nums.splice(toIndex, 0, element);
            nums.pop()
        }
    }
    
    return nums
}

module.exports = moveElement;