import { format, parseISO } from "date-fns";
import { IMatches } from "../interfaces/matches";
import api from "./api";

class Matches {
  async getAllMatches(): Promise<IMatches[]> {
    const res = await api.get("match");
    const sortedMatches = res.data.sort((a: any, b: any) => {
      const dateA = parseISO(a.date);
      const dateB = parseISO(b.date);
      return dateA.getTime() - dateB.getTime();
    });

    const formattedMatches = sortedMatches.map((match: any) => ({
      ...match,
      date: format(parseISO(match.date), "dd/MM/yyyy"),
    }));

    return formattedMatches;
  }
  async getMatcheById(teamId: number): Promise<IMatches[]> {
    const res = await api.get(`match/${teamId}`);
    const sortedMatches = res.data.sort((a: any, b: any) => {
      const dateA = parseISO(a.date);
      const dateB = parseISO(b.date);
      return dateA.getTime() - dateB.getTime();
    });
    const formattedMatches = sortedMatches.map((match: any) => ({
      ...match,
      date: format(parseISO(match.date), "dd/MM/yyyy"),
    }));
    return formattedMatches;
  }
}

const matches = new Matches();
export default matches;
