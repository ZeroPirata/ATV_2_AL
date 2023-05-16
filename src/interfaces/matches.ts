export interface IMatches {
  id: number;
  date: string;
  host: {
    id: number;
    name: string;
  };
  visitor: {
    id: number;
    name: string;
  };
}
