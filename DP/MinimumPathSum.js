/**
 * Problem no 64
 * Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.
 * Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
    Output: 7
    Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const map = new Map();
    return noOfPaths(0,0,grid.length,grid[0].length,map,grid);
};
function noOfPaths(r,c,m,n, map, obstacleGrid) {
    if(r=== m-1 && c=== n-1)
        return obstacleGrid[r][c];
    if(r >= m || c>=n)
        return Infinity;
    const key = r + ':' + c;
    if(map.has(key))
        return map.get(key);
    const rightSidePaths = obstacleGrid[r][c] + noOfPaths(r,c+1,m,n,map, obstacleGrid);
    const downSidePaths = obstacleGrid[r][c] + noOfPaths(r+1,c,m,n, map, obstacleGrid);
    const res = Math.min(rightSidePaths,downSidePaths);
    map.set(key,res);
    return res;
}