function somme(a, b) {
  return a + b;
}

console.log(`La somme est de : ${somme(5, 10)}`);

console.log("package name =", require("./package.json").name);
