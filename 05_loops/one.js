// for loop

for (let i = 0; i <= 5; i++) {
  if (i == 5) {
    console.log(`5 is best number`);
  }
}

for (let i = 0; i <= 5; i++) {
  console.log(`outer loop value : ${i}`);

  for (let j = 0; j <= 5; j++) {
    // console.log(`inner loop value : ${j} and inner loop ${i}`);
    console.log(i + "*" + j + " = " + i * j);
  }
}

let arr = ["batman", "krish", "superman"];
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  console.log(element);
}

// break and continue

for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    console.log(`5 is detected`);
    // continue;
    // break;
  }
  console.log(`value of i is ${i}`);
}
