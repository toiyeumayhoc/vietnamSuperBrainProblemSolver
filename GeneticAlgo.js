class GeneticAlgo {

    constructor(result) {
        this.result = result;
        this.insta = 1000;
        this.deathRate = 0.8*this.insta;
        this.mazes = [this.insta];
        for(let i = 0; i< this.insta; i++) {
            this.mazes[i] = new Maze(result);
        }

    }



    selection(){
        for(let i = 0 ; i < this.insta; i++){
            this.mazes[i].calculateScore(this.result);
        }
        this.mazes.sort((a, b) => a.score - b.score);
        for(let i = this.mazes.length - this.deathRate; i<this.mazes.length; i++){
            this.mazes[i].score = -1;
        }
    }

    crossOverAndMutation(){
        let maxRan = this.mazes.length - this.deathRate;
        for(let i = 0; i < this.deathRate; i++){
            let far = this.getRanAlive(maxRan);
            let mom = this.getRanAlive(maxRan);
            this.mazes[this.mazes.length-i-1].crossOverAndMutation(far,mom);
        }
    }

    getRanAlive(maxRan){
        let ran = Math.floor(Math.random() * maxRan) ;
        while(this.mazes[ran].score==-1){
            ran = Math.floor(Math.random() * maxRan) ;
        }
        return this.mazes[ran];
    }

    showMap(){

    }

}