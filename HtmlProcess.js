class HtmlProcess{
    constructor(mazeWidth, mazeHeight){
        this.mazeWidth = mazeWidth;
        this.mazeHeight = mazeHeight;
        this.initMaze();
    }


    initMaze(){
        let mazeDiv = document.getElementById("mainMaze");
        mazeDiv.style.width = this.mazeWidth+"px";
        mazeDiv.style.height = this.mazeHeight+"px";
        mazeDiv.style.border = "3px solid";
        mazeDiv.style.borderColor = "#EF8354";
        mazeDiv.style.display = "table";
        mazeDiv.style.margin = "auto";
        for(let i =0; i<8;i++){
            let cellRow = document.createElement("div");
            cellRow.id = "row"+i;
            cellRow.style.display = "table-row";
            mazeDiv.appendChild(cellRow);
            for(let j =0 ; j<8; j++)
            {
                let cell = document.createElement("div");
                cell.id = "cellx"+i+"y"+j;
                cell.style.display = "table-cell";
                cell.style.width = (this.mazeWidth/8 - 2) + "px";
                cell.style.height = (this.mazeHeight/8 - 2) + "px";
                cell.style.border = "1px solid";
                let textDiv = document.createElement("a");
                textDiv.id = "textx"+i+"y"+j;
                textDiv.className = "aValue";
                textDiv.innerHTML = "0";
                cell.appendChild(textDiv);
                cellRow.appendChild(cell);
            }
        }
    }


}