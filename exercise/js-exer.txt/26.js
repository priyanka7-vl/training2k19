function spiralMatrix(row, col) {
    let rows = row;
    let cols = col;
 
    let matrix = [];
    for (let row = 0; row < rows; row++) {
        matrix[row] = [];
        for (let col = 0; col < cols; col++) {
            matrix[row][col] = 0;
        }
    }
 
    let top = 0;
    let bottom = rows - 1;
    let left = 0;
    let right = cols - 1;
 
    let index = 1;
    let direction = 0;
    while (top <= bottom && left <= right) {
        switch (direction % 4) {
            case 0:
                for (let col = left; col <= right; col++) {
                    matrix[top][col] = index++;
                }
                top++;
                direction++;
                break;
            case 1:
                for (let row = top; row <= bottom; row++) {
                    matrix[row][right] = index++;
                }
                right--;
                direction++;
                break;
            case 2:
                for (let col = right; col >= left; col--) {
                    matrix[bottom][col] = index++;
                }
                bottom--;
                direction++;
                break;
            default:
                for (let row = bottom; row >= top; row--) {
                    matrix[row][left] = index++;
                }
                left++;
                direction++;
                break;
        }
    }
 
    return matrix.map(r => r.join(' ')).join('\n');
}
console.log(spiralMatrix(4,4))


///////////////////////////////////////////



let spiralArray = function (n) {
    let arr = Array(n),
        x = 0, y = n,
        total = n * n--,
        dx = 1, dy = 0,
        i = 0, j = 0;
    while (y) arr[--y] = [];
    while (i < total) {
        arr[y][x] = i++;
        x += dx; y += dy;
        if (++j == n) {
            if (dy < 0) {x++; y++; n -= 2}
            j = dx; dx = -dy; dy = j; j = 0;
       }
    }
    return arr;
}

arr = spiralArray(n = 5);
for (y= 0; y < n; y++) console.log(arr[y].join(" "));
