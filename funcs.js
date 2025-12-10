document.addEventListener('DOMContentLoaded', function() {

    // Inicialização de Dados

    const dadosSite = {
        aulas: {
            "videos/cito_aula.mp4": {
                "titulo": "Citologia: Estudo da Célula e Organelas",
                "texto": "A disciplina desta aula é a <b>Citologia</b>, que é o estudo da célula, a <b>menor unidade funcional</b> do corpo. A aula se concentra nos tipos de células, suas estruturas e as funções das organelas. <br> <br> <b>Tipos Celulares</b> <br> <br> <b>Procariontes:</b> Não possuem núcleo definido (material genético disperso) e não têm organelas membranosas. Exemplos: Bactérias, Cianobactérias, Arqueas. <br> <br> <b>Eucariontes:</b> Possuem núcleo definido por uma membrana nuclear chamada carioteca e têm organelas membranosas. Exemplos: Animais, Vegetais e outros seres mais complexos. <br> <br> <b>Estrutura Comum:</b> Ambos os tipos celulares possuem <b>Ribossomos</b> (organela responsável pela <b>Síntese Proteica</b>). <br> <br> <b>Diferenciação Eucarionte (Animal vs. Vegetal)</b> <br> <br> <b>Célula Vegetal Possui:</b> <br> <ul> <li> <b>Parede Celular:</b> Ausente na célula animal. </li> <li> <b>Cloroplastos:</b> Organela exclusiva da célula vegetal, responsável pela fotossíntese. </li> <li> <b>Vacúolo:</b> Mais desenvolvido e central, para armazenar líquido e amido. </li> </ul> <br> <b>Função das Organelas Eucariontes</b> <br> <br> <b>Núcleo:</b> Armazena o material genético. Local da <b>Transcrição</b> (DNA para RNA). <br> <br> <b>Ribossomos:</b> Realizam a <b>Tradução</b> (RNA para Proteína). <br> <br> <b>Retículo Endoplasmático Rugoso (RER):</b> Síntese e dobramento de proteínas, possui ribossomos aderidos. <br> <br> <b>Retículo Endoplasmático Liso (REL):</b> Síntese de <b>Lipídios</b> e hormônios esteroides. <br> <br> <b>Complexo de Golgi:</b> <b>Empacotamento e Endereçamento</b> de substâncias (proteínas e lipídios). Muito desenvolvido em células secretoras. <br> <br> <b>Lisossomo:</b> Faz a <b>Lise</b> (quebra, degradação) e limpeza celular. <br> <br> <b>Mitocôndria:</b> É a <b>Usina Energética</b> da célula. Responsável pela <b>Respiração Celular</b> (produção de <b>ATP</b>). <br> <br> <b>Origem da Mitocôndria:</b> Possui membrana dupla e DNA próprio. Acredita-se ter vindo de um processo de <b>Endossimbiose</b> e seu DNA é de origem exclusivamente materna.",
                "materia": "Citologia",
                "transcricao": "https://docs.google.com/document/d/1ucyzArVUyk9ZP3rkX_nF4-3Ni5ymLFs8IsLZWEcJJc0/edit?usp=sharing",
                "questId": "cito1"
            },
            "videos/cito_aula02.mp4": {
                "titulo": "Citologia Avançada: Organelas e Introdução à Histologia",
                "texto": "A disciplina desta aula é a <b>Citologia</b>, que é o estudo da célula, a <b>menor unidade funcional</b> do corpo. A aula se concentra nos tipos de células, suas estruturas e as funções das organelas, além de introduzir a organização celular em tecidos. <br> <br> <b>Estrutura Básica da Célula</b> <br> <br> Toda célula possui: <b>Membrana Plasmática</b> (circunda a célula), <b>Citoplasma</b> e <b>Material Genético</b>. <br> <br> <b>Procariontes:</b> Material genético disperso no citoplasma. <br> <br> <b>Eucariontes:</b> Material genético contido em um <b>Núcleo</b> bem definido. <br> <br> <b>Diferenciação Eucarionte (Animal vs. Vegetal)</b> <br> <br> <b>Célula Vegetal Possui:</b> <b>Cloroplasto</b> (responsável pela fotossíntese, convertendo energia luminosa em glicose) e <b>Parede Celular</b> definida, além da membrana plasmática. <br> <br> <b>Organelas Eucariontes (Funcionários da Fábrica)</b> <br> <br> <b>Núcleo:</b> Contém o material genético. <br> <br> <b>Retículo Endoplasmático Rugoso (RER):</b> Possui ribossomos aderidos, realiza **Síntese Proteica**. <br> <br> <b>Retículo Endoplasmático Liso (REL):</b> Realiza **Síntese de Lipídios**. <br> <br> <b>Complexo de Golgi:</b> Próximo à membrana plasmática, sua função é **empacotar e endereçar** proteínas e lipídios para exportação. <br> <br> <b>Mitocôndrias:</b> É a **usina energética** da célula. Responsável pela **Respiração Celular**, produzindo **ATP** (adenosina trifosfato), a moeda energética celular. <br> <br> <b>Peroxissomos:</b> Responsáveis pela produção de radicais livres. <br> <br> <b>Lisossomos:</b> Realizam a **Lise** (limpeza/degradação) celular. (Ex: Células do fígado possuem muitos lisossomos). <br> <br> <b>Organização Celular (Micrométrico ao Macrométrico)</b> <br> <br> Células com características em comum se agrupam para formar <b>Tecidos</b>, que formam <b>Órgãos</b> e, consequentemente, <b>Sistemas</b>. <br> <br> <b>Tipos Principais de Tecidos (Histologia)</b> <br> <ul> <li> <b>Tecido Epitelial:</b> Tecido de revestimento (ex: pele, o maior órgão do corpo). </li> <li> <b>Tecido Conjuntivo:</b> Tecido muito variado que compõe sangue, cartilagem, gordura e tecido ósseo. </li> <li> <b>Tecido Muscular:</b> Dividido em Liso (órgãos internos), Esquelético (força e movimento) e Cardíaco (contração especializada). </li> <li> <b>Tecido Nervoso:</b> O mais especializado, composto por neurônios e células da glia. </li> </ul>",
                "materia": "Citologia/Histologia",
                "transcricao": "https://docs.google.com/document/d/1gqIkmoar8Tdl2pOTn5hgI5hS9o7rwsdRJqtvvrgNgC4/edit?usp=sharing",
                "questId": "cito2"
            },
            "videos/eco_aula.mp4": {
                "titulo": "Ecologia: Células Vegetais, Fotossíntese e Cadeia Alimentar",
                "texto": "A disciplina desta aula é a <b>Ecologia</b>, que estuda as interações dos seres vivos entre si e com o ambiente. A aula se concentra no papel das plantas como base da vida e no fluxo de energia nas cadeias alimentares. <br> <br> <b>Células Vegetais e Fotossíntese</b> <br> <br> <b>Cloroplastos e Clorofila:</b> A cor verde das células vegetais deve-se à organela chamada cloroplasto, que contém clorofila. <br> <br> <b>Fotossíntese:</b> A clorofila realiza a fotossíntese, o processo pelo qual a planta produz seu próprio alimento. <br> <br> <b>Processo:</b> Usando a energia luminosa (raios solares), a planta converte água (absorvida pela raiz e levada às folhas) e gás carbônico em glicose (alimento) e oxigênio. A glicose é transportada pelo floema para nutrir a planta. <br> <br> <b>Cadeia e Teia Alimentar</b> <br> <br> <b>Base da Cadeia:</b> As plantas são a base da cadeia alimentar. Elas são seres <b>autótrofos</b> (produzem seu próprio alimento) e, por isso, são chamadas de <b>produtores</b> (primeiro nível trófico). <br> <br> <b>Consumidores:</b> Seres que se alimentam de outros, não produzindo seu próprio alimento, são <b>heterótrofos</b>. <br> <br> <b>Consumidores Primários:</b> Alimentam-se diretamente dos produtores (plantas). <br> <br> <b>Consumidores Secundários, Terciários, etc.:</b> Alimentam-se de outros consumidores. <br> <br> <b>Decompositores:</b> A cadeia alimentar sempre termina nos decompositores (<b>fungos e bactérias</b>). Eles são cruciais para a <b>ciclagem da matéria orgânica</b>, decompondo a matéria morta e retornando os nutrientes ao ambiente para serem usados novamente pelos produtores. <br> <br> <b>Importância Adicional:</b> Fungos e bactérias também têm funções econômicas (ex: fermentação alcoólica para etanol, fermentação láctica para iogurte). <br> <br> <b>Cadeia Linear vs. Teia:</b> A cadeia alimentar é a representação linear (produtor -> consumidores -> decompositores), enquanto a <b>teia alimentar</b> representa as interações alimentares complexas e emaranhadas que realmente ocorrem na ecologia. <br> <br> <b>Nível Trófico:</b> Refere-se à posição que um organismo ocupa na cadeia/teia alimentar (ex: produtor, consumidor primário, consumidor secundário). Um ser como o humano (onívoro) pode ocupar diferentes níveis tróficos, dependendo do que está consumindo.",
                "materia": "Ecologia",
                "transcricao": "https://docs.google.com/document/d/1znUxdN8H8fA8me0YRUGq-4stiNKOuLlSRksNZ4EfCAg/edit?usp=sharing",
                "questId": "eco1"
            }
        },
        questoes: {
            'cito1': {
                titulo: "Questões de Citologia - Lista 1 (Estrutura Básica)",
                materia: "Citologia",
                videoId: "videos/cito_aula.mp4",
                perguntas: [
                    { p: "1. Qual é a principal característica que diferencia uma célula <b>procarionte</b> de uma célula <b>eucarionte</b>?", a: ["A) Presença de Ribossomos", "B) Presença de Membrana Plasmática", "C) Ausência de Núcleo definido", "D) Capacidade de realizar fotossíntese"], R: 2 },
                    { p: "2. Qual organela está presente tanto em células procariontes quanto em eucariontes e tem a função de realizar a <b>síntese proteica</b>?", a: ["A) Mitocôndria", "B) Complexo de Golgi", "C) Ribossomo", "D) Lisossomo"], R: 2 },
                    { p: "3. O material genético nas células procariontes está localizado:", a: ["A) Dentro do Núcleo", "B) No Citoplasma, na região do Nucleoide", "C) No Retículo Endoplasmático Rugoso", "D) Dentro do Vacúolo"], R: 1 },
                    { p: "4. Qual das estruturas abaixo é **exclusiva** da célula vegetal em comparação com a célula animal?", a: ["A) Membrana Plasmática", "B) Mitocôndria", "C) Complexo de Golgi", "D) Cloroplasto"], R: 3 },
                    { p: "5. A função principal da <b>Mitocôndria</b> é:", a: ["A) Empacotar proteínas", "B) Realizar Fotossíntese", "C) Produzir ATP (energia) pela respiração celular", "D) Fazer a lise e limpeza celular"], R: 2 }
                ]
            },
            'cito2': {
                titulo: "Questões de Citologia - Lista 2 (Funções e Histologia)",
                materia: "Citologia/Histologia",
                videoId: "videos/cito_aula02.mp4",
                perguntas: [
                    { p: "1. A organela responsável por **empacotar e endereçar** proteínas e lipídios para exportação é o(a):", a: ["A) Retículo Endoplasmático Liso", "B) Lisossomo", "C) Complexo de Golgi", "D) Peroxissomo"], R: 2 },
                    { p: "2. O <b>Retículo Endoplasmático Rugoso (RER)</b> tem sua função primária associada à:", a: ["A) Síntese de Lipídios", "B) Síntese Proteica", "C) Produção de radicais livres", "D) Armazenamento de água"], R: 1 },
                    { p: "3. Os <b>Lisossomos</b> desempenham qual papel essencial na célula?", a: ["A) Síntese de ATP", "B) Síntese de hormônios", "C) Lise e limpeza celular", "D) Absorção de luz"], R: 2 },
                    { p: "4. A sequência correta da organização biológica, do micro ao macro, citada na aula é:", a: ["A) Sistema -> Órgão -> Tecido -> Célula", "B) Célula -> Sistema -> Órgão -> Tecido", "C) Célula -> Tecido -> Órgão -> Sistema", "D) Órgão -> Tecido -> Célula -> Sistema"], R: 2 },
                    { p: "5. Qual dos seguintes não é um dos quatro tipos principais de tecido citados na aula (introdução à Histologia)?", a: ["A) Tecido Epitelial", "B) Tecido Conjuntivo", "C) Tecido Ósseo", "D) Tecido Nervoso"], R: 2 }
                ]
            },
            'eco1': {
                titulo: "Questões de Ecologia - Lista 1 (Cadeia e Níveis Tróficos)",
                materia: "Ecologia",
                videoId: "videos/eco_aula.mp4",
                perguntas: [
                    { p: "1. As plantas são classificadas como **produtores** (primeiro nível trófico) por serem seres:", a: ["A) Heterótrofos", "B) Onívoros", "C) Autótrofos", "D) Decompositores"], R: 2 },
                    { p: "2. O processo realizado pelo <b>Cloroplasto</b>, que converte energia luminosa em glicose, é chamado de:", a: ["A) Respiração Celular", "B) Quimiossíntese", "C) Fotossíntese", "D) Transcrição"], R: 2 },
                    { p: "3. Qual categoria de organismo é fundamental para a **ciclagem da matéria orgânica** na cadeia alimentar?", a: ["A) Consumidores Primários", "B) Produtores", "C) Consumidores Terciários", "D) Decompositores"], R: 3 },
                    { p: "4. Se um ser humano se alimenta de uma alface, ele ocupa o nível de:", a: ["A) Produtor", "B) Consumidor Primário", "C) Consumidor Secundário", "D) Decompositor"], R: 1 },
                    { p: "5. A representação mais **realista** das interações alimentares complexas na natureza é a:", a: ["A) Cadeia Alimentar", "B) Teia Alimentar", "C) Pirâmide de Energia", "D) Nível Trófico"], R: 1 }
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

    function configurarTTS() {
        let ttsAtivo = localStorage.getItem('tts_ativo') === 'true';
        const synth = window.speechSynthesis;
        const tagsPermitidas = ['P', 'H1', 'H2', 'H3', 'A', 'LI', 'SPAN', 'BUTTON', 'LABEL', 'INPUT', 'TH', 'TD', 'SVG'];
        const navHome = document.querySelector('#topoesq a, #topoesq span');
        if (navHome) navHome.setAttribute('aria-label', 'Página Inicial');
        const navSearch = document.querySelector('#topodir > li > a');
        if (navSearch) navSearch.setAttribute('aria-label', 'Barra de Pesquisa');
        const navConteudo = document.getElementById('aulas');
        if (navConteudo) navConteudo.setAttribute('aria-label', 'Conteúdos');
        const navConta = document.querySelector('a[href="login.html"], a[href="config.html"]');
        if (navConta) navConta.setAttribute('aria-label', 'Conta');

        function falar(texto) {
            if (synth.speaking) synth.cancel();
            const utterance = new SpeechSynthesisUtterance(texto);
            utterance.lang = 'pt-BR';
            synth.speak(utterance);
        }

        function apitar() {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.frequency.setValueAtTime(800, ctx.currentTime);
            gain.gain.setValueAtTime(0.05, ctx.currentTime);
            osc.start();
            osc.stop(ctx.currentTime + 0.1);
        }

        function alternarTTS() {
            ttsAtivo = !ttsAtivo;
            localStorage.setItem('tts_ativo', ttsAtivo);
            falar(ttsAtivo ? "Leitor de tela ativado" : "Leitor de tela desativado");
        }

        if (!document.getElementById('btn-tts')) {
            const btnTTS = document.createElement('div');
            btnTTS.id = 'btn-tts';
            btnTTS.title = "Ativar/Desativar Leitor de Tela (Tecla J)";
            btnTTS.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                </svg>
            `;
            document.body.appendChild(btnTTS);
            btnTTS.addEventListener('click', alternarTTS);
        }

        if (document.title === "Página Inicial") {
            setTimeout(() => {
                falar("Para ativar o leitor de tela aperte J ou clique no botão a esquerda");
            }, 500);
        }

        document.addEventListener('keydown', (e) => {
            const tag = e.target.tagName.toLowerCase();
            if (tag === 'input' || tag === 'textarea') return;
            
            if (e.key.toLowerCase() === 'j') {
                alternarTTS();
            }
        });

        document.body.addEventListener('mouseover', (e) => {
            if (!ttsAtivo) return;
            let target = e.target;
            if (target.tagName === 'path') target = target.closest('svg');
            if (target.tagName === 'svg' && target.parentElement.tagName === 'A') target = target.parentElement;

            if (tagsPermitidas.includes(target.tagName) || (target.tagName === 'svg' && target.hasAttribute('aria-label'))) {
                apitar();
                const texto = target.getAttribute('aria-label') || target.innerText || target.value || target.alt;
                if (texto && texto.trim()) falar(texto);
            }
        });

        document.body.addEventListener('mouseout', (e) => {
            if (ttsAtivo) synth.cancel();
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
        configurarTTS();
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
            
            // Tratamento para botões dinâmicos de navegação entre modais
            if (e.target.id === 'btn-ir-questoes') {
                const questId = e.target.dataset.targetQuest;
                const modalVideo = document.getElementById('video-popup');
                if (modalVideo) {
                     // Pausar vídeo antes de fechar
                    const video = modalVideo.querySelector('video');
                    if(video) video.pause();
                    modalVideo.classList.remove('mostrar');
                }
                abrirModalQuestao(questId);
                return;
            }

            if (e.target.id === 'btn-ir-aula') {
                const videoId = e.target.dataset.targetVideo;
                const modalQuest = document.getElementById('quest-popup');
                if (modalQuest) {
                    modalQuest.classList.remove('mostrar');
                }
                abrirModalVideo(videoId);
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
            
            let htmlConteudo = `<h3>${dadosDaAula.titulo}</h3><p>${dadosDaAula.texto}</p>`;
            
            // Adicionar botões se existirem links/referências
            if (dadosDaAula.transcricao || dadosDaAula.questId) {
                htmlConteudo += `<div class="botoes-aula-modal">`;
                if (dadosDaAula.transcricao) {
                    htmlConteudo += `<a href="${dadosDaAula.transcricao}" target="_blank" class="botao-modal-link">Ver Transcrição Completa</a>`;
                }
                if (dadosDaAula.questId) {
                    htmlConteudo += `<button id="btn-ir-questoes" data-target-quest="${dadosDaAula.questId}" class="botao-modal-link">Ir para Questões</button>`;
                }
                htmlConteudo += `</div>`;
            }

            containerAulaEscrita.innerHTML = htmlConteudo;
            
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
        
        html += `<div class="acoes-modal-questoes">`;
        html += `<button id="submit-quest" class="botao-config">Verificar Respostas</button>`;
        
        if (dadosQuestao.videoId) {
            html += `<button id="btn-ir-aula" data-target-video="${dadosQuestao.videoId}" class="botao-modal-link">Ir para a Aula</button>`;
        }
        html += `</div>`;

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