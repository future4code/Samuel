export class Paper {

    private size: PaperSizes;
    private pType: PaperTypes;

    constructor(size: string, pType: string){
        if(!(size in PaperSizes)){
            throw new Error("Tamanho de papel inválido.");
        }
        if(!(pType in PaperTypes)){
            throw new Error("Tipo de papel inválido.");
        }
        this.size = size as PaperSizes;
        this.pType = pType as PaperTypes;
    }; 
    
    public calculateSizePrice(size: string): number{
        switch(size) {
            case "13x18":
                return 20;
            case "21x30":
                return 27.8;
            case "30x30":
                return 35.4;
            case "30x42":
                return 42.3;
            case "42x60":
                return 55.6;
            default:
                throw new Error("Tamanho inválido de papel.");
        }
    }

    private calculateTypePrice(type: string): number{
        switch(type) {
            case "BRILHANTE":
                return 1;
            case "FOSCO":
                return 1.05;
            case "FIBRA":
                return 1.12;
            case "RESINADO":
                return 1.42;
            case "PEROLA":
                return 1.53;
            default:
                throw new Error("Tipo inválido de papel.");
        }
    }

    public calculatePrice(size: string, type: string): number{
        return (this.calculateSizePrice(size) * this.calculateTypePrice(type));
    }

    public getPaperSize(){
        return this.size;
    }
    public getPaperType(){
        return this.pType;
    }
}

export enum PaperSizes {
    "13x18" = "13x18",
    "21x30" = "21x30",
    "30x30" = "30x30",
    "30x42" = "30x42",
    "42x60" = "42x60"
}

export enum PaperTypes {
    BRILHANTE = "BRILHANTE",
    FOSCO = "FOSCO",
    FIBRA = "FIBRA",
    RESINADO = "RESINADO",
    PEROLA = "PEROLA"
}