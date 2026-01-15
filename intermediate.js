// you can pass values to next() method which can be used in the yeild.
// but always remember the first generator function call: it runs until the first yeild => it stops before the first yeild call.

function* makeId() {
  let id = 1;
  let prefix = "";
  while (true) {
    prefix = yield prefix + id;
    id++;
  }
}

const prefix = ["A", "B", "C", "D", "E"];

const usersId = makeId();
usersId.next();

for (let i = 1; i <= 5; i++) {
  console.log(`User ${i}: `, usersId.next(prefix[i - 1]).value);
}
