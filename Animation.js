class Animation {

    constructor(result) {
        this.al = new GeneticAlgo(result);
    }

    anime(){
        let al = this.al;
        let animate = setInterval(evolution, 10);
        let count = 0;
        function evolution(){
            count++;
            document.getElementById("generationCount").innerHTML = parseInt(document.getElementById("generationCount").innerHTML) + 1;
            // console.log("running");
            if(al.mazes[0].score == 0) {
                document.getElementById("runnow").disabled = false;
                clearInterval(animate);
            }
            al.selection();
            al.crossOverAndMutation();
            al.mazes[0].show();
        }
        // al.mazes[0].show();
    }


}

