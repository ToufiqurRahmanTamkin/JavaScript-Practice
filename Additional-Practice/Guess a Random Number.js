function guessNumber() {

    const random = Math.floor(Math.random() * 10) + 1;

    let number = 3;

    while (number !== random) {
        number = 3;
    }

    if (number == random) {
        console.log('You guessed the correct number.');
    }else{
        console.log('You guessed the wrong number.');
    }

}


guessNumber();