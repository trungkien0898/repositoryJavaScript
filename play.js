export function play(tom, jerry) {
    let round = 1;
    while(tom.isAlive() && jerry.isAlive()) {
        console.log(round);
        if(round % 2 === 0) {
            console.log(jerry.attack(tom));
        }else {
            console.log(tom.attack(jerry));
        }
        round++;
    }
}