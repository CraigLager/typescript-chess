import { IBoard } from "./IBoard";

export class Board implements IBoard
{
    initialize(): void {
        console.log("hi");
        throw new Error("Method not implemented.");
        
    }
    getPiece() {
        throw new Error("Method not implemented.");
    }
    
}