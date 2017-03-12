import React from 'react'
import '../components/Canvas.scss'

class Canvas extends React.Component {


    func() {
            const canvas = this.refs.canvas;
        const ctx = canvas.getContext('2d')
        //    ctx.globalCompositeOperation = 'destination-over';
 ctx.restore()
        ctx.clearRect(0, 0, 800, 800); // clear canvas

        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.save();

var img = new Image();   // Create new img element
img.src = 'galaxy.jpg'
    ctx.drawImage(img, -100, 0, 1400, 800);




        ctx.translate(400, 400);
                ctx.save();
        var time = new Date();
var img = new Image();   // Create new img element
img.src = 'sun.png'
        ctx.rotate( 2 * Math.PI / 60 * (time.getSeconds() +  time.getMilliseconds() / 1000) );

    ctx.drawImage(img, -40, -40, 80, 80);

        ctx.rotate( 2 * Math.PI / 60 * (time.getSeconds() +  time.getMilliseconds() / 1000) );
        ctx.fillStyle = 'red';
        ctx.translate(0, 190);
        var img = new Image();   // Create new img element
        img.src = 'earth.png'
        ctx.drawImage(img, -30, -30, 60, 60);
        ctx.save();

        
        ctx.rotate( 2 * Math.PI / 60 * ((time.getSeconds() +  time.getMilliseconds() / 1000)) * 8 );
        ctx.fillStyle = 'red';
        ctx.translate(-30, -60);
        
        var img = new Image();   // Create new img element
        img.src = 'moon.png'
        ctx.drawImage(img, -15, -15, 30, 30);
        // ctx.fillRect(0, 0, 20, 20); // Shadow
        ctx.restore();

        ctx.rotate( 2 * Math.PI / 60 * ((time.getSeconds() +  time.getMilliseconds() / 1000)) * 1 );
        ctx.fillStyle = 'red';
        ctx.translate(0, -60);
        var img = new Image();   // Create new img element
        img.src = 'neptune.png'
        ctx.drawImage(img, -15, -15, 30, 30);
        // ctx.fillRect(0, 0, 20, 20); // Shadow


        ctx.restore();
        ctx.beginPath();
        ctx.arc(0,0,200,0, Math.PI *2)
        ctx.stroke()
        ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
        window.requestAnimationFrame(this.func.bind(this))
    }
    
    componentDidMount() {
        this.func();
    }

    render() {
        return (<canvas width="800" height="800" ref="canvas"> </canvas>)
    }
}


export default Canvas;