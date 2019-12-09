let data = [
  {
    code: 1,
    children: [
      {
        code: 2,
        children: [
          {
            code: 7,
            children: [{ code: 8 }]
          }
        ]
      },
      { code: 3 },
      {
        code: 4,
        children: [
          {
            code: 5
          },
          { code: 6 }
        ]
      }
    ]
  }
];

const getCode = (arr, tree) => {
  if (tree.length === 0) return arr;
  const treeItem = tree.shift();
  arr.push(treeItem.code);
  console.log(treeItem.code);
  if (treeItem.children) tree.push(...treeItem.children);
  return getCode(arr, tree);
};
console.log(getCode([], data));

// while (tree.length > 0) {
//   const treeItem = tree.shift();
//   arr.push(treeItem.code);
//   if (treeItem.children) tree.push(...treeItem.children);
// }
