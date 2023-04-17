import { BoardSquare } from "./BoardSquare";

export interface IBoard
{
    initialize():void;
    getPiece(square:BoardSquare)
}