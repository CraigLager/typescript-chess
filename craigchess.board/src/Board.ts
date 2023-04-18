import { IBoard } from "./IBoard";
import { BoardSquare } from "./BoardSquare";
import { Pawn } from "./Pieces/Pawn";

export class Board implements IBoard
{
    readonly squares : BoardSquare[] = new Array(64);
    
    initialize(): void {
        
        for(let rank = 1; rank < 9; rank++)
        {
            for(let file = 1; file < 9; file++)
            {
                const newSquare = new BoardSquare(rank, file)

                if(rank == 2)
                {
                    newSquare.piece = new Pawn("white");
                }
                if(rank == 7)
                {
                    newSquare.piece = new Pawn("black");
                }

                this.squares.push(newSquare);
            }
        }
        
    }
    getPiece() {
        throw new Error("Method not implemented.");
    }
    
}