function drawEllipse(ctx, coords, sizes, angle) {
    ctx.beginPath();
    ctx.save();
    //Coordinates to the center of the ellipse
    ctx.translate(coords[0], coords[1]);
    //Rotate to the angle
    ctx.rotate(angle);
    //Scaling
    ctx.scale(1, sizes[1]/sizes[0]);
    //Drawing a circle
    ctx.arc(0, 0, sizes[0], 0, Math.PI*2);
    ctx.restore();
    //Fill with color
    ctx.fillStyle = '#72acce';
    ctx.fill();
    //Line width
    ctx.lineWidth = 2;
    //Line color
    ctx.strokeStyle = '#1b4e6b';
    ctx.stroke();
    ctx.closePath();
}

function draw() {
      var canvas = document.getElementById("canvas1");
      if (canvas.getContext) {
          var ctx = canvas.getContext('2d');
          //Face
          drawEllipse(ctx, [150, 185], [100, 85], Math.PI);
          //Left eye
          drawEllipse(ctx, [100, 165], [15, 10], Math.PI);
          drawEllipse(ctx, [97, 165], [5, 9], Math.PI);
          ctx.fillStyle = '#1b4e6b';
          ctx.fill();
          //Right eye
          drawEllipse(ctx, [170, 165], [15, 10], Math.PI);
          drawEllipse(ctx, [167, 165], [5, 9], Math.PI);
          ctx.fillStyle = '#1b4e6b';
          ctx.fill();
          //Mouth
          drawEllipse(ctx, [130, 235], [40, 12], Math.PI / 20);
          //Nose
          ctx.beginPath();
          ctx.moveTo(135, 170);
          ctx.lineTo(115, 200);
          ctx.lineTo(135, 200);
          ctx.strokeStyle = '#1b4e6b';
          ctx.stroke();
          //Hat
            //Base
          drawEllipse(ctx, [145, 120], [110, 20], Math.PI);
          ctx.fillStyle = '#1a5582';
          ctx.fill();
          ctx.lineWidth = 2;
          ctx.strokeStyle = '#000000';
          ctx.stroke();
            //Cylinder ribs
          ctx.beginPath();
          ctx.rect(100, 35, 110, 70);
          ctx.fillStyle = '#1a5582';
          ctx.fill();
          ctx.lineWidth = 2;
          ctx.strokeStyle = '#000000';
          ctx.stroke();
          ctx.closePath();
            //Cylinder (top circle)
          ctx.beginPath();
          ctx.save();
          ctx.translate(155, 35);
          ctx.scale(1, 20/55);
          ctx.arc(0, 0, 55, 0, 2 * Math.PI);
          ctx.restore();
          ctx.fillStyle = '#1a5582';
          ctx.fill();
          ctx.lineWidth = 2;
          ctx.strokeStyle = '#000000';
          ctx.stroke();
          ctx.closePath();
            //Cylinder (lower semicircle)
          ctx.beginPath();
          ctx.save();
          ctx.translate(155, 104);
          ctx.scale(1, 20/55);
          ctx.arc(0, 0, 55, 2 * Math.PI, Math.PI);
          ctx.restore();
          ctx.fillStyle = '#1a5582';
          ctx.fill();
          ctx.lineWidth = 2;
          ctx.strokeStyle = '#000000';
          ctx.stroke();
          ctx.closePath();
      }
    }
