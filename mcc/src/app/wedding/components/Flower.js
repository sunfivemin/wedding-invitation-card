"use client";
import React, { useEffect, useRef } from 'react';

class Petal {
    constructor({ ctx, petalImg }) {
        this.x = Math.random() * ctx.canvas.width;
        this.y = Math.random() * ctx.canvas.height * 2 - ctx.canvas.height;
        this.w = 15 + Math.random() * 10;
        this.h = 10 + Math.random() * 5; 
        this.opacity = this.w / 45;
        this.xSpeed = 1 + Math.random() * 0.5;
        this.ySpeed = 0.5 + Math.random() * 0.1; 
        this.flip = Math.random();
        this.flipSpeed = Math.random() * 0.07;
        this.ctx = ctx;
        this.petalImg = petalImg;
    }

    draw() {
        if (this.y > this.ctx.canvas.height || this.x > this.ctx.canvas.width) {
            this.x = -this.petalImg.width;
            this.y = Math.random() * this.ctx.canvas.height * 2 - this.ctx.canvas.height;
            this.xSpeed = 2 + Math.random();
            this.ySpeed = 1 + Math.random() * 0.5;
            this.flip = Math.random();
        }
        this.ctx.globalAlpha = this.opacity;
        this.ctx.drawImage(
            this.petalImg,
            this.x,
            this.y,
            this.w * (0.66 + Math.abs(Math.cos(this.flip)) / 3),
            this.h * (0.8 + Math.abs(Math.sin(this.flip)) / 2)
        );
    }

    animate() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        this.draw();
        this.flip += this.flipSpeed;
    }
}

const Flower = () => {
    const canvasRef = useRef(null);
    const ctxRef = useRef(null);
    const petalImgRef = useRef(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            petalImgRef.current = new Image();
            petalImgRef.current.src = "./img/petal.png";

            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");
            ctxRef.current = ctx;
            const canvasWrap = document.querySelector(`.canvas_wrap`);
            if (canvasWrap) {
                canvas.width = canvasWrap.offsetWidth; 
                canvas.height = canvasWrap.offsetHeight; 
            }

            petalImgRef.current.onload = () => {
                render();
            };

            const TOTAL = 15;
            const petalArray = Array.from({ length: TOTAL }, () => new Petal({ ctx, petalImg: petalImgRef.current }));

            function render() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                petalArray.forEach((petal) => {
                    petal.animate();
                });

                requestAnimationFrame(render);
            }

            const handleResize = () => {
                const canvasWrap = document.querySelector(`.canvas_wrap`);
                if (canvasWrap) {
                    canvas.width = canvasWrap.offsetWidth; 
                    canvas.height = canvasWrap.offsetHeight; 
                }
            };

            window.addEventListener("resize", handleResize);

            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }
    }, []);

    return <canvas ref={canvasRef} />;
};

export default Flower;
