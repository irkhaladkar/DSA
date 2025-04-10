/**
 * There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.
 */


/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const map = new Map();
    return noOfPaths(0,0,m,n,map);
};
function noOfPaths(r,c,m,n, map) {
    if(r=== m-1 && c=== n-1)
        return 1;
    if(r >= m || c>=n)
        return 0;
    const key = r + ':' + c;
    if(map.has(key))
        return map.get(key);
    const rightSidePaths = noOfPaths(r,c+1,m,n,map);
    const downSidePaths = noOfPaths(r+1,c,m,n, map);

    map.set(key,rightSidePaths + downSidePaths);
    return rightSidePaths + downSidePaths;
}