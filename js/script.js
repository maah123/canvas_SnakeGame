/*-------------------------------------------
            definir variáveis
--------------------------------------------*/
let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let jogo = setInterval(iniarJogo, 90);
let box = 32;       //tamanho das caixas individuais
let piece = 16;     //quantidade de caixas
let snake = [];     //tamanho vazio da cobra
const vel = 1;      //quantidade de caixas que a cobra anda a cada atualização
let velx = 0;       //velocidade inicial da cobra
let vely = 0;
snake[0] = {        //posição inicial da cabeça da cobra
    x: 8 * box,
    y: 8 * box
}
let food = {        //localização da comida
    x: Math.floor(Math.random() * piece - 1) * box,
    y: Math.floor(Math.random() * piece - 1) * box
}

/*-------------------------------------------
    criar a caixa em que o jogo acontece
--------------------------------------------*/
function criarBG() {
    context.fillStyle = "gray";
    context.fillRect(0, 0, piece * box, piece * box); //desenha onde acontece o jogo (512, 512)
}

criarBG();

/*-------------------------------------------
            criar a cobrinhha
--------------------------------------------*/
function criarCobrinha() {
    for(i=0; i<snake.length; i++) {
        context.fillStyle = "darkblue";
        context.fillRect(snake[i].x, snake[i].y, box - 1, box - 1);
    }
}

criarCobrinha();

/*-------------------------------------------
            desenhar a cobrinha
--------------------------------------------*/
function drawFood() {
    context.fillStyle = "white";
    context.fillRect(food.x, food.y, box - 1, box - 1);
}

/*-------------------------------------------
              evento de clique
--------------------------------------------*/
document.addEventListener('keydown', update);

function update(event) {
    if(event.keyCode == 37) { //esquerda
        velx = -vel;
        vely = 0;
    }
    if(event.keyCode == 38) { //cima
        velx = 0;
        vely = -vel;
    }
    if(event.keyCode == 39) { //direita
        velx = vel;
        vely = 0;
    }
    if(event.keyCode == 40) { //baixo
        velx = 0;
        vely = vel;
    }
}
/*let direction = "right";
function update(event) {
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}*/

/*-------------------------------------------
função principal responsável por:
    limitar a cobra dentro do box;
    atualizar a posição da cobra;
    definir o tamanho da cobra ao comer;
    terminar o jogo ao bater no próprio corpo.
--------------------------------------------*/
function iniarJogo() {            
    //limitar a cobra dentro do box
    if(snake[0].x > (piece - 1) * box) snake[0].x = 0;
    if(snake[0].x < 0) snake[0].x = (piece - 1) * box;
    if(snake[0].y > (piece - 1) * box) snake[0].y = 0;
    if(snake[0].y < 0) snake[0].y = (piece - 1) * box;
    /*if(snake[0].x > 15*box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == 'left') snake[0].x = 16 * box;
    if(snake[0].y > 15*box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == 'up') snake[0].y = 16 * box;*/

    //atualizar a posição da cobra
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(velx == vel && vely == 0) snakeX += box;
    if(velx == -vel && vely == 0) snakeX -= box;
    if(velx == 0 && vely == -vel) snakeY -= box;
    if(velx == 0 && vely == vel) snakeY += box;
    /*if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;*/

    //definir o tamanho da cobra ao comer
    if(snakeX != food.x || snakeY != food.y) {
        snake.pop();
    } else {
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box
    }

    let newHead = {x: snakeX, y: snakeY}
    snake.unshift(newHead);

    //terminar o jogo ao bater no próprio corpo
    for(i = 1; i < snake.length; i++) {
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            clearInterval(jogo);
            alert('Game Over');
        }
    }

    criarBG();
    criarCobrinha();
    drawFood();
}