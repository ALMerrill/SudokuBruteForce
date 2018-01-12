document.getElementById('solveButton').addEventListener('click', solve);

function solve() {
	var board = [[0,0,0,0,0,0,0,0,0],
         		[0,0,0,0,0,0,0,0,0],
         		[0,0,0,0,0,0,0,0,0],
         		[0,0,0,0,0,0,0,0,0],
         		[0,0,0,0,0,0,0,0,0],
         		[0,0,0,0,0,0,0,0,0],
         		[0,0,0,0,0,0,0,0,0],
         		[0,0,0,0,0,0,0,0,0],
         		[0,0,0,0,0,0,0,0,0]]
    var origBoard = [[0,0,0,0,0,0,0,0,0],
         		[0,0,0,0,0,0,0,0,0],
         		[0,0,0,0,0,0,0,0,0],
         		[0,0,0,0,0,0,0,0,0],
         		[0,0,0,0,0,0,0,0,0],
         		[0,0,0,0,0,0,0,0,0],
         		[0,0,0,0,0,0,0,0,0],
         		[0,0,0,0,0,0,0,0,0],
         		[0,0,0,0,0,0,0,0,0]]
    xcoord = ([0] * 9) + ([1] * 9) + ([2] * 9) + ([3] * 9) + ([4] * 9) + ([5] * 9) + ([6] * 9) + ([7] * 9) + ([8] * 9)
	ycoord = [0,1,2,3,4,5,6,7,8] * 9
	xcoord = [0,0,0,0,0,0,0,0,0,
			1,1,1,1,1,1,1,1,1,
			2,2,2,2,2,2,2,2,2,
			3,3,3,3,3,3,3,3,3,
			4,4,4,4,4,4,4,4,4,
			5,5,5,5,5,5,5,5,5,
			6,6,6,6,6,6,6,6,6,
			7,7,7,7,7,7,7,7,7,
			8,8,8,8,8,8,8,8,8,
			9,9,9,9,9,9,9,9,9]
	ycoord = [1,2,3,4,5,6,7,8,9,
			1,2,3,4,5,6,7,8,9,
			1,2,3,4,5,6,7,8,9,
			1,2,3,4,5,6,7,8,9,
			1,2,3,4,5,6,7,8,9,
			1,2,3,4,5,6,7,8,9,
			1,2,3,4,5,6,7,8,9,
			1,2,3,4,5,6,7,8,9,
			1,2,3,4,5,6,7,8,9]
    for(i = 0; i < 81; i++) {
    	x = xcoord[i];
    	y = ycoord[i];
    	var val = document.getElementById('cell_' + i).value;
    	if(val.length == 0){
    		board[x][y] = 0;
    		origBoard[x][y] = 0;
    	}
    	else {
    		board[x][y] = val;
    		origBoard[x][y] = val;
    	}
    }



    var curCell = 0
    var direction = 1

    var before = Date.now();


    while(curCell > -1 && curCell < 81) {
    	x = xcoord[curCell];
    	y = ycoord[curCell];
    	//document.getElementById('cell_' + curCell).value = board[x][y];
    	if(origBoard[x][y] == 0 && board[x][y] < 9) {
    		direction = 1
    		board[x][y]++;
            document.getElementById('cell_' + curCell).value = board[x][y];
    		if(!doubles(board, board[x][y], x, y))
    			curCell++;
    	}
    	else if(origBoard[x][y] == 0) {
    		board[x][y] = 0
    		curCell--;
    		direction = -1
    	}
    	else {
    		if(direction == 1)
    			curCell++;
    		else
    			curCell--;
    	}
    }

    // for(i = 0; i < 81; i++) {
    // 	x = xcoord[i];
    // 	y = ycoord[i];
    // 	document.getElementById('cell_' + i).value = board[x][y];
    // }

    var after = Date.now();
    console.log("Time: " + (after - before) + " milliseconds");
}

function doubles(board, val, x, y) {
	//check row for doubles
	for(i = 0; i < 9; i++) {
		if(i != y && board[x][i] == val)
			return true
	}
	//check column for doubles
	for(i = 0; i < 9; i++) {
		if(i != x && board[i][y] == val)
			return true
	}
	//check box for doubles
	var xmod = x
	var ymod = y
	while(xmod != 0 && xmod != 3 && xmod != 6)
		xmod--;
	while(ymod != 0 && ymod != 3 && ymod != 6)
		ymod--;
	for(i = 0; i < 3; i++){
		if(ymod + i != y && board[x][ymod + i] == val)
			return true
		if(xmod + i != x && board[xmod + i][y] == val)
			return true
	}
	return false
}





