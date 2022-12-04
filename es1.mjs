import { readFile } from 'fs';

let array = [];

readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(typeof data);
  array = data.split("\n\n")
  console.log(array[1].split('\n')[1])

  let arrayResult = []

  for(let i = 0; i < array.length; i++){
    let sum = 0;

    let support = array[i].split('\n')

    for(let j = 0; j < support.length; j++){
      sum += parseInt(support[j])
    }

    arrayResult.push(sum);
    sum = 0;
  }

  console.log(arrayResult[0])

  let maxVal = 0

  for(let k = 0; k < arrayResult.length; k++){
    if(arrayResult[k] > maxVal){
      maxVal = arrayResult[k]
    }
  }

  console.log(maxVal)

  let firsth = 0;

  let second = 0;

  let third = 0;

  for(let x = 0; x < arrayResult.length; x++){
    if(arrayResult[x] > firsth){
      third = second;
      second = firsth;
      firsth = arrayResult[x];
    } else if(arrayResult[x] > second){
      third = second;
      second = arrayResult[x];
    } else if(arrayResult[x] > third){
      third = arrayResult[x];
    }

 
  }

  console.log(firsth, second, third, 'the sum: ', (firsth + second + third))
});

