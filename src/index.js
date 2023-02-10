export default function sortObject(obj, sortRule) {
  const arr = [];
  for (const key in obj) {
    if (!sortRule.includes(key)) {
      arr.push(key);
    }
  }

  sortRule.push(...arr.sort());

  return sortRule.reduce((acc, cur) => {
    acc.push({ key: cur, value: obj[cur] });
    return acc;
  }, []);
}
