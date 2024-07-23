/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let maxHeight,imax;
    let newArr = [];
    let len = names.length;
    while(len != newArr.length)
    {
        if(heights.length !=0)
        {
        maxHeight = 0 ;
        imax = 0 ;
        for(let i = 0 ; i < heights.length ; i ++){
            if(maxHeight < heights[i]){
                maxHeight = heights[i];
                imax = i ;
            }
        }
            // console.log(maxHeight,imax);
            newArr.push(names[imax]);
            heights.splice(imax,1);
            names.splice(imax,1);
        }
    }

    // console.log(newArr);

return newArr;
}
