import { BehaviorSubject } from "rxjs";

let instance;

export default class ScoreProvider {
  public score: BehaviorSubject<number>;

  static get instance(): ScoreProvider {
    let gottenInstance = instance || new ScoreProvider();
    return gottenInstance;
  }

  constructor() {
    this.score = new BehaviorSubject<number>(0);
    setInterval(() => {
      this.score.next(this.score.value + 1);
    }, 500);
  }
}
