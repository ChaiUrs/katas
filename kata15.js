
var generateBoard = function(whiteQueen, blackQueen)
{
  var board = [];
  var row_size = 8;
  var column_size = 8;
  {
    for (var i = 0; i < row_size; i++)
    {
      board [i] = [];
      for (var j = 0; j < column_size; j++)
      {
        board[i][j] = 0;
      }
    }
    board [whiteQueen[0]] [whiteQueen[1]] = 1;
    board [blackQueen[0]] [blackQueen[1]] = 1;
    return board;
  }
};

var queenThreat = function(chess_board)
{
  var queen_position = [];
  var danger;
  var k = 0;
  
  for (var i = 0; i < chess_board.length; i++)
  {
    for (var j = 0; j < chess_board[0].length; j++)
    {
      if (chess_board[i][j] === 1)
      {
        queen_position[k] = [i, j];
        k++;
      }
    }
  }
  if ((queen_position[1][0] === queen_position[0][0]) || (queen_position[0][1] === queen_position[1][1]) ||
  (Math.abs(queen_position[0][0] - queen_position[0][1])) === Math.abs(queen_position[1][0] - queen_position[1][1]))
  {
    danger = "threat_to_queen = true";
  }
  else
  {
    danger = "threat_to_queen = false";
  }
  return danger;
};
var whiteQueen = [0, 5];
var blackQueen = [5, 0];
var generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
