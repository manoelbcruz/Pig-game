# 🎲 Pig Game (Jogo do Porco)

Pig Game é um jogo de dados simples e divertido para dois jogadores. Este projeto foi desenvolvido como um exercício prático para aprofundar meus conhecimentos em JavaScript, focando principalmente no gerenciamento de estado, manipulação do DOM e lógica condicional complexa.

![Demonstração do Pig Game](aqui_voce_coloca_o_link_do_seu_gif.gif)

## 룰 Regras do Jogo

O objetivo é ser o primeiro jogador a atingir **100 pontos**.

1.  **Rolar o Dado (`Roll Dice`):** Em seu turno, o jogador rola um dado quantas vezes quiser. O valor de cada rolagem é somado a uma pontuação temporária (`Current Score`).
2.  **O Risco do Número 1:** Se o jogador rolar o número **1**, ele perde toda a sua pontuação temporária (`Current Score`) e sua vez é passada imediatamente para o adversário.
3.  **Guardar os Pontos (`Hold`):** O jogador pode escolher "guardar" (`Hold`) sua pontuação temporária a qualquer momento. Ao fazer isso, a pontuação `Current Score` é somada à sua pontuação total e a vez é passada para o adversário.
4.  **Novo Jogo (`New Game`):** O botão "New Game" reinicia a partida, zerando todas as pontuações e definindo o Jogador 1 como o primeiro a jogar.

## ✨ Funcionalidades

-   **Alternância de Jogador:** O jogo alterna visualmente e logicamente qual jogador está ativo.
-   **Geração de Dados:** Uma imagem de dado correspondente ao número rolado é exibida a cada jogada.
-   **Gerenciamento de Pontuação:** O jogo controla tanto a pontuação temporária quanto a pontuação total de cada jogador.
-   **Condição de Vitória:** O jogo detecta automaticamente quando um jogador atinge 100 pontos ou mais e declara o vencedor.
-   **Reinício do Jogo:** A funcionalidade de "Novo Jogo" permite que os jogadores comecem uma nova partida a qualquer momento.

## 🛠️ Tecnologias Utilizadas

-   **HTML5:** Estrutura semântica para o tabuleiro e os controles do jogo.
-   **CSS3:** Estilização do layout, dos jogadores, dos botões e do estado de "jogador ativo".
-   **JavaScript:** Toda a lógica do jogo, incluindo rolagem de dados, gerenciamento de estado, alternância de turnos e condições de vitória.

## 🧠 Aprendizados

Este projeto foi um desafio gratificante que me permitiu praticar conceitos essenciais de JavaScript:

-   **Gerenciamento de Estado:** Utilização de variáveis para controlar o jogador ativo, as pontuações e o estado do jogo (se está em andamento ou finalizado).
-   **Lógica Condicional Avançada:** Implementação de múltiplas condições (`if`/`else if`/`else`) para determinar as regras do jogo, como rolar o número 1, a condição de vitória e a troca de turnos.
-   **Manipulação do DOM:** Atualização dinâmica de textos (pontuações) e manipulação de classes CSS para indicar o jogador ativo e o vencedor.
-   **Event Listeners:** Captura de eventos de clique nos botões "Roll Dice", "Hold" e "New Game" para acionar as funções correspondentes.
-   **Organização de Código:** Estruturação da lógica em funções claras e com responsabilidades bem definidas (ex: `trocarJogador()`, `iniciarJogo()`, etc.), tornando o código mais legível e fácil de manter.
