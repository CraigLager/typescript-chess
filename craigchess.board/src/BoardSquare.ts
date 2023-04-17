export class BoardSquare
{
    rank:number;
    file:string;

    constructor (rank:number, file:string)
    {
        file = file.toLowerCase();

        if(rank > 8 || rank < 0)
        {
            throw new Error("invalid rank");
        }

        if(file < "a" || file > "f")
        {
            throw new Error("invalid file");
        }

        this.file = file;
        this.rank = rank;
    }
}