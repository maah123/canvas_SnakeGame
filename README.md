<h1>SNAKE GAME</h1>

- <h2>Objetivo</h2>
<p>Recriar o jogo da "cobrinha" utilizando o Canvas.</p>

- <h2>Canvas</h2>
<p>Canvas é um elemento do HTML5 que cria um espaço possibilitando adicionar animações, imagens, formas geométricas, etc.</p>

- <h2>Funcionalidade do código</h2>
<p>Primeiramente, precisou-se definir o espaço do <i>stage</i> e criar um <i>context</i> onde fica toda a parte visual (gráfica) da página.</p>

<p>Após definir as variáveis utilizadas nos cálculos, foi utilizado o <span style="color:blue">fillStyle</span>, comando para definir o estilo, e o <span style="color:blue">fillRect</span>, em que define a posição inical dos elementos e o seu tamanho.</p>

<p>Para o controle da direção dos movimentos da cobra, o comando <span style="color:blue">addEventListener</span> com o evento <span style="color:blue">keydown</span> foi usado para identificar as teclas das setas, sendo 37 representado a tecla esquerda, 38 a de baixo, 39 a da direita e 40 é a tecla inferior. Seu movimento depende da variável <span style="color:blue">vel</span> que adiciona ao comprimento da cobra uma unidade de caixa a cada 90ms, definido em <span style="color:blue">dsetInterval</span>.</p>

<p>Em relação a comida, ela é gerada de modo aleatório a partir do comando <span style="color:blue">Math.random</span>. Quando a cabeça da cobra, <span style="color:blue">snake[0]</span>, chega na posição da comida, é adicionado um elemento de caixa a mais na frente da cobra, passando a ser a nova cabeça e para isso é criado a variável <span style="color:blue">newHead()</span>.</p>

<p>Enquanto que o comando <span style="color:blue">snake.unshift</span> adiciona uma caixa na frente da cobra, o comando <span style="color:blue">snake.pop()</span> retira uma unidade de caixa na parte inferior.</p>