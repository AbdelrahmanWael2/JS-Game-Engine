export class Game{
  drawer(state){
  }
  controller(state,move){
  }
  setState(state) {
    this.state = { ...this.state, ...state };
  }
  drawGameBoard(rowNum, colNum){
    const board = document.querySelector('.board');
    if (board) {
        board.remove();  
    }

    const cells = [];
    for (let row = 0; row < rowNum; row++) {
        for (let col = 0; col < colNum; col++) {
          if((row % 2 === 0 && col % 2 === 0) || (row % 2 === 1 && col % 2 === 1)){
            cells.push(
              <div key={`${row}-${col}`}
              name="white"
              className="cell"
              id={`${row}${col}`} />
          );
          }else{
            cells.push(
              <div key={`${row}-${col}`}
              name="black"
              className="cell"
              id={`${row}${col}`} />
          );
          }  
        }
    }
    return (
        <div className="board">
          {cells}
        </div>
    );
  }
}
export default Game