const squareStyle = {
  height: '34px',
  width: '34px', 
};

function Square(props) {
		return (
			<button className="square" style={squareStyle} onClick={() => props.onClick()}>
				{props.value}
			</button>
		);
}

class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			squares: Array(42).fill(null),
			xIsNext: true,
		};
	}

  handleClick(i) {
  	const squares = this.state.squares.slice();
  	if (getWinner(squares) || squares[i]) {
  		return;
  	}
  	squares[i] = this.state.xIsNext ? 'X' : 'O';
  	this.setState({
  		squares: squares, 
  		xIsNext: !this.state.xIsNext,
  	});
  }

	renderSquare(i) {
		return (
			<Square value={this.state.squares[i]} 
			onClick={() => this.handleClick(i)} 
			/>
		);
	}

	render() {
		const winner = getWinner(this.state.squares);
		let status;
		if (winner) {
			status = 'Winner: ' + winner;
		} else {
			status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
		}

		return (
			<div>
				<div className="status">{status}</div>
				<div className="board-row">
				  {this.renderSquare(0)}
				  {this.renderSquare(1)}
				  {this.renderSquare(2)}
				  {this.renderSquare(3)}
				  {this.renderSquare(4)}
				  {this.renderSquare(5)}
				  {this.renderSquare(6)}
				</div>
				<div className="board-row">
				  {this.renderSquare(7)}
				  {this.renderSquare(8)}
				  {this.renderSquare(9)}
				  {this.renderSquare(10)}
				  {this.renderSquare(11)}
				  {this.renderSquare(12)}
				  {this.renderSquare(13)}
				</div>
				<div className="board-row">
				  {this.renderSquare(14)}
				  {this.renderSquare(15)}
				  {this.renderSquare(16)}
				  {this.renderSquare(17)}
				  {this.renderSquare(18)}
				  {this.renderSquare(19)}
				  {this.renderSquare(20)}
				</div>
				<div className="board-row">
				  {this.renderSquare(21)}
				  {this.renderSquare(22)}
				  {this.renderSquare(23)}
				  {this.renderSquare(24)}
				  {this.renderSquare(25)}
				  {this.renderSquare(26)}
				  {this.renderSquare(27)}
				</div>
				<div className="board-row">
				  {this.renderSquare(28)}
				  {this.renderSquare(29)}
				  {this.renderSquare(30)}
				  {this.renderSquare(31)}
				  {this.renderSquare(32)}
				  {this.renderSquare(33)}
				  {this.renderSquare(34)}
				</div>
				<div className="board-row">
				  {this.renderSquare(35)}
				  {this.renderSquare(36)}
				  {this.renderSquare(37)}
				  {this.renderSquare(38)}
				  {this.renderSquare(39)}
				  {this.renderSquare(40)}
				  {this.renderSquare(41)}
				</div>
		  </div>
		);
	}
}

class Game extends React.Component {
	render() {
		return (
			<div className="game">
			  <div className="game-board">
			    <Board />
			  </div>
			  <div className="game-info">
			    <div></div>
			    <ol></ol>
			  </div>
			</div>
		);
	}
}

function getWinner(squares) {
	if (checkHorizontal(squares) || checkVertical(squares) || checkDiagonal(squares))
		console.log('winner');
	//check for horizontal winners
	//check for diagonal winners
  //check for vertical winners
  //return winner, else return no winner
  console.log('no winner has been found');
}

function checkHorizontal(squares) {
	// body...
}

function checkVertical(squares) {

}

function checkDiagonal(squares) {

}

ReactDOM.render(<Game />, document.getElementById('app'));