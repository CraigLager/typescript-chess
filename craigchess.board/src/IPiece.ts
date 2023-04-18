import { BoardSquare } from "./BoardSquare";
import { IBoard } from "./IBoard";

export interface IPiece{
    readonly color:string;
    readonly type : string;
    possibleMoves(board : IBoard, currentSquare : BoardSquare) : BoardSquare[];

}