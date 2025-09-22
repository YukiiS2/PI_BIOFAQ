document.addEventListener('DOMContentLoaded', function() {

    // Dados fixos (substituir por backend futuramente) 

    const siteData = {
        aulas: {
            "videos/micro_aula01.mp4": {
                titulo: "Introdução à Microbiologia",
                texto: "Nesta aula inaugural, exploramos o que é a microbiologia, a história da descoberta dos microrganismos e sua importância fundamental para a vida na Terra. Abordamos a classificação dos principais grupos: bactérias, arquéias, fungos, protozoários, algas e vírus."
            },
            "videos/micro_aula02.mp4": {
                titulo: "Estrutura Celular Bacteriana",
                texto: "Um mergulho profundo na célula procariótica. Detalhamos as funções da parede celular, membrana plasmática, ribossomos, nucleoide e outras estruturas como flagelos e fímbrias, essenciais para a sobrevivência e patogenicidade bacteriana."
            },
            "videos/micro_aula03.mp4": {
                titulo: "Metabolismo e Crescimento Microbiano",
                texto: "Como os microrganismos obtêm energia? Discutimos as principais vias metabólicas, como a glicólise e a respiração celular, e os fatores que influenciam o crescimento microbiano, como temperatura, pH e disponibilidade de nutrientes. Apresentamos as fases da curva de crescimento."
            },
            "videos/micro_aula04.mp4": {
                titulo: "Genética Bacteriana",
                texto: "Esta aula aborda a organização do material genético em bactérias e os mecanismos de transferência de genes, como conjugação, transformação e transdução. Explicamos como esses processos contribuem para a rápida adaptação e resistência a antibióticos."
            },
            "videos/macro_aula01.mp4": {
                titulo: "Introdução ao Reino Animal",
                texto: "Uma visão geral sobre a diversidade do Reino Animalia. Apresentamos os principais filos, desde poríferos e cnidários até cordados, destacando as características evolutivas chave, como simetria, tecidos corporais e desenvolvimento embrionário, que definem cada grupo."
            },
            "videos/macro_aula02.mp4": {
                titulo: "Fisiologia Comparada: Sistema Digestório",
                texto: "Analisamos as diferentes estratégias e estruturas que os animais desenvolveram para a digestão, desde a digestão intracelular em esponjas até os sistemas digestórios completos e especializados de vertebrados, relacionando a dieta de cada animal com sua anatomia."
            },
            "videos/macro_aula03.mp4": {
                titulo: "Fisiologia Comparada: Sistema Respiratório",
                texto: "Como os animais respiram? Comparamos as diversas formas de trocas gasosas: difusão direta, respiração cutânea, traqueal, branquial e pulmonar. Explicamos como cada sistema é adaptado ao ambiente em que o animal vive, seja aquático ou terrestre."
            },
            "videos/macro_aula04.mp4": {
                titulo: "Padrões Reprodutivos nos Animais",
                texto: "Esta aula explora a variedade de estratégias reprodutivas no reino animal, incluindo reprodução assexuada e sexuada, fecundação interna e externa, e os diferentes tipos de desenvolvimento, como ovíparo, vivíparo e ovovivíparo, com exemplos fascinantes."
            }
        },
        questoes: {
            'micro1': `
                <h3>Questões de Microbiologia - Lista 1</h3>
                <p class="pergunta">1. Qual destes microrganismos é um procarionte?</p>
                <ul class="alternativas">
                    <li>A) Vírus</li>
                    <li>B) Bactéria</li>
                    <li>C) Fungo</li>
                    <li>D) Protozoário</li>
                </ul>
                <p class="pergunta">2. A penicilina é um tipo de:</p>
                <ul class="alternativas">
                    <li>A) Antiviral</li>
                    <li>B) Antifúngico</li>
                    <li>C) Antibiótico</li>
                    <li>D) Vacina</li>
                </ul>
            `,
            'micro2': `
                <h3>Questões de Microbiologia - Lista 2</h3>
                <p class="pergunta">1. O que é a pasteurização?</p>
                <ul class="alternativas">
                    <li>A) Um processo de congelamento rápido.</li>
                    <li>B) Um processo para eliminar microrganismos pelo calor.</li>
                    <li>C) Um método de cultura de bactérias.</li>
                    <li>D) Um tipo de fermentação.</li>
                </ul>
            `,
            'micro3': `
                <h3>Questões de Microbiologia - Lista 3</h3>
                <p class="pergunta">1. Qual estrutura confere motilidade à maioria das bactérias?</p>
                <ul class="alternativas">
                    <li>A) Fímbrias</li>
                    <li>B) Parede Celular</li>
                    <li>C) Flagelo</li>
                    <li>D) Cápsula</li>
                </ul>
            `,
            'micro4': `
                <h3>Questões de Microbiologia - Lista 4</h3>
                <p class="pergunta">1. O processo de transferência de material genético através de um "pilus sexual" é chamado de:</p>
                <ul class="alternativas">
                    <li>A) Transformação</li>
                    <li>B) Conjugação</li>
                    <li>C) Transdução</li>
                    <li>D) Mutação</li>
                </ul>
            `,
            'macro1': `
                <h3>Questões de Macrobiologia - Lista 1</h3>
                <p class="pergunta">1. Qual destes animais é um mamífero?</p>
                <ul class="alternativas">
                    <li>A) Tubarão</li>
                    <li>B) Pinguim</li>
                    <li>C) Morcego</li>
                    <li>D) Tartaruga</li>
                </ul>
            `,
            'macro2': `
                <h3>Questões de Macrobiologia - Lista 2</h3>
                <p class="pergunta">1. Animais que possuem um sistema digestório com uma única abertura (boca/ânus) são chamados de:</p>
                <ul class="alternativas">
                    <li>A) Completos</li>
                    <li>B) Incompletos</li>
                    <li>C) Ausentes</li>
                    <li>D) Complexos</li>
                </ul>
            `,
            'macro3': `
                <h3>Questões de Macrobiologia - Lista 3</h3>
                <p class="pergunta">1. A respiração realizada através da pele, comum em anfíbios, é chamada de:</p>
                <ul class="alternativas">
                    <li>A) Pulmonar</li>
                    <li>B) Traqueal</li>
                    <li>C) Branquial</li>
                    <li>D) Cutânea</li>
                </ul>
            `,
            'macro4': `
                <h3>Questões de Macrobiologia - Lista 4</h3>
                <p class="pergunta">1. O desenvolvimento embrionário que ocorre dentro de um ovo, fora do corpo da mãe, é classificado como:</p>
                <ul class="alternativas">
                    <li>A) Vivíparo</li>
                    <li>B) Ovíparo</li>
                    <li>C) Ovovivíparo</li>
                    <li>D) Metamorfose</li>
                </ul>
            `
        }
    };
    function inicializarConteudos(dados) {
        configurarMenu();
        configurarPopupVideo(dados.aulas);
        configurarPopupQuestoes(dados.questoes);
        configurarPopupConfig();
    }

    // Código de integração com backend (futuro)
    
    /*
        fetch('/api/dados')
            .then(response => response.json())
            .then(dadosDoBackend => {
                // 'dadosDoBackend' teria a mesma estrutura do 'siteData' (com 'aulas' e 'questoes')
                inicializarConteudos(dadosDoBackend);
            })
            .catch(error => {
                console.error('Erro ao buscar dados do servidor:', error);
            });
    */

    inicializarConteudos(siteData);

    // Funções principais

    function configurarMenu() {
        const drop = document.querySelector('.drop');
        const aulasIcon = document.getElementById('aulas');
        const searchIconLink = document.querySelector('a[href="#"]');
        const searchbarContainer = document.getElementById('barra_pesquisa');
        const textoPesquisar = document.getElementById('texto-pesquisar');
        if (aulasIcon) {
            aulasIcon.addEventListener('click', function(e) {
                e.stopPropagation();
                if (searchbarContainer && searchbarContainer.classList.contains('active')) {
                    searchbarContainer.classList.remove('active');
                    if (textoPesquisar) textoPesquisar.style.visibility = '';
                }
                drop.classList.toggle('open');
            });
        }
        if (searchIconLink) {
            searchIconLink.addEventListener('click', function(e) {
                e.preventDefault(); 
                if (drop && drop.classList.contains('open')) {
                    drop.classList.remove('open');
                }
                searchbarContainer.classList.toggle('active');
                if (searchbarContainer.classList.contains('active')) {
                    document.getElementById('pesc').focus();
                }
            });
        }
        document.addEventListener('click', function(e) {
            if (drop && !drop.contains(e.target) && drop.classList.contains('open')) {
                drop.classList.remove('open');
            }
            if (searchbarContainer && !searchbarContainer.contains(e.target) && !searchIconLink.contains(e.target) && searchbarContainer.classList.contains('active')) {
                searchbarContainer.classList.remove('active');
            }
        });
    }

    function configurarPopupVideo(dadosAulas) {
        const videoModal = document.getElementById('video-popup');
        if (!videoModal) return;
        const videoPlayer = document.getElementById('popup-video-player');
        const aulaItems = document.querySelectorAll('.aula-item[data-video-src]');
        const closeButton = videoModal.querySelector('.close-button');
        const overlay = videoModal.querySelector('.modal-overlay');
        const aulaEscritaContainer = videoModal.querySelector('.aula-escrita');
        const openVideoModal = (videoSrc) => {
            const dadosDaAula = dadosAulas[videoSrc];
            if (dadosDaAula && videoPlayer && aulaEscritaContainer) {
                videoPlayer.src = videoSrc;
                aulaEscritaContainer.innerHTML = `
                    <h3>${dadosDaAula.titulo}</h3>
                    <p>${dadosDaAula.texto}</p>
                `;
                videoModal.classList.add('show');
                videoPlayer.play();
            } else {
                console.error("Dados da aula ou elementos do modal não encontrados para o vídeo:", videoSrc);
            }
        };
        const closeVideoModal = () => {
            if (videoPlayer) {
                videoPlayer.pause();
                videoPlayer.src = "";
            }
            videoModal.classList.remove('show');
        };
        aulaItems.forEach(item => {
            item.addEventListener('click', () => {
                openVideoModal(item.getAttribute('data-video-src'));
            });
        });
        if (closeButton) closeButton.addEventListener('click', closeVideoModal);
        if (overlay) overlay.addEventListener('click', closeVideoModal);
    }

    function configurarPopupQuestoes(dadosQuestoes) {
        const questModal = document.getElementById('quest-popup');
        if (!questModal) return;
        const questItems = document.querySelectorAll('.questao-item');
        const closeQuestButton = questModal.querySelector('.close-button');
        const questOverlay = questModal.querySelector('.modal-overlay');
        const questContentContainer = document.getElementById('quest-content');
        const openQuestModal = (questId) => {
            const conteudo = dadosQuestoes[questId] || "<p>Nenhuma questão encontrada para esta lista.</p>";
            if (questContentContainer) {
                questContentContainer.innerHTML = conteudo;
                questModal.classList.add('show');
            }
        };
        const closeQuestModal = () => {
            questModal.classList.remove('show');
        };
        questItems.forEach(item => {
            item.addEventListener('click', () => {
                openQuestModal(item.getAttribute('data-quest-id'));
            });
        });
        if (closeQuestButton) closeQuestButton.addEventListener('click', closeQuestModal);
        if (questOverlay) questOverlay.addEventListener('click', closeQuestModal);
    }
    
    function configurarPopupConfig() {
        const configModals = document.querySelectorAll('.modal-config');
        if (configModals.length === 0) return;
        const openButtons = document.querySelectorAll('[data-modal-target]');
        openButtons.forEach(button => {
            button.addEventListener('click', () => {
                const modalId = button.dataset.modalTarget;
                const modal = document.getElementById(modalId);
                if (modal) {
                    modal.classList.add('show');
                }
            });
        });
        configModals.forEach(modal => {
            const overlay = modal.querySelector('.modal-overlay');
            if (overlay) {
                overlay.addEventListener('click', () => {
                    modal.classList.remove('show');
                });
            }
            const closeBtn = modal.querySelector('.close-button');
            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    modal.classList.remove('show');
                });
            }
        });
    }
});
