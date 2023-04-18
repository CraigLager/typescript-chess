import { IPiece } from "./IPiece";

export class BoardSquare
{
    readonly rank:number;
    readonly file:number;
    readonly fileLetter:string;
    readonly name : string;
    piece : IPiece;

    constructor (rank:number, file:number)
    {

        if(rank < 0 || rank > 8)
        {
            throw new Error("invalid rank");
        }

        if(file < 0 || file > 8)
        {
            throw new Error("invalid file");
        }

        this.file = file;
        this.rank = rank;
        this.fileLetter = String.fromCharCode(96 + file);
        this.name = this.rank + this.fileLetter;
    }

    equals(rankFile:string) : boolean
    {
        if(rankFile.length != 2)
        {
            throw new Error(rankFile + " is an invalid square reference");
            
        }

        return this.rank.toString() == rankFile[0] && this.fileLetter == rankFile[1];
    }
}