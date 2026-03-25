const colors = [
  "red",
  "blue",
  "green",
  "black",
  "white",
  "orange",
  "pink",
  "yellow",
  "olive",
];

const getMultyColorArr = function () {
  let multyColor = [];

  for (let i = 0; i < 2; i++) {
    multyColor[i] = [...colors];
  }

  return multyColor.flat();
};

export const multyColorArr = getMultyColorArr();
