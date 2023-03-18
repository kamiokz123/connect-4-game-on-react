export const IsWinner = (arr_, id_, player_) => {
    const board = [...arr_];
    board[id_] = player_;
    const winners = [
        [0, 1, 2, 3],
        [0, 4, 8, 12],
        [3, 7, 11, 15],
        [12, 13, 14, 15],
        [4, 5, 6, 7],
        [8, 9, 10, 11],
        [1, 5, 9, 13],
        [2, 6, 10, 14],
        [0, 5, 10, 15],
        [3, 6, 9, 12]
    ];

    for (let i = 0; i < winners.length; i++) {
        const [a1, a2, a3, a4] = winners[i];

        if (board[a1] > 0 &&
            board[a1] === board[a2] &&
            board[a2] === board[a3] &&
            board[a3] === board[a4]
        ) {
            return true;
        }
    }
    return false;
}


export const isDraw = (_arr, _id, _player) => {
    let board = [..._arr];
    board[_id] = _player;
    let count = board.reduce((acc, num) => {
        return acc + (num === 0)
    }, 0);
    return count === 0;
}

const getMove = (_arr) => {
    let validMove = [];
    for (let i = 0; i < _arr.length; i++) {
        if (_arr[i] === 0) {
            validMove.push(i);
        }
    }
    const randomNum = Math.floor(Math.random() * validMove.length);
    return validMove[randomNum];
}

const smart_move_checker = (_arr, check) => {
    for (let i = 0; i < check.length; i++) {
        for (let j = 0; j < check[i].max; j += check[i].step) {
            const series = _arr[j + check[i].indexes[0]].toString() +
                _arr[j + check[i].indexes[1]].toString() +
                _arr[j + check[i].indexes[2]].toString() +
                _arr[j + check[i].indexes[3]].toString();

            switch (series) {
                case "1110":
                case "2220":

                    return j + check[i].indexes[3];

                case "1101":
                case "2202":

                    return j + check[i].indexes[2];
                case "1011":
                case "2022":

                    return j + check[i].indexes[1];

                case "0111":
                case "0222":

                    return j + check[i].indexes[0];

                default:
            }
        }
    }
    return -1;
}

export const smartMove = (arr_) => {
    let check = [
        {
            indexes: [0, 4, 5, 12],
            max: 4,
            step: 1
        },
        {
            indexes: [0, 1, 2, 3],
            max: 16,
            step: 4
        },
        {
            indexes: [0, 5, 10, 15],
            max: 16,
            step: 16
        },
        {
            indexes: [3, 6, 9, 12],
            max: 16,
            step: 16
        }
    ]

    let position = smart_move_checker(arr_,check);
    if (position > -1) return position;
    return getMove(arr_);

}