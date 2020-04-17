let col,
    lin,
    at,
    ant,
    scale = 0.99;

function setup() {
  pixelDensity(1);
  createCanvas(900, 900);
  col = width; //Largura Canvas Box
  lin = height; //Altura Canvas Box
  at = new Array(col).fill(0).map(n => new Array(lin).fill(0));
  ant = new Array(col).fill(0).map(n => new Array(lin).fill(0));
}

function mouseDragged() {
  ant[mouseX][mouseY] = 2000;
}

function draw() {
  background(0);

  loadPixels();
  for (let i = 1; i < col - 1; i++) {
    for (let j = 1; j < lin - 1; j++) {
      at[i][j] =
        (ant[i - 1][j] +
          ant[i + 1][j] +
          ant[i][j - 1] +
          ant[i][j + 1]) /
          2 -
        at[i][j];
      at[i][j] = at[i][j] * scale;
      let index = (i + j * col) * 4;
      pixels[index + 0] = at[i][j];
      pixels[index + 1] = at[i][j];
      pixels[index + 2] = at[i][j];
    }
  }
  updatePixels();
  let temp = ant;
  ant = at;  at = temp;
}