let pedometer = {
  count: 8,
  increase() {
    this.count += 1;
    return this;
  },
  decrease() {
    this.count -= 1;
    return this;
  },
  reset() {
    this.count = 0;
    return this;
  },
  read() {
    console.log(this.count);
    return this;
  },
};

pedometer.reset();
pedometer
  .increase()
  .increase()
  .increase()
  .increase()
  .decrease()
  .decrease()
  .read();
