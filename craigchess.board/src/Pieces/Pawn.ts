import { BoardSquare } from "../BoardSquare";
import { IBoard } from "../IBoard";
import { PieceBase } from "./PieceBase";

export class Pawn extends PieceBase
{
    possibleMoves(board: IBoard, currentSquare: BoardSquare): BoardSquare[] {
        throw new Error("Method not implemented.");
    }
    constructor(color:string){
        super(color, "pawn");
    }

    
}