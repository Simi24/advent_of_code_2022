//firsth row: A = rock, B = paper, C = scissor -> OPPONENT
//second row: X = rock, Y = paper, Z = scissor

// rock = 1 points, paper = 2 points, scissor = 3 points
// win = 6 points, draw = 3 points, lose = 0 points

import { readFile } from 'fs';

let array = [];

readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(typeof data);
  array = data.split("\n")
  console.log(array[1].split(" "))

  let chosePoints = 0;
  let manchePoints = 0

  for(let i = 0; i < array.length; i++){
    let handle = array[i].split(" ");

    if(handle[1] == 'X'){
        chosePoints += 1;
        if(handle[0] == 'A'){
            manchePoints += 3;
        } else if(handle[0] == 'C'){
            manchePoints += 6
        }
    } else if(handle[1] == 'Y'){
        chosePoints += 2;
        if(handle[0] == 'A'){
            manchePoints += 6;
        } else if(handle[0] == 'B'){
            manchePoints += 3
        }
    } else if(handle[1] == 'Z'){
        chosePoints += 3;
        if(handle[0] == 'B'){
            manchePoints += 6;
        } else if(handle[0] == 'C'){
            manchePoints += 3
        }
    }
  }

  console.log(chosePoints, manchePoints, 'sum: ', (chosePoints + manchePoints))

    //firsth row: A = rock, B = paper, C = scissor -> OPPONENT
    //second row: X = lose, Y = draw, Z = win

    // rock = 1 points, paper = 2 points, scissor = 3 points
    // win = 6 points, draw = 3 points, lose = 0 points

    let chosePoints1 = 0;
    let matchPoints = 0;

    for(let i = 0; i < array.length; i++){
        let handle = array[i].split(" ");

        if(handle[1] == 'X'){
            if(handle[0] == 'A'){
                chosePoints1 += 3;
            } else if(handle[0] == 'B'){
                chosePoints1 += 1
            } else if(handle[0] == 'C'){
                chosePoints1 += 2
            }
        } else if(handle[1] == 'Y'){
            matchPoints += 3;
            if(handle[0] == 'A'){
                chosePoints1 += 1;
            } else if(handle[0] == 'B'){
                chosePoints1 += 2
            } else if(handle[0] == 'C'){
                chosePoints1 += 3
            }
        } else if(handle[1] == 'Z'){
            matchPoints += 6;
            if(handle[0] == 'A'){
                chosePoints1 += 2;
            } else if(handle[0] == 'B'){
                chosePoints1 += 3
            } else if(handle[0] == 'C'){
                chosePoints1 += 1
            }
        }

    }

    console.log(chosePoints1, matchPoints, 'sum: ', (chosePoints1 + matchPoints))

})
