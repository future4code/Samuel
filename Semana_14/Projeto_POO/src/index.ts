import { WebMission } from "./webMission";
import * as moment from 'moment';
import { MissionManager } from "./missionManager";

class MainTaskManager {

    public execute(): void {

        console.log("Bem vindo ao F4 System!!");

        const missionManager = new MissionManager();

        const turmaNewton = new WebMission(moment("02/08/2019").format("DD/MM/YYYY"), "20/03/2020", "Newton");
        const turmaBoumann = new WebMission(moment("02/10/2019").format("DD/MM/YYYY"), "20/06/2020", "Boumann");
        missionManager.saveMissionToBD(turmaNewton);
        missionManager.saveMissionToBD(turmaBoumann);

        let turmasCadastradas = missionManager.loadMissionsFromBD();
        console.log("Turmas cadastradas:", turmasCadastradas);
    }
}

new MainTaskManager().execute();