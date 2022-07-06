const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve(console.log("resolved p1"));
    // reject({
    //   status: 404,
    //   message: "not found",
    // });
  }, 3000);
});

(async () => {
  try {
    await p1;
    console.log(a);
  } catch (error) {
    console.log("error:" + error);
  }
})();
