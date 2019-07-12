import { BehaviorSubject } from "rxjs";

let instance;

export default class ScoreProvider {
  public score: BehaviorSubject<number>;

  static get instance(): ScoreProvider {
    if (!instance) instance = new ScoreProvider();
    return instance;
  }

  constructor() {
    this.score = new BehaviorSubject<number>(0);
  }

  click() {
    const newValue = this.score.value + 1;
    this.score.next(newValue);
  }
}
