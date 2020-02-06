import { Paper } from "./Paper"; 
// uma entidade está dependendo de outra, no cálculo do valor da borda!!

export class Frame {

    private frameType: FrameTypes;
    private borderSize: BorderSizes;
    
    constructor(fType: string, borderSize: string){
        if(!(fType in FrameTypes)){
            throw new Error("Tipo de moldura inválido.");
        }
        if(!(borderSize in BorderSizes)){
            throw new Error("Tamanho de borda inválida.");
        }
        this.frameType = fType as FrameTypes;
        this.borderSize = borderSize as BorderSizes;
    };

    private calculateFramePrice(type: string): number{
        switch(type) {
            case "CRUA":
                return 15;
            case "LISA":
                return 32;
            case "CLASSICA":
                return 43;
            case "VINTAGE":
                return 52.5;
            case "MADEIRA":
                return 60;
            default:
                throw new Error("Tamanho inválido de moldura.");
        }
    }

    private calculateBorderPrice(paper: Paper, border: string): number{        
        const paperSizePrice = paper.calculateSizePrice(paper.getPaperSize());
        switch(border) {
            case "PEQUENA":
                return paperSizePrice * 0.25;
            case "MEDIA":
                return paperSizePrice * 0.5;
            case "GRANDE":
                return paperSizePrice * 0.75;
            default:
                throw new Error("Tamanho inválido de borda.");
        }
    }

    public calculatePrice(type: FrameTypes, paper: Paper, border: BorderSizes): number{
        return this.calculateFramePrice(type) + this.calculateBorderPrice(paper, border);
    }

    public getFrameType(){
        return this.frameType;
    }
    public getBorderSize(){
        return this.borderSize;
    }

}

export enum FrameTypes {
    CRUA = "CRUA",
    LISA = "LISA",
    CLASSICA = "CLASSICA",
    VINTAGE = "VINTAGE",
    MADEIRA = "MADEIRA"
}

export  enum BorderSizes {
    PEQUENA = "PEQUENA",
    MEDIA = "MEDIA",
    GRANDE = "GRANDE"
}
