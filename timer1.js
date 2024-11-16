const args = process.argv.slice(2);

const timer = (array) => {
  const times = array.filter((num) => Number(num) && num > 0);
  for (let item of times) {
    setTimeout(() => {
      process.stdout.write("\x07");
    },item * 1000);
  }
}
timer(args);
