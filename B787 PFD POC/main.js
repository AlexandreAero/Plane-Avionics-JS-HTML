let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

const font = new FontFace("boeing787", 'url(ITC-Avant-Garde-Gothic-LT-Book-Regular.ttf)')

let btnWidth = 300;
let btnHeight = 60;

font.load().then(font => {
  document.fonts.add(font)
}).then(() => {
  ctx.beginPath();
  ctx.rect((1200 / 2) - 1, 10, btnWidth, btnHeight);
  ctx.shadowColor = 'black';
  ctx.shadowBlur = 1.5;
  ctx.lineWidth = 4;
  ctx.fillStyle = "#15a544";
  ctx.fill();
  ctx.strokeStyle = "#c6509f";
  ctx.stroke();

  ctx.fillStyle = "white";
  ctx.font = '20px boeing787';
  ctx.fillText('MAP', 722, 48);

  ctx.beginPath();
  ctx.rect((1200 / 2) + btnWidth + 1, 10, btnWidth, btnHeight);
  ctx.fillStyle = "#504f54";
  ctx.fill();

  ctx.fillStyle = "white";
  ctx.font = '20px boeing787';
  ctx.fillText('PLAN', 1020, 48);
})