// Variáveis para controlar os olhos
let eyeLeftX, eyeLeftY;
let eyeRightX, eyeRightY;
let faceX, faceY;
let faceSize = 250;

function setup() {
    const container = document.getElementById('sketch-container');
    const width = container.clientWidth;
    const height = Math.min(window.innerHeight * 0.8, 800);
    
    let canvas = createCanvas(width, height);
    canvas.parent('sketch-container');
    
    // Centralizar o rosto
    faceX = width / 2;
    faceY = height / 2;
    
    // Posições iniciais dos olhos
    eyeLeftX = faceX - 60;
    eyeLeftY = faceY - 40;
    eyeRightX = faceX + 60;
    eyeRightY = faceY - 40;
}

function draw() {
    // Fundo
    background(245, 235, 220); // Cor bege/creme
    
    // Desenhar o rosto
    drawFace();
    
    // Desenhar os olhos que seguem o mouse
    drawEyes();
    
    // Desenhar outras características faciais
    drawFacialFeatures();
}

function drawFace() {
    // Rosto principal (círculo)
    fill(230, 200, 170); // Tom de pele
    stroke(150, 120, 90); // Contorno mais escuro
    strokeWeight(3);
    circle(faceX, faceY, faceSize);
    
    // Sombra lateral para dar profundidade
    noStroke();
    fill(200, 160, 130, 100); // Sombra translúcida
    circle(faceX + 50, faceY + 20, faceSize - 40);
}

function drawEyes() {
    // Calcular a direção para o mouse
    let angleLeft = atan2(mouseY - eyeLeftY, mouseX - eyeLeftX);
    let angleRight = atan2(mouseY - eyeRightY, mouseX - eyeRightX);
    
    // Desenhar olho esquerdo
    drawEye(eyeLeftX, eyeLeftY, angleLeft);
    
    // Desenhar olho direito
    drawEye(eyeRightX, eyeRightY, angleRight);
}

function drawEye(x, y, angle) {
    // Branco do olho
    fill(255);
    stroke(100);
    strokeWeight(2);
    circle(x, y, 50);
    
    // Íris que segue o mouse
    let irisDistance = 15; // Distância da íris em relação ao centro
    let irisX = x + cos(angle) * irisDistance;
    let irisY = y + sin(angle) * irisDistance;
    
    fill(80, 60, 40); // Cor da íris (marrom)
    noStroke();
    circle(irisX, irisY, 25);
    
    // Brilho no olho para dar vida
    fill(255, 255, 255, 200);
    circle(irisX - 5, irisY - 5, 8);
}

function drawFacialFeatures() {
    // Sobrancelhas
    drawEyebrow(eyeLeftX - 25, eyeLeftY - 35);
    drawEyebrow(eyeRightX + 25, eyeRightY - 35);
    
    // Nariz
    drawNose();
    
    // Boca (sorriso misterioso)
    drawMouth();
}

function drawEyebrow(x, y) {
    stroke(100, 80, 60);
    strokeWeight(4);
    noFill();
    arc(x, y, 50, 20, PI, 0);
}

function drawNose() {
    stroke(150, 120, 90);
    strokeWeight(2);
    noFill();
    
    // Ponte do nariz
    line(faceX, faceY - 20, faceX, faceY + 20);
    
    // Narinas
    arc(faceX - 8, faceY + 25, 10, 8, PI, 0);
    arc(faceX + 8, faceY + 25, 10, 8, PI, 0);
}

function drawMouth() {
    stroke(180, 100, 100); // Cor de lábio
    strokeWeight(3);
    noFill();
    
    // Sorriso misterioso (curva suave)
    beginShape();
    curveVertex(faceX - 60, faceY + 80);
    curveVertex(faceX - 40, faceY + 90);
    curveVertex(faceX, faceY + 95);
    curveVertex(faceX + 40, faceY + 90);
    curveVertex(faceX + 60, faceY + 80);
    endShape();
    
    // Detalhe dos lábios
    fill(200, 120, 120, 150);
    arc(faceX, faceY + 85, 100, 20, PI, 0);
}

function windowResized() {
    const container = document.getElementById('sketch-container');
    if (container) {
        const width = container.clientWidth;
        const height = Math.min(window.innerHeight * 0.8, 800);
        resizeCanvas(width, height);
        
        // Atualizar posições
        faceX = width / 2;
        faceY = height / 2;
        eyeLeftX = faceX - 60;
        eyeLeftY = faceY - 40;
        eyeRightX = faceX + 60;
        eyeRightY = faceY - 40;
    }
}
