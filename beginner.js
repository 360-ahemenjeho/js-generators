function* increase(number) {
  yield 10;
  yield number + 10;
}

function* makeId() {
  let id = 1;
  while (true) {
    yield id++;
  }
}

const _increase = increase(10);

let increaseIndex = 1;
while (!_increase.next().done) {
  console.log(`${increaseIndex} +: `, _increase.next().value);
}

const usersId = makeId();
for (let i = 1; i <= 50; i++) {
  console.log(`User ${i}: `, usersId.next().value);
}
