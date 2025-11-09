const myobject = {
  js: "javascript",
  cpp: "C++",
  "r b": "ruby",
  swift: "swift by apple",
};
for (const key in myobject) {
  console.log(`${key} shortcut for ${myobject[key]}`);
}

const myarr = ["js", "ruby", "python", "java"];
for (const key in myarr) {
  //   console.log(key);
  //   console.log(myarr[key]);
}

// const map = new Map();
// map.set("IN", "India");
// map.set("US", "United States");

// for (const key in map) {
//   console.log(key);
// }
