class Navigation {
  navElement = document.querySelector("#navbar__list");
  sectionElements = document.querySelectorAll("section");
}

export default function html([first, ...strings], ...values) {
  return (
    values
      // split each string line to arrays
      .reduce((acc, cur) => acc.concat(cur, strings.shift()), [first])
      // filter truthy values except 0 number type
      .filter((truthy) => (truthy && truthy !== true) || truthy === 0)
      // link arrays to string
      .join("")
  );
}
