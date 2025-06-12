document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Pop-up de Boas-Vindas ---
    const welcomePopup = document.getElementById('welcome-popup');
    const startButton = document.getElementById('start-button');

    startButton.addEventListener('click', () => {
        welcomePopup.style.display = 'none';
        // Inicia o movimento do patinho após o pop-up fechar
        moveDuck();
    });

    // --- 2. Menu Retrátil/Pop-up ---
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('main-nav').querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        if (navLinks.classList.contains('active')) {
            menuToggle.textContent = '✕ Fechar'; // Altera o texto do botão
        } else {
            menuToggle.textContent = '☰ Menu';
        }
    });

    // Fecha o menu quando um link é clicado
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.textContent = '☰ Menu';
        });
    });

    // --- 3. Efeito de Partículas ao Toque/Clique ---
    document.body.addEventListener('click', (e) => {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        document.body.appendChild(particle);

        const size = Math.random() * 10 + 5; // Partículas entre 5px e 15px
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${e.clientX - size / 2}px`;
        particle.style.top = `${e.clientY - size / 2}px`;

        // Remover a partícula após a animação
        particle.addEventListener('animationend', () => {
            particle.remove();
        });
    });

    // --- 4. Patinho Andante ---
    const duck = document.getElementById('duck');
    let currentX = window.innerWidth / 2;
    let currentY = window.innerHeight / 2;
    let targetX, targetY;
    let duckInterval;

    function getRandomCoordinate(max) {
        return Math.random() * (max - 100) + 50; // Evita bordas extremas
    }

    function setDuckNewTarget() {
        targetX = getRandomCoordinate(window.innerWidth);
        targetY = getRandomCoordinate(window.innerHeight);
    }

    function moveDuck() {
        duck.style.display = 'block'; // Mostra o patinho
        setDuckNewTarget();

        duckInterval = setInterval(() => {
            const speed = 2; // Velocidade de movimento do patinho

            let dx = targetX - currentX;
            let dy = targetY - currentY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < speed) {
                currentX = targetX;
                currentY = targetY;
                setDuckNewTarget(); // Define um novo alvo quando atinge o atual
            } else {
                currentX += (dx / distance) * speed;
                currentY += (dy / distance) * speed;
            }

            duck.style.left = `${currentX}px`;
            duck.style.top = `${currentY}px`;

            // Virar o patinho na direção do movimento
            if (dx < 0) {
                duck.style.transform = 'scaleX(-1)'; // Vira para a esquerda
            } else {
                duck.style.transform = 'scaleX(1)'; // Vira para a direita
            }

            // O patinho entra e sai dos cantos da tela em lugares aleatórios
            // Se ele estiver muito perto da borda, force um novo alvo longe da borda
            const padding = 100; // Margem para o patinho não sumir totalmente
            if (currentX < padding || currentX > window.innerWidth - padding ||
                currentY < padding || currentY > window.innerHeight - padding) {
                setDuckNewTarget(); // Garante que ele se mova para longe da borda
            }

        }, 50); // Atualiza a posição a cada 50ms
    }

    // --- 5. Tabela Periódica Didática ---
    const periodicTableContainer = document.getElementById('periodic-table-container');

    const elements = [
        // Linha 1
        { symbol: 'H', name: 'Hidrogênio', number: 1, group: 1, period: 1 },
        { symbol: '', name: '', number: '', group: 0, period: 0 },
        { symbol: '', name: '', number: '', group: 0, period: 0 },
        { symbol: '', name: '', number: '', group: 0, period: 0 },
        { symbol: '', name: '', number: '', group: 0, period: 0 },
        { symbol: '', name: '', number: '', group: 0, period: 0 },
        { symbol: '', name: '', number: '', group: 0, period: 0 },
        { symbol: '', name: '', number: '', group: 0, period: 0 },
        { symbol: '', name: '', number: '', group: 0, period: 0 },
        { symbol: '', name: '', number: '', group: 0, period: 0 },
        { symbol: '', name: '', number: '', group: 0, period: 0 },
        { symbol: '', name: '', number: '', group: 0, period: 0 },
        { symbol: '', name: '', number: '', group: 0, period: 0 },
        { symbol: '', name: '', number: '', group: 0, period: 0 },
        { symbol: '', name: '', number: '', group: 0, period: 0 },
        { symbol: '', name: '', number: '', group: 0, period: 0 },
        { symbol: '', name: '', number: '', group: 0, period: 0 },
        { symbol: 'He', name: 'Hélio', number: 2, group: 18, period: 1 },

        // Linha 2
        { symbol: 'Li', name: 'Lítio', number: 3, group: 1, period: 2 },
        { symbol: 'Be', name: 'Berílio', number: 4, group: 2, period: 2 },
        { symbol: '', name: '', number: '', group: 0, period: 0 }, // Espaço vazio
        { symbol: '', name: '', number: '', group: 0, period: 0 },
        { symbol: '', name: '', number: '', group: 0, period: 0 },
        { symbol: '', name: '', number: '', group: 0, period: 0 },
        { symbol: '', name: '', number: '', group: 0, period: 0 },
        { symbol: '', name: '', number: '', group: 0, period: 0 },
        { symbol: '', name: '', number: '', group: 0, period: 0 },
        { symbol: '', name: '', number: '', group: 0, period: 0 },
        { symbol: '', name: '', number: '', group: 0, period: 0 },
        { symbol: '', name: '', number: '', group: 0, period: 0 },
        { symbol: 'B', name: 'Boro', number: 5, group: 13, period: 2 },
        { symbol: 'C', name: 'Carbono', number: 6, group: 14, period: 2 },
        { symbol: 'N', name: 'Nitrogênio', number: 7, group: 15, period: 2 },
        { symbol: 'O', name: 'Oxigênio', number: 8, group: 16, period: 2 },
        { symbol: 'F', name: 'Flúor', number: 9, group: 17, period: 2 },
        { symbol: 'Ne', name: 'Neônio', number: 10, group: 18, period: 2 },

        // Linha 3
        { symbol: 'Na', name: 'Sódio', number: 11, group: 1, period: 3 },
        { symbol: 'Mg', name: 'Magnésio', number: 12, group: 2, period: 3 },
        { symbol: '', name: '', number: '', group: 0, period: 0 },
        { symbol: '', name: '', number: '', group: 0, period: 0 },
        { symbol: '', name: '', number: '', group: 0, period: 0 },
        { symbol: '', name: '', number: '', group: 0, period: 0 },
        { symbol: '', name: '', number: '', group: 0, period: 0 },
        { symbol: '', name: '', number: '', group: 0, period: 0 },
        { symbol: '', name: '', number: '', group: 0, period: 0 },
        { symbol: '', name: '', number: '', group: 0, period: 0 },
        { symbol: '', name: '', number: '', group: 0, period: 0 },
        { symbol: '', name: '', number: '', group: 0, period: 0 },
        { symbol: 'Al', name: 'Alumínio', number: 13, group: 13, period: 3 },
        { symbol: 'Si', name: 'Silício', number: 14, group: 14, period: 3 },
        { symbol: 'P', name: 'Fósforo', number: 15, group: 15, period: 3 },
        { symbol: 'S', name: 'Enxofre', number: 16, group: 16, period: 3 },
        { symbol: 'Cl', name: 'Cloro', number: 17, group: 17, period: 3 },
        { symbol: 'Ar', name: 'Argônio', number: 18, group: 18, period: 3 },

        // Linha 4
        { symbol: 'K', name: 'Potássio', number: 19, group: 1, period: 4 },
        { symbol: 'Ca', name: 'Cálcio', number: 20, group: 2, period: 4 },
        { symbol: 'Sc', name: 'Escândio', number: 21, group: 3, period: 4 },
        { symbol: 'Ti', name: 'Titânio', number: 22, group: 4, period: 4 },
        { symbol: 'V', name: 'Vanádio', number: 23, group: 5, period: 4 },
        { symbol: 'Cr', name: 'Cromo', number: 24, group: 6, period: 4 },
        { symbol: 'Mn', name: 'Manganês', number: 25, group: 7, period: 4 },
        { symbol: 'Fe', name: 'Ferro', number: 26, group: 8, period: 4 },
        { symbol: 'Co', name: 'Cobalto', number: 27, group: 9, period: 4 },
        { symbol: 'Ni', name: 'Níquel', number: 28, group: 10, period: 4 },
        { symbol: 'Cu', name: 'Cobre', number: 29, group: 11, period: 4 },
        { symbol: 'Zn', name: 'Zinco', number: 30, group: 12, period: 4 },
        { symbol: 'Ga', name: 'Gálio', number: 31, group: 13, period: 4 },
        { symbol: 'Ge', name: 'Germânio', number: 32, group: 14, period: 4 },
        { symbol: 'As', name: 'Arsênio', number: 33, group: 15, period: 4 },
        { symbol: 'Se', name: 'Selênio', number: 34, group: 16, period: 4 },
        { symbol: 'Br', name: 'Bromo', number: 35, group: 17, period: 4 },
        { symbol: 'Kr', name: 'Criptônio', number: 36, group: 18, period: 4 },

        // Linha 5
        { symbol: 'Rb', name: 'Rubídio', number: 37, group: 1, period: 5 },
        { symbol: 'Sr', name: 'Estrôncio', number: 38, group: 2, period: 5 },
        { symbol: 'Y', name: 'Ítrio', number: 39, group: 3, period: 5 },
        { symbol: 'Zr', name: 'Zircônio', number: 40, group: 4, period: 5 },
        { symbol: 'Nb', name: 'Nióbio', number: 41, group: 5, period: 5 },
        { symbol: 'Mo', name: 'Molibdênio', number: 42, group: 6, period: 5 },
        { symbol: 'Tc', name: 'Tecnécio', number: 43, group: 7, period: 5 },
        { symbol: 'Ru', name: 'Rutênio', number: 44, group: 8, period: 5 },
        { symbol: 'Rh', name: 'Ródio', number: 45, group: 9, period: 5 },
        { symbol: 'Pd', name: 'Paládio', number: 46, group: 10, period: 5 },
        { symbol: 'Ag', name: 'Prata', number: 47, group: 11, period: 5 },
        { symbol: 'Cd', name: 'Cádmio', number: 48, group: 12, period: 5 },
        { symbol: 'In', name: 'Índio', number: 49, group: 13, period: 5 },
        { symbol: 'Sn', name: 'Estanho', number: 50, group: 14, period: 5 },
        { symbol: 'Sb', name: 'Antimônio', number: 51, group: 15, period: 5 },
        { symbol: 'Te', name: 'Telúrio', number: 52, group: 16, period: 5 },
        { symbol: 'I', name: 'Iodo', number: 53, group: 17, period: 5 },
        { symbol: 'Xe', name: 'Xenônio', number: 54, group: 18, period: 5 },

        // Linha 6 (com Lantanídeos)
        { symbol: 'Cs', name: 'Césio', number: 55, group: 1, period: 6 },
        { symbol: 'Ba', name: 'Bário', number: 56, group: 2, period: 6 },
        { symbol: 'La-Lu', name: 'Lantanídeos', number: '57-71', group: 3, period: 6 }, // Bloco para Lantanídeos
        { symbol: 'Hf', name: 'Háfnio', number: 72, group: 4, period: 6 },
        { symbol: 'Ta', name: 'Tântalo', number: 73, group: 5, period: 6 },
        { symbol: 'W', name: 'Tungstênio', number: 74, group: 6, period: 6 },
        { symbol: 'Re', name: 'Rênio', number: 75, group: 7, period: 6 },
        { symbol: 'Os', name: 'Ósmio', number: 76, group: 8, period: 6 },
        { symbol: 'Ir', name: 'Irídio', number: 77, group: 9, period: 6 },
        { symbol: 'Pt', name: 'Platina', number: 78, group: 10, period: 6 },
        { symbol: 'Au', name: 'Ouro', number: 79, group: 11, period: 6 },
        { symbol: 'Hg', name: 'Mercúrio', number: 80, group: 12, period: 6 },
        { symbol: 'Tl', name: 'Tálio', number: 81, group: 13, period: 6 },
        { symbol: 'Pb', name: 'Chumbo', number: 82, group: 14, period: 6 },
        { symbol: 'Bi', name: 'Bismuto', number: 83, group: 15, period: 6 },
        { symbol: 'Po', name: 'Polônio', number: 84, group: 16, period: 6 },
        { symbol: 'At', name: 'Ástato', number: 85, group: 17, period: 6 },
        { symbol: 'Rn', name: 'Radônio', number: 86, group: 18, period: 6 },

        // Linha 7 (com Actinídeos)
        { symbol: 'Fr', name: 'Frâncio', number: 87, group: 1, period: 7 },
        { symbol: 'Ra', name: 'Rádio', number: 88, group: 2, period: 7 },
        { symbol: 'Ac-Lr', name: 'Actinídeos', number: '89-103', group: 3, period: 7 }, // Bloco para Actinídeos
        { symbol: 'Rf', name: 'Rutherfórdio', number: 104, group: 4, period: 7 },
        { symbol: 'Db', name: 'Dúbnio', number: 105, group: 5, period: 7 },
        { symbol: 'Sg', name: 'Seabórgio', number: 106, group: 6, period: 7 },
        { symbol: 'Bh', name: 'Bóhrio', number: 107, group: 7, period: 7 },
        { symbol: 'Hs', name: 'Hássio', number: 108, group: 8, period: 7 },
        { symbol: 'Mt', name: 'Meitnério', number: 109, group: 9, period: 7 },
        { symbol: 'Ds', name: 'Darmstádtio', number: 110, group: 10, period: 7 },
        { symbol: 'Rg', name: 'Roentgênio', number: 111, group: 11, period: 7 },
        { symbol: 'Cn', name: 'Copernício', number: 112, group: 12, period: 7 },
        { symbol: 'Nh', name: 'Nihônio', number: 113, group: 13, period: 7 },
        { symbol: 'Fl', name: 'Fleróvio', number: 114, group: 14, period: 7 },
        { symbol: 'Mc', name: 'Moscóvio', number: 115, group: 15, period: 7 },
        { symbol: 'Lv', name: 'Livermório', number: 116, group: 16, period: 7 },
        { symbol: 'Ts', name: 'Tenessino', number: 117, group: 17, period: 7 },
        { symbol: 'Og', name: 'Oganessônio', number: 118, group: 18, period: 7 },

        // Lantanídeos (linha separada)
        { symbol: '', name: '', number: '', group: 0, period: 0 }, // Espaços para alinhar
        { symbol: '', name: '', number: '', group: 0, period: 0 },
        { symbol: '', name: '', number: '', group: 0, period: 0 },
        { symbol: 'La', name: 'Lantânio', number: 57, group: 'L', period: 'L' },
        { symbol: 'Ce', name: 'Cério', number: 58, group: 'L', period: 'L' },
        { symbol: 'Pr', name: 'Praseodímio', number: 59, group: 'L', period: 'L' },
        { symbol: 'Nd', name: 'Neodímio', number: 60, group: 'L', period: 'L' },
        { symbol: 'Pm', name: 'Promécio', number: 61, group: 'L', period: 'L' },
        { symbol: 'Sm', name: 'Samário', number: 62, group: 'L', period: 'L' },
        { symbol: 'Eu', name: 'Európio', number: 63, group: 'L', period: 'L' },
        { symbol: 'Gd', name: 'Gadolínio', number: 64, group: 'L', period: 'L' },
        { symbol: 'Tb', name: 'Térbio', number: 65, group: 'L', period: 'L' },
        { symbol: 'Dy', name: 'Disprósio', number: 66, group: 'L', period: 'L' },
        { symbol: 'Ho', name: 'Hólmio', number: 67, group: 'L', period: 'L' },
        { symbol: 'Er', name: 'Érbio', number: 68, group: 'L', period: 'L' },
        { symbol: 'Tm', name: 'Túlio', number: 69, group: 'L', period: 'L' },
        { symbol: 'Yb', name: 'Itérbio', number: 70, group: 'L', period: 'L' },
        { symbol: 'Lu', name: 'Lutécio', number: 71, group: 'L', period: 'L' },

        // Actinídeos (linha separada)
        { symbol: '', name: '', number: '', group: 0, period: 0 }, // Espaços para alinhar
        { symbol: '', name: '', number: '', group: 0, period: 0 },
        { symbol: '', name: '', number: '', group: 0, period: 0 },
        { symbol: 'Ac', name: 'Actínio', number: 89, group: 'A', period: 'A' },
        { symbol: 'Th', name: 'Tório', number: 90, group: 'A', period: 'A' },
        { symbol: 'Pa', name: 'Protactínio', number: 91, group: 'A', period: 'A' },
        { symbol: 'U', name: 'Urânio', number: 92, group: 'A', period: 'A' },
        { symbol: 'Np', name: 'Netúnio', number: 93, group: 'A', period: 'A' },
        { symbol: 'Pu', name: 'Plutônio', number: 94, group: 'A', period: 'A' },
        { symbol: 'Am', name: 'Amerício', number: 95, group: 'A', period: 'A' },
        { symbol: 'Cm', name: 'Cúrio', number: 96, group: 'A', period: 'A' },
        { symbol: 'Bk', name: 'Berquélio', number: 97, group: 'A', period: 'A' },
        { symbol: 'Cf', name: 'Califórnio', number: 98, group: 'A', period: 'A' },
        { symbol: 'Es', name: 'Einstênio', number: 99, group: 'A', period: 'A' },
        { symbol: 'Fm', name: 'Férmio', number: 100, group: 'A', period: 'A' },
        { symbol: 'Md', name: 'Mendelévio', number: 101, group: 'A', period: 'A' },
        { symbol: 'No', name: 'Nobélio', number: 102, group: 'A', period: 'A' },
        { symbol: 'Lr', name: 'Laurêncio', number: 103, group: 'A', period: 'A' }
    ];

    function createPeriodicTable() {
        periodicTableContainer.innerHTML = ''; // Limpa antes de gerar

        elements.forEach(element => {
            const elementBlock = document.createElement('div');
            elementBlock.classList.add('element-block');

            if (element.symbol === '') {
                elementBlock.classList.add('empty'); // Para espaços vazios na tabela
            } else {
                elementBlock.innerHTML = `
                    <span class="element-number">${element.number}</span>
                    <span class="element-symbol">${element.symbol}</span>
                    <span class="element-name">${element.name}</span>
                `;
                elementBlock.addEventListener('click', () => {
                    elementBlock.classList.toggle('show-name');
                });
            }
            periodicTableContainer.appendChild(elementBlock);
        });
    }

    createPeriodicTable();

    // --- 6. Quiz de Química ---
    const quizQuestions = [
        {
            question: "Qual o símbolo químico da água?",
            answers: ["H2O", "CO2", "O2", "NaCl"],
            correct: "H2O"
        },
        {
            question: "Qual gás as plantas absorvem para fazer fotossíntese?",
            answers: ["Oxigênio", "Nitrogênio", "Dióxido de Carbono", "Hidrogênio"],
            correct: "Dióxido de Carbono"
        },
        {
            question: "Qual o nome do processo em que um sólido se transforma diretamente em gás?",
            answers: ["Evaporação", "Condensação", "Sublimação", "Fusão"],
            correct: "Sublimação"
        },
        {
            question: "Qual o elemento químico mais abundante na crosta terrestre?",
            answers: ["Ferro", "Oxigênio", "Silício", "Alumínio"],
            correct: "Oxigênio"
        },
        {
            question: "Qual o pH de uma substância neutra?",
            answers: ["0", "7", "14", "Depende da substância"],
            correct: "7"
        },
        {
            question: "Qual o símbolo químico do ouro?",
            answers: ["Ag", "Fe", "Au", "Cu"],
            correct: "Au"
        },
        {
            question: "Qual o principal componente do gás natural?",
            answers: ["Propano", "Butano", "Metano", "Etano"],
            correct: "Metano"
        },
        {
            question: "Qual tipo de ligação química envolve o compartilhamento de elétrons?",
            answers: ["Iônica", "Metálica", "Covalente", "Ponte de Hidrogênio"],
            correct: "Covalente"
        },
        {
            question: "O que é um catalisador em uma reação química?",
            answers: ["Aumenta a energia de ativação", "Diminui a velocidade da reação", "Participa da reação e é consumido", "Acelera a reação sem ser consumido"],
            correct: "Acelera a reação sem ser consumido"
        },
        {
            question: "Qual o nome do processo de queima de uma substância na presença de oxigênio?",
            answers: ["Oxidação", "Redução", "Combustão", "Neutralização"],
            correct: "Combustão"
        },
        {
            question: "Qual o estado físico da água em temperatura ambiente (25°C)?",
            answers: ["Sólido", "Líquido", "Gasoso", "Plasma"],
            correct: "Líquido"
        },
        {
            question: "Qual o nome da menor partícula de um elemento químico?",
            answers: ["Molécula", "Composto", "Átomo", "Íon"],
            correct: "Átomo"
        },
        {
            question: "Qual o elemento químico que compõe a maior parte da atmosfera terrestre?",
            answers: ["Oxigênio", "Argônio", "Dióxido de Carbono", "Nitrogênio"],
            correct: "Nitrogênio"
        },
        {
            question: "O que é um isótopo?",
            answers: ["Átomos com o mesmo número de nêutrons", "Átomos com o mesmo número de prótons e nêutrons", "Átomos com o mesmo número de prótons mas diferente de nêutrons", "Átomos com o mesmo número de elétrons"],
            correct: "Átomos com o mesmo número de prótons mas diferente de nêutrons"
        },
        {
            question: "Qual a fórmula química do sal de cozinha?",
            answers: ["KCl", "HCl", "NaCl", "NaOH"],
            correct: "NaCl"
        },
        {
            question: "Qual o instrumento usado para medir o pH de uma solução?",
            answers: ["Termômetro", "Balança", "pHmetro", "Pipeta"],
            correct: "pHmetro"
        },
        {
            question: "Qual a camada mais externa de um átomo?",
            answers: ["Núcleo", "Prótons", "Nêutrons", "Camada de Valência"],
            correct: "Camada de Valência"
        },
        {
            question: "Qual o processo de separação de misturas que usa a diferença de ponto de ebulição?",
            answers: ["Filtração", "Decantação", "Destilação", "Centrifugação"],
            correct: "Destilação"
        },
        {
            question: "Qual o metal líquido em temperatura ambiente?",
            answers: ["Ferro", "Alumínio", "Mercúrio", "Cobre"],
            correct: "Mercúrio"
        },
        {
            question: "O que significa 'solubilidade' em química?",
            answers: ["A capacidade de uma substância se solidificar", "A capacidade de uma substância se misturar com outra", "A capacidade de uma substância se dissolver em um solvente", "A capacidade de uma substância reagir com outra"],
            correct: "A capacidade de uma substância se dissolver em um solvente"
        },
        // Adicione mais 30+ perguntas aqui para chegar a mais de 50
        {
            question: "Qual o elemento que compõe a ponta dos lápis?",
            answers: ["Diamante", "Grafite", "Carvão", "Chumbo"],
            correct: "Grafite"
        },
        {
            question: "Qual o gás nobre mais leve?",
            answers: ["Argônio", "Neônio", "Hélio", "Criptônio"],
            correct: "Hélio"
        },
        {
            question: "Qual a função de um ácido em uma reação de neutralização?",
            answers: ["Receber prótons", "Doar prótons", "Diminuir o pH", "Aumentar o pH"],
            correct: "Doar prótons"
        },
        {
            question: "O que é um eletrólito?",
            answers: ["Uma substância que não conduz eletricidade", "Uma substância que conduz eletricidade quando dissolvida em água ou fundida", "Um metal que não enferruja", "Um tipo de polímero"],
            correct: "Uma substância que conduz eletricidade quando dissolvida em água ou fundida"
        },
        {
            question: "Qual o número atômico representa o número de quê no núcleo de um átomo?",
            answers: ["Nêutrons", "Elétrons", "Prótons", "Massa"],
            correct: "Prótons"
        },
        {
            question: "Qual o nome da transformação de gás para líquido?",
            answers: ["Evaporação", "Sublimação", "Condensação", "Solidificação"],
            correct: "Condensação"
        },
        {
            question: "Qual o nome da força que mantém os átomos unidos em uma molécula?",
            answers: ["Força gravitacional", "Força nuclear", "Ligação química", "Força eletromagnética"],
            correct: "Ligação química"
        },
        {
            question: "Qual o principal componente do ar que respiramos (além do oxigênio)?",
            answers: ["Dióxido de carbono", "Argônio", "Nitrogênio", "Hélio"],
            correct: "Nitrogênio"
        },
        {
            question: "O que é um composto orgânico?",
            answers: ["Um composto que não contém carbono", "Um composto que contém carbono e hidrogênio", "Um composto encontrado apenas em organismos vivos", "Um composto inorgânico"],
            correct: "Um composto que contém carbono e hidrogênio"
        },
        {
            question: "Qual o nome do processo de separação de componentes de uma mistura heterogênea por diferença de densidade?",
            answers: ["Filtração", "Destilação", "Decantação", "Evaporação"],
            correct: "Decantação"
        },
        {
            question: "Qual o elemento presente em todas as proteínas?",
            answers: ["Oxigênio", "Hidrogênio", "Carbono", "Nitrogênio"],
            correct: "Nitrogênio"
        },
        {
            question: "Qual a cor da solução de fenolftaleína em meio básico?",
            answers: ["Incolor", "Azul", "Vermelho", "Rosa/Fúcsia"],
            correct: "Rosa/Fúcsia"
        },
        {
            question: "Qual o nome do açúcar simples encontrado no sangue?",
            answers: ["Sacarose", "Frutose", "Lactose", "Glicose"],
            correct: "Glicose"
        },
        {
            question: "Qual o elemento que é um gás incolor e inodoro, essencial para a respiração?",
            answers: ["Hidrogênio", "Nitrogênio", "Dióxido de Carbono", "Oxigênio"],
            correct: "Oxigênio"
        },
        {
            question: "Qual o tipo de reação onde duas ou mais substâncias se combinam para formar uma única substância?",
            answers: ["Decomposição", "Simples troca", "Síntese", "Dupla troca"],
            correct: "Síntese"
        },
        {
            question: "O que é um polímero?",
            answers: ["Uma pequena molécula", "Uma molécula grande formada pela repetição de unidades menores", "Um tipo de metal", "Um elemento químico"],
            correct: "Uma molécula grande formada pela repetição de unidades menores"
        },
        {
            question: "Qual o nome do processo de transformação de líquido para sólido?",
            answers: ["Fusão", "Evaporação", "Solidificação", "Condensação"],
            correct: "Solidificação"
        },
        {
            question: "Qual o nome da propriedade que descreve a capacidade de um átomo atrair elétrons em uma ligação química?",
            answers: ["Eletronegatividade", "Eletropositividade", "Energia de Ionização", "Afinidade Eletrônica"],
            correct: "Eletronegatividade"
        },
        {
            question: "Qual o nome do processo de quebra de moléculas grandes em moléculas menores?",
            answers: ["Síntese", "Combustão", "Hidrólise", "Neutralização"],
            correct: "Hidrólise"
        },
        {
            question: "Qual o gás responsável pelo efeito estufa?",
            answers: ["Oxigênio", "Nitrogênio", "Gás Nobre", "Dióxido de Carbono"],
            correct: "Dióxido de Carbono"
        },
        {
            question: "O que é alotropia?",
            answers: ["Fenômeno em que um elemento químico pode formar várias substâncias simples diferentes", "Propriedade de não reagir", "Processo de separação de misturas", "Tipo de ligação química"],
            correct: "Fenômeno em que um elemento químico pode formar várias substâncias simples diferentes"
        },
        {
            question: "Qual a principal aplicação do elemento Urânio?",
            answers: ["Produção de joias", "Combustível nuclear", "Fabricação de plásticos", "Limpeza doméstica"],
            correct: "Combustível nuclear"
        },
        {
            question: "Qual o elemento que é a base da vida orgânica?",
            answers: ["Oxigênio", "Nitrogênio", "Hidrogênio", "Carbono"],
            correct: "Carbono"
        },
        {
            question: "O que é um indicador ácido-base?",
            answers: ["Uma substância que muda de cor em diferentes pHs", "Um tipo de bateria", "Um medidor de temperatura", "Um catalisador"],
            correct: "Uma substância que muda de cor em diferentes pHs"
        },
        {
            question: "Qual o nome da reação entre um ácido e uma base?",
            answers: ["Combustão", "Oxidação", "Redução", "Neutralização"],
            correct: "Neutralização"
        },
        {
            question: "Qual o nome do processo de formação de íons?",
            answers: ["Ionização", "Sublimação", "Fusão", "Cristalização"],
            correct: "Ionização"
        },
        {
            question: "Qual a propriedade do metal que permite ser transformado em fios?",
            answers: ["Maleabilidade", "Ductibilidade", "Brilho", "Condutividade"],
            correct: "Ductibilidade"
        },
        {
            question: "Qual o nome da substância que atua como solvente universal?",
            answers: ["Álcool", "Água", "Óleo", "Gasolina"],
            correct: "Água"
        },
        {
            question: "O que é um mol em química?",
            answers: ["Uma unidade de massa", "Uma unidade de volume", "Uma unidade que representa uma grande quantidade de partículas", "Um tipo de elemento químico"],
            correct: "Uma unidade que representa uma grande quantidade de partículas"
        },
        {
            question: "Qual o nome da reação onde um elemento mais reativo desloca outro menos reativo de um composto?",
            answers: ["Dupla troca", "Síntese", "Decomposição", "Simples troca"],
            correct: "Simples troca"
        },
        {
            question: "Qual o nome da teoria que explica a distribuição dos elétrons em camadas?",
            answers: ["Teoria da Relatividade", "Teoria do Big Bang", "Teoria Atômica de Bohr", "Teoria do Caos"],
            correct: "Teoria Atômica de Bohr"
        },
        {
            question: "Qual a principal função do oxigênio na combustão?",
            answers: ["Ser o combustível", "Ser o comburente", "Ser o produto", "Ser o catalisador"],
            correct: "Ser o comburente"
        },
        {
            question: "O que é uma solução saturada?",
            answers: ["Uma solução que contém mais soluto do que pode dissolver", "Uma solução que contém a quantidade máxima de soluto dissolvido em uma dada temperatura", "Uma solução que não contém soluto", "Uma solução que contém pouco soluto"],
            correct: "Uma solução que contém a quantidade máxima de soluto dissolvido em uma dada temperatura"
        },
        {
            question: "Qual o nome do processo de separação de líquidos imiscíveis?",
            answers: ["Filtração", "Destilação", "Decantação", "Cristalização"],
            correct: "Decantação"
        },
        {
            question: "Qual a principal diferença entre um ácido forte e um ácido fraco?",
            answers: ["Seu cheiro", "Sua cor", "Seu grau de ionização", "Seu sabor"],
            correct: "Seu grau de ionização"
        },
        {
            question: "O que é a massa atômica?",
            answers: ["A massa de um elétron", "A massa de um próton", "A massa de um átomo em relação ao carbono-12", "A massa de uma molécula"],
            correct: "A massa de um átomo em relação ao carbono-12"
        },
        {
            question: "Qual o nome da ligação entre um metal e um ametal?",
            answers: ["Covalente", "Metálica", "Iônica", "Ponte de Hidrogênio"],
            correct: "Iônica"
        },
        {
            question: "Qual a principal função dos sais minerais no corpo humano?",
            answers: ["Fornecer energia", "Construir músculos", "Regular funções corporais", "Transportar oxigênio"],
            correct: "Regular funções corporais"
        },
        {
            question: "O que é um óxido?",
            answers: ["Um composto que não contém oxigênio", "Um composto formado por um elemento e oxigênio", "Um composto orgânico", "Um composto com pH neutro"],
            correct: "Um composto formado por um elemento e oxigênio"
        },
        {
            question: "Qual o nome do processo de perda de elétrons em uma reação química?",
            answers: ["Redução", "Oxidação", "Neutralização", "Hidrólise"],
            correct: "Oxidação"
        },
        {
            question: "Qual a teoria que explica a distribuição dos elétrons em camadas?",
            answers: ["Teoria da Relatividade", "Teoria do Big Bang", "Teoria Atômica de Bohr", "Teoria do Caos"],
            correct: "Teoria Atômica de Bohr"
        },
        {
            question: "Qual o elemento químico que é o principal componente do diamante e da grafite?",
            answers: ["Silício", "Boro", "Carbono", "Enxofre"],
            correct: "Carbono"
        },
        {
            question: "O que é um balanço de equações químicas?",
            answers: ["Contar o número de átomos de cada elemento nos reagentes e produtos para garantir a conservação da massa", "Alterar a fórmula química dos compostos", "Mudar o estado físico dos reagentes", "Adicionar mais reagentes"],
            correct: "Contar o número de átomos de cada elemento nos reagentes e produtos para garantir a conservação da massa"
        },
        {
            question: "Qual o nome do processo de quebra de uma molécula pela água?",
            answers: ["Desidratação", "Hidrólise", "Condensação", "Sublimação"],
            correct: "Hidrólise"
        },
        {
            question: "Qual o símbolo do elemento Sódio?",
            answers: ["So", "Na", "Sd", "Au"],
            correct: "Na"
        },
        {
            question: "Qual a classificação de uma solução com pH maior que 7?",
            answers: ["Ácida", "Neutra", "Básica", "Saturada"],
            correct: "Básica"
        },
        {
            question: "Qual a principal característica dos gases nobres?",
            answers: ["Alta reatividade", "Baixa reatividade", "Boa condutividade elétrica", "Alta massa atômica"],
            correct: "Baixa reatividade"
        },
        {
            question: "O que é um radical livre em química?",
            answers: ["Um átomo com excesso de elétrons", "Uma molécula com um elétron desemparelhado", "Um tipo de íon", "Um composto sem carga"],
            correct: "Uma molécula com um elétron desemparelhado"
        },
        {
            question: "Qual o nome da propriedade de um líquido de subir ou descer em um tubo fino?",
            answers: ["Viscosidade", "Tensão superficial", "Capilaridade", "Densidade"],
            correct: "Capilaridade"
        },
        {
            question: "Qual o nome da principal fonte de energia para a vida na Terra?",
            answers: ["Energia geotérmica", "Energia eólica", "Luz solar", "Energia nuclear"],
            correct: "Luz solar"
        },
        {
            question: "O que é um aminoácido?",
            answers: ["A unidade básica dos carboidratos", "A unidade básica das proteínas", "Um tipo de açúcar", "Um tipo de gordura"],
            correct: "A unidade básica das proteínas"
        },
        {
            question: "Qual o nome da reação química que libera calor?",
            answers: ["Endotérmica", "Exotérmica", "Catabólica", "Anabólica"],
            correct: "Exotérmica"
        }
        // Assegure-se de que há mais de 50 perguntas no total aqui
    ];

    let currentQuestionIndex = 0;
    let score = 0;
    let helpEliminateCount = 2; // Número de vezes que o jogador pode usar a ajuda

    const questionText = document.getElementById('question-text');
    const answersContainer = document.getElementById('answers-container');
    const nextQuestionBtn = document.getElementById('next-question-btn');
    const skipQuestionBtn = document.getElementById('skip-question-btn');
    const helpEliminateBtn = document.getElementById('help-eliminate-btn');
    const currentScoreSpan = document.getElementById('current-score');
    const quizResultFeedback = document.getElementById('quiz-result-feedback');
    const feedbackImage = document.getElementById('feedback-image');
    const feedbackSound = document.getElementById('feedback-sound');

    // **NOVAS LISTAS DE IMAGENS E SONS PARA FEEDBACK**
    const happyFeedbacks = [
        { image: 'happy1.gif', sound: 'happy1.mp3' },
        { image: 'happy2.gif', sound: 'happy2.mp3' },
        { image: 'happy3.gif', sound: 'happy3.mp3' },
        { image: 'happy4.gif', sound: 'happy4.mp3' },
        { image: 'happy5.gif', sound: 'happy5.mp3' },
        { image: 'happy6.gif', sound: 'happy6.mp3' },
        { image: 'happy7.gif', sound: 'happy7.mp3' },
        { image: 'happy8.gif', sound: 'happy8.mp3' },
        { image: 'happy9.gif', sound: 'happy9.mp3' },
        { image: 'happy10.gif', sound: 'happy10.mp3' },
        // Adicione quantos mais quiser!
    ];

    const sadFeedbacks = [
        { image: 'sad1.gif', sound: 'sad1.mp3' },
        { image: 'sad2.gif', sound: 'sad2.mp3' },
        { image: 'sad3.gif', sound: 'sad3.mp3' },
        { image: 'sad4.gif', sound: 'sad4.mp3' },
        { image: 'sad5.gif', sound: 'sad5.mp3' },
        { image: 'sad6.gif', sound: 'sad6.mp3' },
        { image: 'sad7.gif', sound: 'sad7.mp3' },
        { image: 'sad8.gif', sound: 'sad8.mp3' },
        { image: 'sad9.gif', sound: 'sad9.mp3' },
        { image: 'sad10.gif', sound: 'sad10.mp3' },
        // Adicione quantos mais quiser!
    ];

    function loadQuestion() {
        if (currentQuestionIndex < quizQuestions.length) {
            const q = quizQuestions[currentQuestionIndex];
            questionText.textContent = q.question;
            answersContainer.innerHTML = ''; // Limpa as respostas anteriores

            // Resetar o botão de ajuda
            helpEliminateBtn.style.display = 'inline-block';
            helpEliminateBtn.textContent = `Eliminar 2 Respostas (${helpEliminateCount} restantes)`;
            if (helpEliminateCount === 0) {
                helpEliminateBtn.disabled = true;
                helpEliminateBtn.style.opacity = 0.5;
            } else {
                helpEliminateBtn.disabled = false;
                helpEliminateBtn.style.opacity = 1;
            }


            q.answers.forEach(answer => {
                const button = document.createElement('button');
                button.classList.add('answer-button');
                button.textContent = answer;
                button.addEventListener('click', () => selectAnswer(button, answer, q.correct));
                answersContainer.appendChild(button);
            });

            nextQuestionBtn.style.display = 'none'; // Esconde o botão "Próxima Pergunta"
        } else {
            endQuiz();
        }
    }

    function selectAnswer(selectedButton, selectedAnswer, correctAnswer) {
        // Desabilita todos os botões de resposta após uma seleção
        Array.from(answersContainer.children).forEach(button => {
            button.disabled = true;
        });

        // Desabilita o botão de ajuda
        helpEliminateBtn.disabled = true;
        helpEliminateBtn.style.opacity = 0.5;

        if (selectedAnswer === correctAnswer) {
            selectedButton.classList.add('correct');
            score += Math.round(100 / quizQuestions.length); // Distribui a nota
            currentScoreSpan.textContent = score;
            showFeedback('happy');
        } else {
            selectedButton.classList.add('wrong');
            // Encontra e destaca a resposta correta
            Array.from(answersContainer.children).forEach(button => {
                if (button.textContent === correctAnswer) {
                    button.classList.add('correct');
                }
            });
            showFeedback('sad');
        }
        nextQuestionBtn.style.display = 'inline-block'; // Mostra o botão "Próxima Pergunta"
    }

    function showFeedback(type) {
        quizResultFeedback.style.display = 'flex';
        let chosenFeedback;

        if (type === 'happy') {
            chosenFeedback = happyFeedbacks[Math.floor(Math.random() * happyFeedbacks.length)];
        } else {
            chosenFeedback = sadFeedbacks[Math.floor(Math.random() * sadFeedbacks.length)];
        }

        feedbackImage.src = chosenFeedback.image;
        feedbackSound.src = chosenFeedback.sound;
        feedbackSound.play();

        // Esconde o feedback após um tempo
        setTimeout(() => {
            quizResultFeedback.style.display = 'none';
        }, 5000); // 2 segundos
    }

    nextQuestionBtn.addEventListener('click', () => {
        currentQuestionIndex++;
        loadQuestion();
    });

    skipQuestionBtn.addEventListener('click', () => {
        // Penalidade por pular: Não ganha ponto
        currentQuestionIndex++;
        loadQuestion();
    });

    helpEliminateBtn.addEventListener('click', () => {
        if (helpEliminateCount > 0) {
            const q = quizQuestions[currentQuestionIndex];
            const incorrectAnswers = q.answers.filter(answer => answer !== q.correct);

            // Garante que haja pelo menos 2 respostas incorretas para eliminar
            if (incorrectAnswers.length >= 2) {
                let eliminatedCount = 0;
                // Cria uma cópia das respostas para embaralhar e pegar as incorretas
                const shuffledAnswers = [...incorrectAnswers].sort(() => 0.5 - Math.random());

                for (let i = 0; i < shuffledAnswers.length && eliminatedCount < 2; i++) {
                    const answerToEliminate = shuffledAnswers[i];
                    const button = Array.from(answersContainer.children).find(btn => btn.textContent === answerToEliminate);
                    if (button && !button.classList.contains('eliminated') && button.textContent !== q.correct) {
                        button.classList.add('eliminated');
                        eliminatedCount++;
                    }
                }
                helpEliminateCount--;
                helpEliminateBtn.textContent = `Eliminar 2 Respostas (${helpEliminateCount} restantes)`;
                if (helpEliminateCount === 0) {
                    helpEliminateBtn.disabled = true;
                    helpEliminateBtn.style.opacity = 0.5;
                }
            } else {
                alert("Não há respostas incorretas suficientes para eliminar.");
            }
        }
    });

    function endQuiz() {
        alert(`Quiz finalizado! Sua pontuação final: ${score} de 100.`);
        // Você pode adicionar mais lógica aqui, como reiniciar o quiz ou mostrar uma tela final.
        currentQuestionIndex = 0;
        score = 0;
        helpEliminateCount = 2;
        currentScoreSpan.textContent = score;
        loadQuestion(); // Reinicia o quiz
    }

    // Inicializa o quiz
    loadQuestion();
});
