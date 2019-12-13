import { Mission } from "./mission";
import { JSONFileManager } from "./JSONFileManager";

export class MissionManager {

    protected fileManager: JSONFileManager;
    protected fileName: string = "bd.json";

    constructor(){
        this.fileManager = new JSONFileManager(this.fileName);
    }

    public saveMissionToBD(newMission: Mission): void {
        let tempMissions: Mission[] = this.loadMissionsFromBD();        
        tempMissions.push(newMission);
        this.fileManager.writeObjetcToFile(tempMissions);
        console.log("Missão cadastrada com sucesso!");
    }

    public loadMissionsFromBD(): Mission[] {
        let tempMissions: Mission[] = [];
        try {
            tempMissions = this.fileManager.getObjectFromFile();
        }catch(e){}; //se quiser saber o erro, imprimir o 'e'
        return tempMissions;
    }
}