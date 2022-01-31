import { BigNumber } from 'bignumber.js';

export class MoneyEntity {
  constructor(private readonly _amount: BigNumber) {}

  static ZERO() {
    return new MoneyEntity(new BigNumber(0));
  }

  static of(value: number) {
    return new MoneyEntity(new BigNumber(value));
  }

  public get amount(): BigNumber {
    return this._amount;
  }
}
