import { readFile } from 'fs';

readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(typeof data);
    let array = data.split("\n")
    console.log(array.length)
    let row = (array[999].split(","))
    let first = row[0].split('-')
    let firsElement = parseInt(first[0])
    console.log(firsElement )

    //if secondo numero prima coppia < del primo seconda coppia non si possono contenere
    //primo numero prima coppia <= primo numero seconda coppia && secondo numero prima coppia >= secondo numero seconda coppia
    // || primo numero seconda coppia <= primo numero prima coppia && secondo numero seconda coppia >= secondo numero prima coppia

    let count = 0;
    let count2 = 0;

    for(let i = 0; i < array.length; i++){
        let row = (array[i].split(','));

        let firstCouple = row[0].split('-')
        let firsElementFirstCouple = parseInt(firstCouple[0])
        let secondElementFirstCouple = parseInt(firstCouple[1])
        let seconCouple = row[1].split('-')
        let firstElementSecondCouple = parseInt(seconCouple[0])
        let secondElementSecondCouple = parseInt(seconCouple[1])

        if((firsElementFirstCouple <= firstElementSecondCouple && secondElementFirstCouple >= secondElementSecondCouple) || (firstElementSecondCouple <= firsElementFirstCouple && secondElementSecondCouple >= secondElementFirstCouple)){
            count++;
        }

        if((secondElementFirstCouple < firstElementSecondCouple) || (secondElementSecondCouple < firsElementFirstCouple)){
            count2++
        }

    }

    console.log('Couples fully contain: ', count, 'couples not fully contain: ',  (1000 - count2))


    //Couple not fully contain: tot couples - distint couples
})