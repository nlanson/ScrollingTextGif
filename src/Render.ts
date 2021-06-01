import { GIFRenderer, Renderer, LoadImage } from './BaseRendererClasses';

import { createCanvas, Image, loadImage } from 'canvas';
import GIFEncoder from 'gifencoder';
import * as fs from 'fs';


//Create an image, add background and write text.
export class SimpleText {

    private canvas: any;
    private ctx: any;
    
    constructor(
        private width: number,
        private height: number
    ) {
        this.canvas = createCanvas(this.width, this.height);
        this.ctx = this.canvas.getContext('2d');
    }

    public save(name: string) {
        const buffer = this.canvas.toBuffer('image/png');
        fs.writeFileSync(`./out/${name}.png`, buffer);
    }

    public fillBackground(colour: string) {
        this.ctx.fillStyle = colour;
        this.ctx.fillRect(0, 0, this.width, this.height);
    }

    public writeText(text: string) {
        this.ctx.fillStyle = "#000";
        this.ctx.font = "72px Arial";
        this.ctx.textAlign = "center";
        this.ctx.fillText(text, 400, 120);
    }

}

//Class to help create simple scrolling text gif.
//See examples/SimpleScrollingText.ts for usage.
//Help from https://sebhastian.com/node-canvas/
export class SimpleScrollingText extends GIFRenderer{

    constructor(
        width: number,
        height: number
    ) {
        super(width, height);
    }

    public fillBackground(colour: string) {
        this.ctx.fillStyle = colour;
        this.ctx.fillRect(0, 0, this.width, this.height);
    }

    public setWriteStyle(fillStyle: string, font: string, textAlign: CanvasTextAlign) {
        this.ctx.fillStyle = fillStyle;
        this.ctx.font = font;
        this.ctx.textAlign = textAlign;
    }

    public writeText(text: string, x: number, y: number) {
        this.ctx.fillText(text, x, y);
    }

    public measureText(text: string): number {
        return this.ctx.measureText(text).width;
    }

    public addScrollingText(text: string, xCoord: number, yCoord:number) {
        var prevWidth: number = 0; //Variable to track total width of text. Used for frame setting.

        for ( let i=0; i<text.length; i++ ) {
            this.writeText(text[i], xCoord+prevWidth+(this.measureText(text[i])/2), yCoord); //xCoord+prevWidth+(b.measureText(text[i])/2) gives the x coord to place the next letter.
            prevWidth += this.measureText(text[i]); //Add the current letter to the compounded width.
            this.setFrame(); //Set frame.
        }
    }
}


export class ScrollingTextOnImage extends SimpleScrollingText implements LoadImage {
    
    constructor(
        x: number, y: number
    ) {
        super(x, y);
    }

    public async loadImage(image: string, x: number, y: number) {
        let img: any = await loadImage(`assets/${image}`);
        this.ctx.drawImage(img, x, y);
    }


}