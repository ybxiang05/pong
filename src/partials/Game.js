import Board from "./Board";
import Paddle from "./Paddle";
import Ball from "./Ball";
import { SVG_NS, KEYS } from "../settings";

export default class Game {
  constructor(element, width, height) {
    this.element = element;
    this.width = width;
    this.height = height;
    this.gameElement = document.getElementById(this.element);

    // Other code goes here...

    //board
    this.board = new Board(this.width, this.height);

    //ball
    this.Ball = new Ball(8, this.width, this.height);

    //paddles
    this.paddleWidth = 10;
    this.paddleHeight = 80;
    this.boardGap = 0;

    //paddle1
    this.player1 = new Paddle(
      this.height,
      this.paddleWidth,
      this.paddleHeight,
      this.boardGap,
      (this.height - this.paddleHeight) / 2,
      KEYS.a,
      KEYS.z
    );
    //paddle2
    this.player2 = new Paddle(
      this.height,
      this.paddleWidth,
      this.paddleHeight,
      this.width - this.paddleWidth,
      (this.height - this.paddleHeight) / 2,
      KEYS.up,
      KEYS.down
    );
    console.log(this.player1);
    console.log(this.player2);
  }
  render() {
    // More code goes here....
    this.gameElement.innerHTML = "";

    let svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttributeNS(null, "width", this.width);
    svg.setAttributeNS(null, "height", this.height);
    svg.setAttributeNS(null, "viewBox", `0 0 ${this.width} ${this.height}`);
    this.gameElement.appendChild(svg);

    this.board.render(svg);
    this.player1.render(svg);
    this.player2.render(svg);
    this.Ball.render(svg, this.player1, this.player2);
  }
}
