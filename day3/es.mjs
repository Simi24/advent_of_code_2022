
import { readFile } from 'fs';

const digit = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']




readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    let array = data.split("\n")


    let firstElf = (array[0].slice(0, (array[0].length / 2))).split("");
    let secondElf = (array[0].slice((array[0].length / 2), array[0].length)).split("");



    let priority = 0;

    for(let i = 0; i<array.length; i++){
        let firstElf = (array[i].slice(0, (array[i].length / 2))).split("");
        let secondElf = (array[i].slice((array[i].length / 2), array[i].length)).split("");
        let char = '';
        for(let j = 0; j<firstElf.length; j++){
            
            for(let k = 0; k<firstElf.length; k++){
                if(firstElf[j] == secondElf[k]){

                    char = firstElf[j]
                }
            }
        }
        priority += (digit.indexOf(char) + 1)

    }

    console.log('Total priority: ', priority)

    let priority2 = 0;

    for(let i = 0; i<array.length - 3; i = i +3){
        let helper = (array[i] +'\n' + array[i+1] +'\n' + array[i+2]).split('\n')
        
        
        let char = '';
        
        for(let index = 0; index<helper.length; index++){
            let first = (helper[0]).split("");
            let second = (helper[1]).split("");
            let third = (helper[2]).split("");

            let arrays = [];
            arrays.push(first);
            arrays.push(second)
            arrays.push(third)
            

            var result = arrays.shift().reduce(function(res, v) {
              if (res.indexOf(v) === -1 && arrays.every(function(a) {
                  return a.indexOf(v) !== -1;
              })) res.push(v);
              return res;
          }, []);
        }

        priority2 += (digit.indexOf(result[0]) + 1)

    }

    console.log('Total priority2: ', priority2)
})
