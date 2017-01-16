/**********************************************************************
 *                        TMR hexagone JS                             *
 * Created on  : 18 fév. 2016, 11:29:41                               *
 * Author      : Cyol http://cyol.fr/blog                             *
 * Licence     : CC BY                                                *
 * Description : Fonctions générales                                  *
 * Version     : 0.1                                                  *
 **********************************************************************/
//Adapté de https://github.com/rrreese/Hexagon.js
// Hex math defined here: http://blog.ruslans.com/2011/02/hexagonal-grid-math.html

//On l'appelle Hexagon, mais les cases sont carrée.

function HexagonGrid(canvasId, radius) {
    this.radius = radius;

    this.height = Math.sqrt(3) * radius;
    this.width = 2 * radius;
    this.side = (3 / 2) * radius;

    this.canvas = document.getElementById(canvasId);
    this.context = this.canvas.getContext('2d');

    this.canvasOriginX = 0;
    this.canvasOriginY = 0;
}

HexagonGrid.prototype.drawHexGrid = function (rows, cols, originX, originY, offsetColumn, isDebug) {
    this.canvasOriginX = originX;
    this.canvasOriginY = originY;

    var currentHexX;
    var currentHexY;
    var debugText = "";

    if(typeof offsetColumn === "undefined")
    {
        offsetColumn = false;
    }

    if(typeof isDebug === "undefined")
    {
        isDebug = false;
    }

    for (var col = 0; col < cols; col++) {
        var lignesDansColonne = rows;
        if(offsetColumn)
        {
            lignesDansColonne--;
        }
        for (var row = 0; row < lignesDansColonne; row++) {

            currentHexX = (col * this.radius) + originX;
            currentHexY = (row * this.radius) + originY;
            if (offsetColumn) {
                currentHexY += (this.radius / 2);
            }

            if (isDebug) {
                debugText = col + "," + row;
            }

            this.drawHex(currentHexX, currentHexY, "#fff", debugText);
        }
        offsetColumn = !offsetColumn;
    }
};

HexagonGrid.prototype.drawHexAtColRow = function(col, row, color, offsetColumn, text)
{
    if(typeof offsetColumn === "undefined")
    {
        offsetColumn = false;
    }
    if(typeof text === 'undefined')
    {
        text = "";
    }
    var drawx = (col * this.radius) + this.canvasOriginX;
    var drawy = (row * this.radius) + this.canvasOriginY;
    if(offsetColumn && Math.abs(col) % 2 === 0 || !offsetColumn && Math.abs(col) % 2 === 1) {
        drawy += (this.radius / 2);
    }

    this.drawHex(drawx, drawy, color, text);
};

HexagonGrid.prototype.drawContentHexAtColRow = function(col, row, notation, type, lblType, nom, image, offsetColumn)
{
    if(typeof offsetColumn === "undefined")
    {
        offsetColumn = false;
    }
    var drawx = (col * this.radius) + this.canvasOriginX;
    var drawy = (row * this.radius) + this.canvasOriginY;
    if(offsetColumn && Math.abs(col) % 2 === 0 || !offsetColumn && Math.abs(col) % 2 === 1) {
        drawy += (this.radius / 2);
    }
    this.context.font = "11px Arial";
    this.context.textAlign="center";
    this.context.fillStyle = "#000";
    if(typeof image !== "undefined")
    {
        this.context.drawImage(image, drawx+1, drawy+15);
        if(type === 'pont')
        {
            //on change couleur pour écrire
            this.context.fillStyle = "#0F0";
        }
    }
    else
    {
        //SI pas d'image, on est case humide, on change couleur pour écrire
        this.context.fillStyle = "#0F0";
    }
    this.context.fillText(lblType, drawx + (this.radius / 2), drawy + 10);
    this.context.font = "9px Arial";
    this.context.fillText(nom, drawx + (this.radius / 2), drawy + this.radius - 2);
    this.context.font = "8px Arial";
    this.context.fillStyle = "#F00";
    this.context.textAlign="start";
    this.context.fillText(notation, drawx +1, drawy + 20);

};

HexagonGrid.prototype.drawHex = function(x0, y0, fillColor, debugText) {
    this.context.strokeStyle = "#000";
    this.context.beginPath();
    this.context.moveTo(x0, y0);
    this.context.lineTo(x0 + this.radius, y0);
    this.context.lineTo(x0 + this.radius, y0 + this.radius);
    this.context.lineTo(x0, y0 + this.radius);
    this.context.lineTo(x0, y0);

    if (fillColor) {
        this.context.fillStyle = fillColor;
        this.context.fill();
    }

    this.context.closePath();
    this.context.stroke();

    if (debugText) {
        this.context.font = "8px";
        this.context.fillStyle = "#000";
        this.context.fillText(debugText, x0 + (this.radius / 2) - (this.radius/4), y0 + (this.radius - 5));
    }
};

//Recusivly step up to the body to calculate canvas offset.
HexagonGrid.prototype.getRelativeCanvasOffset = function() {
    var x = 0, y = 0;
    var layoutElement = this.canvas;
    if (layoutElement.offsetParent) {
        do {
            x += layoutElement.offsetLeft;
            y += layoutElement.offsetTop;
        } while (layoutElement = layoutElement.offsetParent);

        return { x: x, y: y };
    }
};

//Uses a grid overlay algorithm to determine hexagon location
//Left edge of grid has a test to acuratly determin correct hex
HexagonGrid.prototype.getSelectedTile = function(mouseX, mouseY, offsetColumn)
{
    if(typeof offsetColumn === "undefined")
    {
        offsetColumn = false;
    }

    var offSet = this.getRelativeCanvasOffset();

    mouseX -= offSet.x;
    mouseY -= offSet.y;

    var col = Math.floor((mouseX) / this.radius);
    var row = Math.floor((mouseY) / this.radius);
    if(offsetColumn && Math.abs(col) % 2 === 0 || !offsetColumn && Math.abs(col) % 2 === 1)
    {
        row = Math.floor(((mouseY + (this.radius / 2 )) / this.radius)) - 1;
    }

    return  { col: col, row: row };
};

HexagonGrid.prototype.getCoordonnesTileFromCanvasXY = function(x, y, offsetColumn)
{
    if(typeof offsetColumn === "undefined")
    {
        offsetColumn = false;
    }
    return this.getSelectedTile(x - this.canvasOriginX, y - this.canvasOriginY, offsetColumn);
};

HexagonGrid.prototype.getCanvasCoordonneeBasGaucheTile = function(tileColumn,tileRow)
{
    var tile = {
        col  : tileColumn,
        row     : tileRow
    };
    var drawy =Math.abs(tile.col) % 2 == 0 ? (tile.row * this.radius) + this.canvasOriginY : (tile.row * this.radius) + this.canvasOriginY + (this.radius / 2);
    var drawx = (tile.col * this.radius) + this.canvasOriginX;

    return  { drawx: drawx, drawy: drawy };
};
