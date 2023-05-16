import { useEffect, useState } from 'react'

import { CgDarkMode } from "react-icons/cg"
import { ButtonTheme, Conteudo, TeamContainer, Titulo } from '../../styles/theme'
import team from '../../services/teams';
import { ITeams } from '../../interfaces/team';
interface RightProps {
    selectTheme: (theme: string) => void;
    teamSelected: (team: number | null) => void;
}

export function Right({ selectTheme, teamSelected }: RightProps) {
    const [teams, setTeams] = useState<ITeams[]>([])
    const [selectedTeam, setSelectedTeam] = useState<number | null>(null);
    const [themeSelected, setSelectedTheme] = useState('light');

    const ThemeChange = () => {
        const newTheme = themeSelected === 'light' ? 'dark' : 'light';
        setSelectedTheme(newTheme);
        selectTheme(newTheme);
    };

    useEffect(() => {
        team.getAllMatches().then((res: ITeams[]) => {
            return setTeams(res);
        })
    }, [])

    const handleTeamClick = (teamId: number) => {
        if (teamId === selectedTeam) {
            teamSelected(null);
            setSelectedTeam(null)
        } else {
            setSelectedTeam(teamId)
            teamSelected(teamId);
        }
    };

    return (
        <div>
            <Titulo theme={themeSelected}>Times</Titulo>

            <TeamContainer>
                {teams.map((team: any) => (
                    <div key={team.id}>
                        <Conteudo theme={themeSelected}>
                            <label>
                                <input
                                    value={team.id}
                                    type="checkbox"
                                    checked={Number(team.id) === selectedTeam}
                                    onChange={() => { handleTeamClick(team.id) }}
                                />
                                {team.name}
                            </label>
                        </Conteudo>
                    </div>
                ))}
                <ButtonTheme onClick={ThemeChange}>{themeSelected === 'light' ? <CgDarkMode color='black' size={100} /> : <CgDarkMode color='white' size={100} />}</ButtonTheme>
            </TeamContainer>
        </div>
    )
}