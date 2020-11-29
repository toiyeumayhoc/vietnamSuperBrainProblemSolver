class Maze {

    constructor(result) {
        this.map = new Array(8);
        this.initMaze(result);
        this.score = -1;
    }

    initMaze(result) {
        for (let i = 0; i < 8; i++) {
            this.map[i] = new Array(8);
            for (let j = 0; j < 8; j++) {
                //random number from 1 to sum number
               this.map[i][j] = Math.floor(Math.random() * (result-1)) +1;
            }
        }
    }

    calculateScore(result){
        this.score = 0;
        for (let i = 0; i < 8; i++) {
            let total = 0;
            for (let j = 0; j < 8; j++) {
               total += this.map[i][j];
            }
            this.score += Math.abs(result- total);
        }
        for (let i = 0; i < 8; i++) {
            let total = 0;
            for (let j = 0; j < 8; j++) {
                total += this.map[j][i];
            }
            this.score += Math.abs(result- total);
        }
    }

    crossOverAndMutation(far, mom){
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                this.map[i][j] =  Math.floor((far.map[i][j] + mom.map[i][j])/2);
                if(far.map[i][j]!=mom.map[i][j]){
                    let randNum = Math.floor(Math.random() * 4) ;
                    if(randNum%2==0){
                        this.map[i][j] +=2;
                    } else {
                        this.map[i][j] -= 2;
                    }
                } else {
                    let randNum = Math.floor(Math.random() * 100)
                    if(randNum===51){
                        this.map[i][j] +=1;
                    } else if(randNum===52){
                        this.map[i][j] -=1;
                    }
                }
                if(this.map[i][j]<=0){
                    this.map[i][j] =  1;
                }

            }
        }
    }

    show(){
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                let cell = document.getElementById("textx"+i+"y"+j);
                cell.innerHTML = this.map[i][j];
            }
        }
    }



}