var checkerboard = [[null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null]];
function setSquare(player, row, col) {
    var R=[0,0];
    var B=[0,0];
    if (player=='R') {
        R[0]=checkerboard[row+1];
        R[1]=checkerboard[col+1];
        console.log(R);
    }
    if (player=='B') {
        B[0]=checkerboard.indexOf(row);
        B[1]=checkerboard.indexOf(col);
        console.log(R);
    }
}

function getPieceAt(row, col) {
    var piece=checkerboard[row-1];
    piece1=piece[col-1];
    console.log(piece1);
}

function clearBoard() {
    for (var i=0;i<=checkerboard.length;i+=1) {
        checkerboard=checkerboard[i];
        checkerboard.map(function(space) {
            space=null;
            console.log(checkerboard);
        });
    }
}
function setUpRed() {
    for (var i=0;i<=checkerboard[0].length;i+=2) {
        checkerboard[0][i]='R';
    }
    for (var i=1;i<=checkerboard[1].length;i+=2) {
        checkerboard[1][i]='R';
    }
    for (var i=0;i<=checkerboard[2].length;i+=2) {
        checkerboard[2][i]='R';
    }
    checkerboard[1][8]=null;
}

function setUpBlack() {
    for (var i=1;i<=8;i+=2) {
        checkerboard[checkerboard.length-1][i]='B';
    }
    checkerboard[checkerboard.length-1][8]=null;
    for (var i=0;i<=8;i+=2){
        checkerboard[checkerboard.length-2][i]='B';
    }
    for (var i=1;i<=8;i+=2) {
        checkerboard[checkerboard.length-3][i]='B';
    }
    checkerboard[checkerboard.length-3][8]=null;
}
var pieces = { 'red' : [[0,0],[0,2],[0,4],[0,6],[1,1],[1,3],[1,5],[1,7],[2,0],[2,2],[2,4],[2,6]],
'black': [[5,1],[5,3],[5,5],[5,7],[6,0],[6,2],[6,4],[6,6],[7,1],[7,3],[7,5],[7,7]]
};
setUpBlack();
setUpRed();
