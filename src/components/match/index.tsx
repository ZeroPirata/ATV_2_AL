import { useEffect, useState, useCallback } from 'react';

import { ConteudoMatch, TeamContainer, ContainerMatch, MatchContainer, X, MatchCont } from '../../styles/theme';
import matches from '../../services/matches';
import { IMatches } from '../../interfaces/matches';

interface MatchProps {
    theme: string,
    teamSelected: number | null
}

export function Match({ theme, teamSelected }: MatchProps) {
    const [allMatches, setAllMatches] = useState<IMatches[]>([])

    const AllMatches = useCallback(() => {
        matches.getAllMatches().then((res: IMatches[]) => {
            return setAllMatches(res);
        })
    }, [])

    const FindMatchesTeam = useCallback(() => {
        matches.getMatcheById(Number(teamSelected)).then((res: IMatches[]) => {
            return setAllMatches(res)
        })
    }, [teamSelected]);

    useEffect(() => {
        if (teamSelected !== null) {
            FindMatchesTeam();
        } else {
            AllMatches()
        }
    });

    return (
        <TeamContainer>
            <MatchContainer>
                {allMatches.map((match: any) => (
                    <ContainerMatch key={match.id}>
                        <MatchCont>
                            <ConteudoMatch theme={theme}>{`${match.host.name}`}</ConteudoMatch>
                            <X>X</X>
                            <ConteudoMatch theme={theme}>{`${match.visitor.name}`}</ConteudoMatch>
                        </MatchCont>
                        <ConteudoMatch theme={theme}>{match.date}</ConteudoMatch>
                    </ContainerMatch>
                ))}
            </MatchContainer>
        </TeamContainer>
    )
}