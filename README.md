<h1>SNAKE GAME</h1>

- <h2>Objetivo</h2>
<p>Recriar o jogo da "cobrinha" utilizando o Canvas.</p>

- <h2>Canvas</h2>
<p>Canvas é um elemento do HTML5 que cria um espaço possibilitando adicionar animações, imagens, formas geométricas, etc.</p>

- <h2>Funcionalidade do código</h2>
<p>Primeiramente, precisou-se definir o espaço do <i>stage</i> e criar um <i>context</i> onde fica toda a parte visual (gráfica) da página.</p>

<p>Após definir as variáveis utilizadas nos cálculos, foi utilizado o <b>fillStyle</b>, comando para definir o estilo, e o <b>fillRect</b>, em que define a posição inical dos elementos e o seu tamanho.</p>

<p>Para o controle da direção dos movimentos da cobra, o comando <b>addEventListener</b> com o evento <b>keydown</b> foi usado para identificar as teclas das setas, sendo 37 representado a tecla esquerda, 38 a de baixo, 39 a da direita e 40 é a tecla inferior. Seu movimento depende da variável <b>vel</b> que adiciona ao comprimento da cobra uma unidade de caixa a cada 90ms, definido em <b>dsetInterval</b>.</p>

<p>Em relação a comida, ela é gerada de modo aleatório a partir do comando <b>Math.random</b>. Quando a cabeça da cobra, <b>snake[0]</b>, chega na posição da comida, é adicionado um elemento de caixa a mais na frente da cobra, passando a ser a nova cabeça e para isso é criado a variável <b>newHead()</b>.</p>

<p>Enquanto que o comando <b>snake.unshift</b> adiciona uma caixa na frente da cobra, o comando <b>snake.pop()</b> retira uma unidade de caixa na parte inferior.</p>
