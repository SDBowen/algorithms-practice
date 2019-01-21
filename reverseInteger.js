var reverse = function(x) {
  let reversedInt =
    x < 0
      ? +x
          .toString()
          .substring(1, x.length)
          .split("")
          .reverse()
          .join("") * -1
      : +x
          .toString()
          .split("")
          .reverse()
          .join("");

  return reversedInt > 2147483647 || reversedInt < -2147483647
    ? 0
    : reversedInt;
};
