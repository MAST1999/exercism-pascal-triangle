const addRow = (pTriangle) => {
  let pPervious = pTriangle[pTriangle.length - 1];
  let newRow = [1];
  for (let i = 0; i < pPervious.length - 1; i++) {
    let current = pPervious[i];
    let next = pPervious[i + 1];
    newRow.push(current + next);
  }
  newRow.push(1);
  return pTriangle.push(newRow);
};
export const rows = (row) => {
  let pascalTriangleArray = [[1], [1, 1]];
  if (row == 0) return [];
  if (row == 1) return [[1]];
  if (row == 2) return pascalTriangleArray;
  if (row > 2) {
    for (let i = 2; i < row; i++) {
      addRow(pascalTriangleArray);
    }
  }
  return pascalTriangleArray;
};