import { useState } from 'react'

import { Header, Logo, MainContainer, SubContainer } from '../../styles/theme'
import '../../styles/general.css'

import { Right } from '../../components/right'
import { Left } from '../../components/left'
import logo from '../../assets/logo.png'

export function Home() {
    const [selectedTeam, setSelectedTeam] = useState<number | null>(null);
    const [selectedTheme, setSelectedTheme] = useState<string>('light');

    const handleTeamSelected = (teamId: number | null) => {
        setSelectedTeam(teamId);
    };

    const handleSelectedTheme = (theme: string) => {
        setSelectedTheme(theme);
    };

    return (
        <>
            <Header>
                <Logo src={logo} alt="logo" />
            </Header>
            <MainContainer theme={selectedTheme}>
                <SubContainer theme={selectedTheme}>
                    <Left theme={selectedTheme} teamSelected={selectedTeam} />
                    <Right teamSelected={handleTeamSelected} selectTheme={handleSelectedTheme} />
                </SubContainer>
            </MainContainer>
        </>
    );
}