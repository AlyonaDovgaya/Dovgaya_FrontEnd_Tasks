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
      //Figure 1
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

      //Figure 2
      var canvas = document.getElementById("canvas2");
      if (canvas.getContext) {
          var ctx = canvas.getContext('2d');

          //left wheel
          ctx.beginPath();
          ctx.arc(70, 225, 60, 0, 2 * Math.PI);
          ctx.fillStyle = '#72acce';
          ctx.fill();
          ctx.lineWidth = 2;
          ctx.strokeStyle = '#1b4e6b';
          ctx.stroke();
          ctx.closePath();

          //Right wheel
          ctx.beginPath();
          ctx.arc(350, 225, 60, 0, 2 * Math.PI);
          ctx.fillStyle = '#72acce';
          ctx.fill();
          ctx.lineWidth = 2;
          ctx.strokeStyle = '#1b4e6b';
          ctx.stroke();
          ctx.closePath();

          //Wheel for pedals
          ctx.beginPath();
          ctx.arc(190, 225, 20, 0, 2 * Math.PI);
          ctx.lineWidth = 2;
          ctx.strokeStyle = '#1b4e6b';
          ctx.stroke();
          ctx.closePath();

          //Pedals
          ctx.beginPath();
          ctx.moveTo(175, 210);
          ctx.lineTo(160, 195);
          ctx.moveTo(205, 240);
          ctx.lineTo(220, 255);

          //Bike frame
          ctx.moveTo(190, 225);
          ctx.lineTo(70, 225);
          ctx.moveTo(190, 225);
          ctx.lineTo(160, 160);
          ctx.lineTo(70, 225);
          ctx.moveTo(160, 160);
          ctx.lineTo(140, 120);
          ctx.lineTo(115, 120);
          ctx.lineTo(165, 120);
          ctx.moveTo(190, 225);
          ctx.lineTo(338, 150);
          ctx.lineTo(160, 160);

          //Steering wheel
          ctx.moveTo(350, 225);
          ctx.lineTo(330, 100);
          ctx.lineTo(370, 40);
          ctx.moveTo(330, 100);
          ctx.lineTo(280, 130);

          ctx.lineWidth = 2;
          ctx.strokeStyle = '#1b4e6b';
          ctx.stroke();
          ctx.closePath();
      }

      //Figure3
      var canvas = document.getElementById("canvas3");
      if (canvas.getContext) {
          var ctx = canvas.getContext('2d');

          //Main rect
          ctx.beginPath();
          ctx.rect(50, 125, 200, 150);
          ctx.fillStyle = '#bc6767';
          ctx.fill();
          ctx.lineWidth = 2;
          ctx.strokeStyle = '#000';
          ctx.stroke();
          ctx.closePath();

          //ROOF
          ctx.beginPath();
          ctx.moveTo(250, 125);
          ctx.lineTo(50, 125);
          ctx.lineTo(150, 25);
          ctx.closePath();
          ctx.fillStyle = '#bc6767';
          ctx.fill();
          ctx.lineWidth = 2;
          ctx.strokeStyle = '#000';
          ctx.stroke();

          //Chimney
          ctx.beginPath();
          ctx.rect(185, 40, 20, 55);
          ctx.fillStyle = '#bc6767';
          ctx.fill();
          ctx.lineWidth = 2;
          ctx.strokeStyle = '#000';
          ctx.stroke();
          ctx.closePath();

          ctx.beginPath();
          ctx.moveTo(185, 95);
          ctx.lineTo(205, 95);
          ctx.lineWidth = 2;
          ctx.strokeStyle = '#bc6767';
          ctx.stroke();
          ctx.closePath();

          //Top circle
          ctx.beginPath();
          ctx.save();
          ctx.translate(195, 40);
          ctx.scale(1, 5/10);
          ctx.arc(0, 0, 10, 0, 2 * Math.PI);
          ctx.restore();
          ctx.fillStyle = '#bc6767';
          ctx.fill();
          ctx.lineWidth = 2;
          ctx.strokeStyle = '#000';
          ctx.stroke();
          ctx.closePath();

          //WINDOWS
          ctx.beginPath();
          //Left window
          ctx.moveTo(65, 140);
          ctx.rect(65, 140, 40, 25);
          ctx.moveTo(107, 140);
          ctx.rect(107, 140, 40, 25);
          ctx.moveTo(65, 167);
          ctx.rect(65, 167, 40, 25);
          ctx.moveTo(107, 167);
          ctx.rect(107, 167, 40, 25);
          //Right-top window
          ctx.moveTo(160, 140);
          ctx.rect(160, 140, 40, 25);
          ctx.moveTo(202, 140);
          ctx.rect(202, 140, 40, 25);
          ctx.moveTo(160, 167);
          ctx.rect(160, 167, 40, 25);
          ctx.moveTo(202, 167);
          ctx.rect(202, 167, 40, 25);
          //Right-bottom window
          ctx.moveTo(160, 200);
          ctx.rect(160, 200, 40, 25);
          ctx.moveTo(202, 200);
          ctx.rect(202, 200, 40, 25);
          ctx.moveTo(160, 227);
          ctx.rect(160, 227, 40, 25);
          ctx.moveTo(202, 227);
          ctx.rect(202, 227, 40, 25);

          ctx.fillStyle = '#000';
          ctx.fill();
          ctx.closePath();

          //DOOR
          ctx.beginPath();
          ctx.moveTo(70, 275);
          ctx.lineTo(70, 220);
          ctx.moveTo(130, 275);
          ctx.lineTo(130, 220);
          ctx.moveTo(100, 275);
          ctx.lineTo(100, 200);
          ctx.lineWidth = 2;
          ctx.strokeStyle = '#000';
          ctx.stroke();
          ctx.closePath();
          //left door handle
          ctx.beginPath();
          ctx.arc(90, 245, 4, 0, 2 * Math.PI);
          //Right door handle
          ctx.moveTo(114, 245);
          ctx.arc(110, 245, 4, 0, 2 * Math.PI);
          //Top semicircle
          ctx.moveTo(70, 220);
          ctx.translate(100, 220);
          ctx.scale(1, 20/30);
          ctx.arc(0, 0, 30, Math.PI, 0);
          ctx.lineWidth = 2;
          ctx.strokeStyle = '#000';
          ctx.stroke();
          ctx.closePath();

      }
}
