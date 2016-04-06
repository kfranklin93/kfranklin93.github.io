$(document).ready(function() {
    var $gameCells = $('.cell');
    var moves = ["", "", "", "", "", "", "", ""]
    var count = 0;
    var turn = 'X';
    var switchBoard = 0;
    var scoreX = 0;
    var scoreO = 0;
    $($gameCells).on('click', function() {
        if (switchBoard == 0) {
            $(this).html(turn);
            moves[this.id] = turn;
            turn = (turn == 'X') ? 'O' : 'X';
            count++;
        }
        var getWinner = function() {
            if (winnerIs('X')) {
                scoreX++;
                $("#scoreX").text(scoreX);
                switchBoard = 1;
                return 'X wins';
            }
            if (winnerIs('O')) {
                scoreO++;
                $("#scoreO").text(scoreO);
                switchBoard = 1;
                return 'O wins';
            } else {
                return null;
            }
        }
        var winnerIs = function(turn) {
            return winsRow(turn) || winsCol(turn) || winsDiag(turn)
        }
        var winsRow = function(turn) {
            return allThree(turn, moves[0], moves[1], moves[2]) || allThree(turn, moves[3], moves[4], moves[5]) || allThree(turn, moves[6], moves[7], moves[8]);
        }
        var winsCol = function(turn) {
            return allThree(turn, moves[0], moves[3], moves[6]) || allThree(turn, moves[1], moves[4], moves[7]) || allThree(turn, moves[2], moves[5], moves[8]);
        }
        var winsDiag = function(turn) {
            return allThree(turn, moves[0], moves[4], moves[8]) || allThree(turn, moves[2], moves[4], moves[6]);
        }
        var allThree = function(turn, cell1, cell2, cell3) {
            return (cell1 === turn) && (cell2 === turn) && (cell3 === turn);
        }

        champ = getWinner();

        if (champ !== null) {
            alert(champ);
        }

        function reset() {
            moves = ["", "", "", "", "", "", "", ""]
            count = 0;
            turn = 'X';
            switchBoard = 0;
            $($gameCells).on('click');
        };

        $('#reset').click(function() {
            $(this).on();
            reset();
            $gameCells.html('');
        });

    });
    console.log(moves, count, turn);
});
