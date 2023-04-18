import {Board} from "../../craigchess.board/src";

let x = new Board;
x.initialize();

x.squares.forEach(square => {
    //console.log(square.name);

    console.log(square.name + ":" + (square.piece  == null ? "" : square.piece.color + " " + square.piece.type));
});