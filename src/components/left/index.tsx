import { Match } from '../match';

import { Titulo } from '../../styles/theme';

interface LeftProps {
    theme: string
    teamSelected: number | null
}

export function Left({ theme, teamSelected }: LeftProps) {
    return (
        <div>
            <Titulo theme={theme}>Partidas</Titulo>

            <Match teamSelected={teamSelected} theme={theme} />
        </div>
    )
}