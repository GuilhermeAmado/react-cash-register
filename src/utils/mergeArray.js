export const mergeArray = (first, second) => {
  return [...first, ...second].reduce((acc, val, i, arr) => {
    const { name, quantity, value } = val;
    const ind = acc.findIndex((el) => el.name === name);
    if (ind !== -1) {
      acc[ind].quantity += quantity;
    } else {
      acc.push({
        name,
        quantity,
        value,
      });
    }
    return acc;
  }, []);
};
