import { BoardSquare } from "./BoardSquare";

interface IBoard
{
    initialize():void;
    getPiece(square:BoardSquare)
}

export {IBoard}