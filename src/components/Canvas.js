import React from 'react'
import '../components/Canvas.scss'

class Canvas extends React.Component {

    constructor(props) {
        super(props);
        this.drawCanvas = this.drawCanvas.bind(this);
    } 
    
    componentDidMount(){
       const canvas = this.refs.canvas;
       this.ctx = canvas.getContext('2d')
       this.meteorX = 1;
       this.meteorY = 0.001;
       this.drawCanvas();
    }

    drawCanvas() {
        const ctx = this.ctx,
            windowWidth = window.innerWidth,
            time = new Date();

        let img;

        ctx.restore()
        ctx.clearRect(0, 0, windowWidth, windowWidth); // clear canvas
        ctx.save();

        img = new Image();
        img.src = 'galaxy.jpg'
        ctx.drawImage(img, -100, 0, 1400, windowWidth);

        ctx.translate(windowWidth / 2, windowWidth /2);
        ctx.save();          
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.arc(0,0,200,0, Math.PI *2)
        ctx.stroke()

        img = new Image();
        img.src = 'sun.png'
        ctx.rotate( 2 * Math.PI / 60 * (time.getSeconds() +  time.getMilliseconds() / 1000) );


        ctx.drawImage(img, -40, -40, 80, 80);
        ctx.rotate( 2 * Math.PI / 60 * (time.getSeconds() +  time.getMilliseconds() / 1000) );
        ctx.translate(0, 190);
        img = new Image();
        img.src = 'earth.png'
        ctx.drawImage(img, -30, -30, 60, 60);
        ctx.save();

        
        ctx.rotate( 2 * Math.PI / 60 * ((time.getSeconds() +  time.getMilliseconds() / 1000)) * 8 );
        ctx.fillStyle = 'red';
        ctx.translate(-30, -60);
        
        img = new Image();
        img.src = 'moon.png'
        ctx.drawImage(img, -15, -15, 30, 30);

        ctx.restore();
        ctx.restore();
        ctx.save();

        ctx.rotate( 2 * Math.PI / 60 * ((time.getSeconds() +  time.getMilliseconds() / 1000)) * 1 );
        ctx.translate(0, 300);

        ctx.restore();
      

        img = new Image();
        img.src = 'meteor.png'
        ctx.restore()
       
        if (this.meteorX < 2000) { 
             ctx.drawImage(img,this.meteorX - 50, this.meteorY + 10, 40, 40);
             ctx.drawImage(img,this.meteorX * 1.4 - 50, this.meteorY + 30, 20, 20);
             ctx.drawImage(img,this.meteorX * 0.5 - 70, this.meteorY +20, 60, 60);
             ctx.drawImage(img,this.meteorX * 1.15 - 50, this.meteorY + 50, 25, 25);

            this.meteorX *= 1.016
            this.meteorY += 0.2;
        }

        window.requestAnimationFrame(this.drawCanvas)
    }

    render() {
        const windowWidth = window.innerWidth
        return (<canvas width={windowWidth} height={windowWidth} ref="canvas"> </canvas>)
    }
}


export default Canvas;