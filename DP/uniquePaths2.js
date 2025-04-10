/**
 * You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

An obstacle and space are marked as 1 or 0 respectively in grid. A path that the robot takes cannot include any square that is an obstacle.

Return the number of possible unique paths that the robot can take to reach the bottom-right corner.
 */
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const map = new Map();
    return noOfPaths(0,0,obstacleGrid.length, obstacleGrid[0].length, map, obstacleGrid);
};
function noOfPaths(r,c,m,n, map, obstacleGrid) {
    if(r >= m || c>=n || obstacleGrid[r][c] === 1)
        return 0;
    if(r=== m-1 && c=== n-1)
        return 1;
    const key = r + ':' + c;
    if(map.has(key))
        return map.get(key);
    const rightSidePaths = noOfPaths(r,c+1,m,n,map, obstacleGrid);
    const downSidePaths = noOfPaths(r+1,c,m,n, map, obstacleGrid);

    map.set(key,rightSidePaths + downSidePaths);
    return rightSidePaths + downSidePaths;
}