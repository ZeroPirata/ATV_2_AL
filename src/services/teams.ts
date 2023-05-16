import { ITeams } from "../interfaces/team";
import api from "./api";

class Teams {
  async getAllMatches(): Promise<ITeams[]> {
    return api.get(`http://localhost:3004/team`).then((res: any) =>
      res.data.sort((a: any, b: any) => {
        const valueA = a.name.toLowerCase();
        const valueB = b.name.toLowerCase();

        return valueA.localeCompare(valueB);
      })
    );
  }
}

const team = new Teams();
export default team;
