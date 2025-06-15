import {
  type Canvas,
  type CanvasRenderingContext2D,
  createCanvas,
} from "@napi-rs/canvas";

export class CanvasFactory {
  // eslint-disable-next-line class-methods-use-this
  create(width: number, height: number) {
    const canvas = createCanvas(width, height);
    return {
      canvas,
      context: canvas.getContext("2d"),
    };
  }

  // eslint-disable-next-line class-methods-use-this
  reset(
    canvasAndContext: {
      canvas: Canvas;
      context: CanvasRenderingContext2D;
    },
    width: number,
    height: number
  ) {
    canvasAndContext.canvas.width = width;
    canvasAndContext.canvas.height = height;
  }

  // eslint-disable-next-line class-methods-use-this
  destroy() {
    // @napi-rs/canvas 不需要显式销毁
  }
}
