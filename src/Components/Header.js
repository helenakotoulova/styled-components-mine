import React from "react";
import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled";
import { StyledButton } from "./styles/Button.styled";
import { AppContainer } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";

function Header() {
  return (
    <StyledHeader bg="violet">
      <AppContainer>
        <Nav>
          <Logo src="./images/logo.svg" alt="" />
          <StyledButton buttonLabel="Try it for free"></StyledButton>
        </Nav>
        <Flex>
          <div>
            <h1>Build the community</h1>
            <p>
              Lorem ipsum (zkráceně lipsum) je označení pro standardní
              pseudolatinský text užívaný v grafickém designu a navrhování jako
              demonstrativní výplňový text při vytváření pracovních ukázek
              grafických návrhů (např. internetových stránek, rozvržení časopisů
              či všech druhů reklamních materiálů). Lipsum tak pracovně
              znázorňuje text v ukázkových maketách (tzv. mock-up) předtím, než
              bude do hotového návrhu vložen smysluplný obsah. Pokud by se pro
              stejný účel použil smysluplný text, bylo by těžké hodnotit pouze
              vzhled, aniž by se pozorovatel nechal svést ke čtení obsahu. Pokud
              by byl naopak použit nesmyslný, ale pravidelný text (např.
              opakování „asdf asdf asdf…“), oko by při posuzování vzhledu bylo
              vyrušováno pravidelnou strukturou textu, která se od běžného textu
              liší. Text lorem ipsum na první pohled připomíná běžný text, slova
              jsou různě dlouhá, frekvence písmen je podobná běžné řeči,
              interpunkce vypadá přirozeně atd.
            </p>
            <StyledButton buttonLabel='Start for free'></StyledButton>
            <Image src='./images/illustration-mockups.svg'/>
          </div>
        </Flex>
      </AppContainer>
    </StyledHeader>
  );
}

export default Header;
