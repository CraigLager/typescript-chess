import { BoardSquare } from '../BoardSquare';
import { IBoard } from '../IBoard';
import {IPiece} from '../IPiece';

export abstract class PieceBase implements IPiece
{
    constructor(color:string, type:string)
    {
        this.color = color;
        this.type = type;
    }
    abstract possibleMoves(board: IBoard, currentSquare: BoardSquare): BoardSquare[];
    readonly color: string;
    readonly type: string;

    
    
}