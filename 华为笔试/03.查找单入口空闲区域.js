// 5 4
// X X X X
// X O O O
// X X X X
// X O O O
// X X X X
// 深度优先搜索

function solveMethod(m, n, matrix){
    let count = 0
    let entry = new Array(2).fill(0)
    let max = 0
    let sqrt = []
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n;j++){
            if(matrix[i][j] === 'O'){
                matrix[i][j] = 'X'
                let poss = []
                poss.push([i,j])
                getSqrt(m, n, matrix, i, j, poss)
                if(count === 1){
                    if(max === poss.length){//这里是处理有多个大小一样的连通区域的情况
                        sqrt = []
                    } else if(max < poss.length){
                        sqrt = [entry[0],entry[1],poss.length]
                        max = poss.length
                    }
                }
                count = 0
                entry = new Array(2).fill(0)
            }
        }
    }

    if(sqrt.length === 1){
        const [x, y, size] = sqrt[0]
        console.log(`${x} ${y} ${size}`)
    } else if(max !=0){
        console.log(max)
    } else {
        console.log('NULL')
    }
    function getSqrt(m, n, matrix, x, y, poss){
        if(x === 0 || x === m-1 || y=== 0|| y === n-1){
            count ++
            entry[0] = x
            entry[1] = y
        }
        if(x < m-1){
            if(matrix[x+1][y] === 'O'){
                matrix[x+1][y] = 'X'
                poss.push([x+1, y])
                getSqrt(m, n, matrix, x+1, y, poss)
            }
        }
        if(y < n-1){
            if(matrix[x][y+1] === 'O'){
                matrix[x][y+1] = 'X'
                poss.push([x,y+1])
                getSqrt(m, n, matrix, x, y+1, poss)
            }
        }
    }
}

solveMethod(5,4,[['X','X', 'X', 'X'],
                ['X','O', 'O', 'O'],
                ['X','X', 'X', 'X'],
                ['X','O', 'O', 'O'],
                ['X','X', 'X', 'X']])