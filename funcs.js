document.addEventListener('DOMContentLoaded', function() {

    // Inicialização de Dados

    const dadosSite = {
        aulas: {
            "videos/micro_aula01.mp4": {
                titulo: "Introdução à Microbiologia",
                texto: "Nesta aula inaugural, exploramos o que é a microbiologia, a história da descoberta dos microrganismos e sua importância fundamental para a vida na Terra. Abordamos a classificação dos principais grupos: bactérias, arquéias, fungos, protozoários, algas e vírus.",
                materia: "Microbiologia"
            },
            "videos/micro_aula02.mp4": {
                titulo: "Estrutura Celular Bacteriana",
                texto: "Um mergulho profundo na célula procariótica. Detalhamos as funções da parede celular, membrana plasmática, ribossomos, nucleoide e outras estruturas como flagelos e fímbrias, essenciais para a sobrevivência e patogenicidade bacteriana.",
                materia: "Microbiologia"
            },
            "videos/micro_aula03.mp4": {
                titulo: "Metabolismo e Crescimento Microbiano",
                texto: "Como os microrganismos obtêm energia? Discutimos as principais vias metabólicas, como a glicólise e a respiração celular, e os fatores que influenciam o crescimento microbiano, como temperatura, pH e disponibilidade de nutrientes. Apresentamos as fases da curva de crescimento.",
                materia: "Microbiologia"
            },
            "videos/micro_aula04.mp4": {
                titulo: "Genética Bacteriana",
                texto: "Esta aula aborda a organização do material genético em bactérias e os mecanismos de transferência de genes, como conjugação, transformação e transdução. Explicamos como esses processos contribuem para a rápida adaptação e resistência a antibióticos.",
                materia: "Microbiologia"
            },
            "videos/macro_aula01.mp4": {
                titulo: "Introdução ao Reino Animal",
                texto: "Uma visão geral sobre a diversidade do Reino Animalia. Apresentamos os principais filos, desde poríferos e cnidários até cordados, destacando as características evolutivas chave, como simetria, tecidos corporais e desenvolvimento embrionário, que definem cada grupo.",
                materia: "Macrobiologia"
            },
            "videos/macro_aula02.mp4": {
                titulo: "Fisiologia Comparada: Sistema Digestório",
                texto: "Analisamos as diferentes estratégias e estruturas que os animais desenvolveram para a digestão, desde a digestão intracelular em esponjas até os sistemas digestórios completos e especializados de vertebrados, relacionando a dieta de cada animal com sua anatomia.",
                materia: "Macrobiologia"
            },
            "videos/macro_aula03.mp4": {
                titulo: "Fisiologia Comparada: Sistema Respiratório",
                texto: "Como os animais respiram? Comparamos as diversas formas de trocas gasosas: difusão direta, respiração cutânea, traqueal, branquial e pulmonar. Explicamos como cada sistema é adaptado ao ambiente em que o animal vive, seja aquático ou terrestre.",
                materia: "Macrobiologia"
            },
            "videos/macro_aula04.mp4": {
                titulo: "Padrões Reprodutivos nos Animais",
                texto: "Esta aula explora a variedade de estratégias reprodutivas no reino animal, incluindo reprodução assexuada e sexuada, fecundação interna e externa, e os diferentes tipos de desenvolvimento, como ovíparo, vivíparo e ovovivíparo, com exemplos fascinantes.",
                materia: "Macrobiologia"
            }
        },
        questoes: {
            'micro1': {
                titulo: "Questões de Microbiologia - Lista 1",
                materia: "Microbiologia",
                perguntas: [
                    { p: "1. Qual destes microrganismos é um procarionte?", a: ["A) Vírus", "B) Bactéria", "C) Fungo", "D) Protozoário"], R: 1 },
                    { p: "2. A penicilina é um tipo de:", a: ["A) Antiviral", "B) Antifúngico", "C) Antibiótico", "D) Vacina"], R: 2 }
                ]
            },
            'micro2': {
                titulo: "Questões de Microbiologia - Lista 2",
                materia: "Microbiologia",
                perguntas: [
                    { p: "1. O que é a pasteurização?", a: ["A) Um processo de congelamento rápido.", "B) Um processo para eliminar microrganismos pelo calor.", "C) Um método de cultura de bactérias.", "D) Um tipo de fermentação."], R: 1 }
                ]
            },
            'micro3': {
                titulo: "Questões de Microbiologia - Lista 3",
                materia: "Microbiologia",
                perguntas: [
                    { p: "1. Qual estrutura confere motilidade à maioria das bactérias?", a: ["A) Fímbrias", "B) Parede Celular", "C) Flagelo", "D) Cápsula"], R: 2 }
                ]
            },
            'micro4': {
                titulo: "Questões de Microbiologia - Lista 4",
                materia: "Microbiologia",
                perguntas: [
                    { p: "1. O processo de transferência de material genético através de um 'pilus sexual' é chamado de:", a: ["A) Transformação", "B) Conjugação", "C) Transdução", "D) Mutação"], R: 1 }
                ]
            },
            'macro1': {
                titulo: "Questões de Macrobiologia - Lista 1",
                materia: "Macrobiologia",
                perguntas: [
                    { p: "1. Qual destes animais é um mamífero?", a: ["A) Tubarão", "B) Pinguim", "C) Morcego", "D) Tartaruga"], R: 2 }
                ]
            },
            'macro2': {
                titulo: "Questões de Macrobiologia - Lista 2",
                materia: "Macrobiologia",
                perguntas: [
                    { p: "1. Animais que possuem um sistema digestório com uma única abertura (boca/ânus) são chamados de:", a: ["A) Completos", "B) Incompletos", "C) Ausentes", "D) Complexos"], R: 1 }
                ]
            },
            'macro3': {
                titulo: "Questões de Macrobiologia - Lista 3",
                materia: "Macrobiologia",
                perguntas: [
                    { p: "1. A respiração realizada através da pele, comum em anfíbios, é chamada de:", a: ["A) Pulmonar", "B) Traqueal", "C) Branquial", "D) Cutânea"], R: 3 }
                ]
            },
            'macro4': {
                titulo: "Questões de Macrobiologia - Lista 4",
                materia: "Macrobiologia",
                perguntas: [
                    { p: "1. O desenvolvimento embrionário que ocorre dentro de um ovo, fora do corpo da mãe, é classificado como:", a: ["A) Vivíparo", "B) Ovíparo", "C) Ovovivíparo", "D) Metamorfose"], R: 1 }
                ]
            }
        }
    };

    // Inicialização de Modais

    function inicializarModais() {
        if (!document.getElementById('video-popup')) {
            const modalVideo = document.createElement('div');
            modalVideo.id = 'video-popup';
            modalVideo.className = 'modal';
            modalVideo.innerHTML = `
                <div class="sobreposicao-modal"></div>
                <div class="conteudo-modal">
                    <span class="botao-fechar">&times;</span>
                    <div class="container-video"></div>
                    <div class="aula-escrita"></div>
                </div>
            `;
            document.body.appendChild(modalVideo);
        }

        if (!document.getElementById('quest-popup')) {
            const modalQuestao = document.createElement('div');
            modalQuestao.id = 'quest-popup';
            modalQuestao.className = 'modal';
            modalQuestao.innerHTML = `
                <div class="sobreposicao-modal"></div>
                <div class="conteudo-modal">
                    <span class="botao-fechar">&times;</span>
                    <div id="conteudo-questao" class="aula-escrita"></div>
                </div>
            `;
            document.body.appendChild(modalQuestao);
        }

        document.querySelectorAll('.modal, .modal-config').forEach(modal => {
            const btnFechar = modal.querySelector('.botao-fechar');
            const sobreposicao = modal.querySelector('.sobreposicao-modal');
            if (btnFechar) btnFechar.addEventListener('click', () => modal.classList.remove('mostrar'));
            if (sobreposicao) sobreposicao.addEventListener('click', () => modal.classList.remove('mostrar'));
        });

        document.querySelectorAll('.aula-item').forEach(item => {
            item.addEventListener('click', () => {
                if (item.dataset.videoSrc) {
                    abrirModalVideo(item.dataset.videoSrc);
                } else if (item.dataset.questId) {
                    abrirModalQuestao(item.dataset.questId);
                }
            });
        });
    }

    // Gerenciamento de Usuários

    function obterBancoUsuarios() {
        const usuarios = localStorage.getItem('biofaq_users');
        return usuarios ? JSON.parse(usuarios) : {};
    }

    function salvarBancoUsuarios(bancoDados) {
        localStorage.setItem('biofaq_users', JSON.stringify(bancoDados));
    }

    function obterUsuarioAtual() {
        return localStorage.getItem('biofaq_session');
    }

    function lidarComLogout() {
        const botaoLogout = document.getElementById('btn-logout');
        if (botaoLogout) {
            botaoLogout.addEventListener('click', () => {
                if (confirm("Você tem certeza que quer sair?")) {
                    localStorage.removeItem('biofaq_session');
                    window.location.href = 'login.html';
                }
            });
        }
    }

    function lidarComRegistro() {
        const botaoRegistro = document.getElementById('registro');
        if (!botaoRegistro) return;

        botaoRegistro.addEventListener('click', function() {
            const nomeUsuario = document.getElementById('nomereg').value;
            const senha = document.getElementById('senhareg').value;
            const email = document.getElementById('emailreg').value;
            if (!nomeUsuario || !senha || !email) {
                alert("Por favor, preencha todos os campos.");
                return;
            }
            const bancoDados = obterBancoUsuarios();

            if (bancoDados[nomeUsuario]) {
                alert("Este nome de usuário já existe. Tente outro.");
                return;
            }
            bancoDados[nomeUsuario] = {
                password: senha,
                email: email,
                history: {
                    aulas: [],
                    questoes: [] 
                }
            };
            salvarBancoUsuarios(bancoDados);
            alert("Registro bem-sucedido! Agora você pode fazer o login.");
            window.location.href = 'login.html';
        });
    }

    function lidarComLogin() {
        const botaoLogin = document.getElementById('login');
        if (!botaoLogin) return;
        botaoLogin.addEventListener('click', function() {
            const nomeUsuario = document.getElementById('nomelog').value;
            const senha = document.getElementById('senhalog').value;
            if (!nomeUsuario || !senha) {
                alert("Por favor, preencha todos os campos.");
                return;
            }
            const bancoDados = obterBancoUsuarios();
            const usuario = bancoDados[nomeUsuario];
            if (usuario && usuario.password === senha) {
                localStorage.setItem('biofaq_session', nomeUsuario);
                alert("Login bem-sucedido!");
                window.location.href = 'config.html';
            } else {
                alert("Nome de usuário ou senha incorretos.");
            }
        });
    }

    // Gerenciamento de Sessão 

    function verificarSessao() {
        const usuarioAtual = obterUsuarioAtual();
        const linkConta = document.querySelector('a[href="login.html"], a[href="config.html"]');
        if (usuarioAtual) {
            if (linkConta) {
                linkConta.href = 'config.html';
            }
        } else {
            if (linkConta) {
                linkConta.href = 'login.html';
            }
        }
    }

    function preencherPerfil() {
        if (!window.location.pathname.endsWith('config.html')) return;
        const usuarioAtual = obterUsuarioAtual();
        if (!usuarioAtual) return;
        const bancoDados = obterBancoUsuarios();
        const usuario = bancoDados[usuarioAtual];
        document.querySelector('.perfil-info h1').textContent = usuarioAtual;
        document.querySelector('.perfil-info p').textContent = usuario.email;
    }

    function preencherHistorico() {
        if (!window.location.pathname.endsWith('config.html')) return;
        const usuarioAtual = obterUsuarioAtual();
        if (!usuarioAtual) return;
        const bancoDados = obterBancoUsuarios();
        const historico = bancoDados[usuarioAtual].history;
        const carrosselAulas = document.querySelector('.historico-categoria:nth-of-type(1) .carrossel-historico');
        const carrosselQuestoes = document.querySelector('.historico-categoria:nth-of-type(2) .carrossel-historico'); 
        carrosselAulas.innerHTML = '';
        carrosselQuestoes.innerHTML = '';
        if (historico.aulas.length > 0) {
            historico.aulas.forEach(videoSrc => {
                const dadosAula = dadosSite.aulas[videoSrc];
                if (dadosAula) {
                    const item = document.createElement('div');
                    item.className = 'aula-item';
                    item.setAttribute('data-video-src', videoSrc);
                    item.title = dadosAula.titulo;
                    item.innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
                        </svg>
                        <p>${dadosAula.titulo}</p>
                    `;
                    carrosselAulas.appendChild(item);
                }
            });
        } else {
            carrosselAulas.innerHTML = '<p>Nenhuma aula assistida ainda.</p>';
        }
        if (historico.questoes.length > 0) {
            historico.questoes.forEach(resultado => {
                const idQuestao = resultado.questId;
                const dadosQuestao = dadosSite.questoes[idQuestao];
                if (dadosQuestao) {
                    const total = resultado.answers.length;
                    const contagemCorretas = resultado.answers.filter(r => r.selected == r.correct).length;
                    const item = document.createElement('div');
                    item.className = 'aula-item questao-item';
                    item.setAttribute('data-quest-id', idQuestao);
                    item.title = dadosQuestao.titulo;
                    item.innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-clipboard-check" viewBox="0 0 16 16">
                           <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                           <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                           <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                        </svg>
                        <p>${dadosQuestao.titulo.split(' - ')[1]} (Acertos: ${contagemCorretas}/${total})</p>
                    `;
                    carrosselQuestoes.appendChild(item);
                }
            });
        } else {
            carrosselQuestoes.innerHTML = '<p>Nenhuma lista resolvida ainda.</p>';
        }
    }

    // Função de pesquisa

    function lidarComPesquisa() {
        const campoPesquisa = document.getElementById('pesc');
        if (!campoPesquisa) return;
        campoPesquisa.addEventListener('keyup', function(evento) {
            if (evento.key !== 'Enter') return;
            const termoPesquisa = evento.target.value.toLowerCase().trim();
            if (!termoPesquisa) return;
            const resultados = { aulas: [], questoes: [] };  
            Object.entries(dadosSite.aulas).forEach(([src, dados]) => {
                if (src.toLowerCase().includes(termoPesquisa) || 
                    (dados.titulo && dados.titulo.toLowerCase().includes(termoPesquisa)) || 
                    (dados.texto && dados.texto.toLowerCase().includes(termoPesquisa)) ||
                    (dados.materia && dados.materia.toLowerCase().includes(termoPesquisa))) {
                    resultados.aulas.push({ src, data: dados });
                }
            });
            Object.entries(dadosSite.questoes).forEach(([id, dados]) => {
                if (id.toLowerCase().includes(termoPesquisa) || 
                    (dados.titulo && dados.titulo.toLowerCase().includes(termoPesquisa)) ||
                    (dados.materia && dados.materia.toLowerCase().includes(termoPesquisa))) {
                    resultados.questoes.push({ id, data: dados });
                }
            });
            const conteudoPesquisa = document.getElementById('search-content'); 
            const modalPesquisa = document.getElementById('popup-pesquisa'); 
            let html = `<h2>Resultados para "${termoPesquisa}"</h2>`;
            if (resultados.aulas.length > 0) {
                html += '<h3>Aulas Encontradas</h3><div class="grade-aulas">';
                resultados.aulas.forEach(res => {
                    html += `
                        <div class="aula-item" data-video-src="${res.src}" title="${res.data.titulo}">
                             <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/><path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/></svg>
                            <p>${res.data.titulo}</p>
                        </div>`;
                });
                html += '</div>';
            }
            if (resultados.questoes.length > 0) {
                html += '<h3>Questões Encontradas</h3><div class="grade-aulas">'; 
                resultados.questoes.forEach(res => {
                    html += `
                        <div class="aula-item questao-item" data-quest-id="${res.id}" title="${res.data.titulo}">
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-clipboard-check" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/></svg>
                            <p>${res.data.titulo}</p>
                        </div>`;
                });
                html += '</div>';
            }
            if (resultados.aulas.length === 0 && resultados.questoes.length === 0) {
                html += '<p>Nenhum conteúdo encontrado.</p>';
            }
            conteudoPesquisa.innerHTML = html;
            modalPesquisa.classList.add('mostrar'); 
            evento.target.value = '';
            document.getElementById('barra_pesquisa').classList.remove('ativa'); 
        });
    }

    // Inicialização Geral do Site

    function inicializarSite() {
        inicializarModais();
        verificarSessao();
        lidarComRegistro();
        lidarComLogin();
        lidarComLogout();
        preencherPerfil();
        preencherHistorico();
        configurarMenu();
        lidarComPesquisa();
        configurarInteracaoPopups();
        configurarPopupsConfig();
        configurarInteracaoQuiz();
    }
    
    inicializarSite();

    // Configurações de interface

    function configurarMenu() {
        const menuSuspenso = document.querySelector('.menu-suspenso'); 
        const iconeAulas = document.getElementById('aulas');
        const linkIconePesquisa = document.querySelector('a[href="#"]');
        const containerBarraPesquisa = document.getElementById('barra_pesquisa');
        if (iconeAulas) {
            iconeAulas.addEventListener('click', function(e) {
                e.stopPropagation();
                containerBarraPesquisa.classList.remove('ativa');
                menuSuspenso.classList.toggle('aberto');
            });
        }
        if (linkIconePesquisa) {
            linkIconePesquisa.addEventListener('click', function(e) {
                e.preventDefault(); 
                menuSuspenso.classList.remove('aberto');
                containerBarraPesquisa.classList.toggle('ativa');
                if (containerBarraPesquisa.classList.contains('ativa')) {
                    document.getElementById('pesc').focus();
                }
            });
        }
        document.addEventListener('click', function(e) {
            if (menuSuspenso && !menuSuspenso.contains(e.target) && menuSuspenso.classList.contains('aberto')) { 
                menuSuspenso.classList.remove('aberto');
            }
            if (containerBarraPesquisa && !containerBarraPesquisa.contains(e.target) && !linkIconePesquisa.contains(e.target) && containerBarraPesquisa.classList.contains('ativa')) { 
                containerBarraPesquisa.classList.remove('ativa'); 
            }
        });
    }

    function configurarInteracaoPopups() {
        document.body.addEventListener('click', (e) => {
            const itemVideo = e.target.closest('.aula-item[data-video-src]');
            if (itemVideo) {
                e.preventDefault();
                abrirModalVideo(itemVideo.dataset.videoSrc);
                return;
            }
            const itemQuestao = e.target.closest('.questao-item[data-quest-id]');
            if (itemQuestao) {
                e.preventDefault();
                abrirModalQuestao(itemQuestao.dataset.questId);
                return;
            }
            const botaoFechar = e.target.closest('.modal .botao-fechar, .modal .sobreposicao-modal, .modal-config .botao-fechar, .modal-config .sobreposicao-modal');
            if (botaoFechar) {
                const modal = botaoFechar.closest('.modal, .modal-config');
                if (modal) modal.classList.remove('mostrar');
                const playerVideo = modal ? modal.querySelector('video') : null;
                if (playerVideo) {
                    playerVideo.pause();
                    playerVideo.src = "";
                }
            }
        });
    }

    function abrirModalVideo(videoSrc) {
        const modalVideo = document.getElementById('video-popup');
        if (!modalVideo) return;
        let playerVideo = modalVideo.querySelector('#popup-video-player');
        let containerVideo = modalVideo.querySelector('.container-video'); 
        let containerAulaEscrita = modalVideo.querySelector('.aula-escrita');
        if (!playerVideo) {
            containerVideo.innerHTML = `<div class="reprodutor-video"> <video id="popup-video-player" width="100%" controls>
                                                Seu navegador não suporta a tag de vídeo.
                                            </video>
                                        </div>`;
            playerVideo = modalVideo.querySelector('#popup-video-player');
        }
        const dadosDaAula = dadosSite.aulas[videoSrc];
        if (dadosDaAula && playerVideo) {
            playerVideo.src = videoSrc;
            containerAulaEscrita.innerHTML = `
                <h3>${dadosDaAula.titulo}</h3>
                <p>${dadosDaAula.texto}</p>
            `;
            modalVideo.classList.add('mostrar');
            playerVideo.play();
            const usuarioAtual = obterUsuarioAtual();
            if (usuarioAtual) {
                const bancoDados = obterBancoUsuarios();
                if (!bancoDados[usuarioAtual].history.aulas.includes(videoSrc)) {
                    bancoDados[usuarioAtual].history.aulas.push(videoSrc);
                    salvarBancoUsuarios(bancoDados);
                }
            }
        }
    }

    function abrirModalQuestao(idQuestao) {
        const modalQuestao = document.getElementById('quest-popup');
        if (!modalQuestao) return;
        const containerConteudoQuestao = document.getElementById('conteudo-questao');
        const dadosQuestao = dadosSite.questoes[idQuestao];
        if (!dadosQuestao) {
            containerConteudoQuestao.innerHTML = "<p>Erro: Lista de questões não encontrada.</p>";
            modalQuestao.classList.add('mostrar');
            return;
        }

        let html = `<h3>${dadosQuestao.titulo}</h3>`;
        dadosQuestao.perguntas.forEach((pergunta, indice) => {
            html += `<div class="question-block">
                        <p class="pergunta">${pergunta.p}</p>
                        <ul class="alternativas" data-question-index="${indice}" data-correct-index="${pergunta.R}">`;
            pergunta.a.forEach((alternativa, indiceAlt) => {
                html += `<li data-answer-index="${indiceAlt}">${alternativa}</li>`;
            });
            html += `</ul>
                     <div class="feedback" data-feedback-index="${indice}"></div>
                     </div>`;
        });
        html += `<button id="submit-quest" class="botao-config">Verificar Respostas</button>`;
        containerConteudoQuestao.innerHTML = html;
        modalQuestao.dataset.currentQuestId = idQuestao;
        modalQuestao.classList.add('mostrar');
        configurarInteracaoQuiz();
    }

    function configurarInteracaoQuiz() {
        const modalQuestao = document.getElementById('quest-popup');
        if (!modalQuestao) return;
        if (modalQuestao.dataset.quizInit === '1') return;
        modalQuestao.dataset.quizInit = '1';
        modalQuestao.addEventListener('click', (e) => {
            const li = e.target.closest('li');
            if (li && li.closest('.alternativas')) {
                const ul = li.closest('ul');
                if (ul.classList.contains('respondido')) return;
                ul.querySelectorAll('li').forEach(x => x.classList.remove('selecionada'));
                li.classList.add('selecionada');
                return;
            }
            if (e.target && e.target.id === 'submit-quest') {
                e.preventDefault();
                lidarEnvioQuiz();
                e.target.disabled = true;
                e.target.textContent = "Resultados Salvos!";
                return;
            }
        });
    }

    function lidarEnvioQuiz() {
        const modalQuestao = document.getElementById('quest-popup');
        if (!modalQuestao) return;
        const idQuestaoAtual = modalQuestao.dataset.currentQuestId;
        if (!idQuestaoAtual) return;
        const todasPerguntas = modalQuestao.querySelectorAll('.alternativas');
        const resultados = {
            questId: idQuestaoAtual,
            answers: []
        };
        todasPerguntas.forEach(ul => {
            const indicePergunta = parseInt(ul.dataset.questionIndex, 10);
            const indiceCorreto = parseInt(ul.dataset.correctIndex, 10);
            const liSelecionado = ul.querySelector('li.selecionada');
            let indiceSelecionado = -1;
            if (liSelecionado) {
                indiceSelecionado = parseInt(liSelecionado.dataset.answerIndex, 10);
                if (indiceSelecionado === indiceCorreto) {
                    liSelecionado.style.backgroundColor = '#d4edda';
                    liSelecionado.style.borderColor = '#c3e6cb';
                } else {
                    liSelecionado.style.backgroundColor = '#f8d7da';
                    liSelecionado.style.borderColor = '#f5c6cb';
                }
            }
            const liCorreto = ul.querySelector(`li[data-answer-index="${indiceCorreto}"]`);
            if (liCorreto) {
                liCorreto.style.fontWeight = 'bold';
                if (indiceSelecionado !== indiceCorreto) {
                    liCorreto.style.backgroundColor = '#d4edda';
                }
            }
            ul.classList.add('respondido');
            const feedbackEl = modalQuestao.querySelector(`.feedback[data-feedback-index="${indicePergunta}"]`);
            if (feedbackEl) {
                if (indiceSelecionado === -1) {
                    feedbackEl.innerHTML = `<span style="color:#856404">Sem resposta selecionada</span>`;
                } else if (indiceSelecionado === indiceCorreto) {
                    feedbackEl.innerHTML = `<span style="color:green">Correto ✅</span>`;
                } else {
                    const textoCorreto = liCorreto ? liCorreto.textContent : 'Resposta correta';
                    feedbackEl.innerHTML = `<span style="color:red">Errado ❌ — resposta correta: ${textoCorreto}</span>`;
                }
            }
            resultados.answers.push({ selected: indiceSelecionado, correct: indiceCorreto });
        });
        const usuarioAtual = obterUsuarioAtual();
        if (usuarioAtual) {
            const bancoDados = obterBancoUsuarios();
            bancoDados[usuarioAtual].history.questoes = bancoDados[usuarioAtual].history.questoes.filter(q => q.questId !== idQuestaoAtual);
            bancoDados[usuarioAtual].history.questoes.push(resultados);
            salvarBancoUsuarios(bancoDados);
        }
    }

    // Configurações do usuário

    function configurarPopupsConfig() {
        const botoesAbrir = document.querySelectorAll('[data-modal-target]');
        botoesAbrir.forEach(botao => {
            botao.addEventListener('click', () => {
                const idModal = botao.dataset.modalTarget;
                const modal = document.getElementById(idModal);
                if (modal) {
                    modal.classList.add('mostrar'); 
                }
            });
        });
        const usuarioAtual = obterUsuarioAtual();
        if (!usuarioAtual) return;
        const btnSalvarNome = document.querySelector('#modal-nome button');
        if (btnSalvarNome) {
            btnSalvarNome.addEventListener('click', () => {
                const novoNome = document.getElementById('novo-nome').value;
                if (!novoNome) { alert("O nome não pode ficar em branco."); return; }
                let bancoDados = obterBancoUsuarios();
                if (bancoDados[novoNome]) { alert("Este nome de usuário já está em uso."); return; }
                bancoDados[novoNome] = bancoDados[usuarioAtual];
                delete bancoDados[usuarioAtual];
                salvarBancoUsuarios(bancoDados);
                localStorage.setItem('biofaq_session', novoNome);
                alert("Nome alterado com sucesso!");
                window.location.reload();
            });
        }
        const btnSalvarSenha = document.querySelector('#modal-senha button');
        if (btnSalvarSenha) {
            btnSalvarSenha.addEventListener('click', () => {
                const senhaAtual = document.getElementById('senha-atual').value;
                const novaSenha = document.getElementById('nova-senha').value;
                let bancoDados = obterBancoUsuarios();
                const usuario = bancoDados[usuarioAtual];
                if (usuario.password !== senhaAtual) { alert("A senha atual está incorreta."); return; }
                if (!novaSenha) { alert("A nova senha não pode ficar em branco."); return; }
                usuario.password = novaSenha;
                salvarBancoUsuarios(bancoDados);
                alert("Senha alterada com sucesso!");
                document.getElementById('modal-senha').classList.remove('mostrar');
            });
        }
        const btnSalvarEmail = document.querySelector('#modal-email button');
        if (btnSalvarEmail) {
            btnSalvarEmail.addEventListener('click', () => {
                const novoEmail = document.getElementById('novo-email').value;
                if (!novoEmail) { alert("O e-mail não pode ficar em branco."); return; }
                let bancoDados = obterBancoUsuarios();
                bancoDados[usuarioAtual].email = novoEmail;
                salvarBancoUsuarios(bancoDados);
                alert("E-mail alterado com sucesso!");
                window.location.reload();
            });
        }
    }
});