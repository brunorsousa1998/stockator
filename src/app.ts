import express, { Application } from 'express';
import dotenv from 'dotenv';

export class App {
  private _express: Application;

  constructor() {
    this._express = express();
    this.configuration();
    this.middlewares();
    this.routes();
  }

  get express(): Application {
    return this._express;
  }

  private configuration(): void {
    dotenv.config();
  }

  private middlewares(): void {
    this._express.use(express.json());
  }

  private routes(): void {}
}

export default new App().express;
