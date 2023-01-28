const mergeSort = function (nums) {
  if (nums.length < 2) {
    return [...nums];
  }
  // divide
  const mid = Math.floor(nums.length / 2);
  // slice() メソッドは、配列の一部を start から end （end は含まれない）までの範囲で、選択した新しい配列オブジェクトにシャローコピーして返します。
  // オブジェクトのシャローコピーとは、コピーがコピー元のオブジェクトとプロパティにおいて同じ参照を共有する（同じ基礎値を指す）コピーのことを指します。 その結果、コピー元とコピー先のどちらかを変更すると、もう一方のオブジェクトも変更される可能性があります。
  // const left = nums.slice(0, mid);
  // const right = nums.slice(mid);
  // splice() メソッドは、その場で既存の要素を取り除いたり、置き換えたり、新しい要素を追加したりすることで、配列の内容を変更します。
  // 半分を取り出して、leftを作る、残りの半分はnumsとなります。
  const left = nums.splice(0, mid);

  return sortLR([...mergeSort(left)], [...mergeSort(nums)]);
};

const sortLR = function (left, right) {
  const res = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      res.push(left.shift());
    } else {
      res.push(right.shift());
    }
  }
  return [...res, ...left, ...right];
};

var res = mergeSort([2, 4, 1, 6, 7, 2, 4, 5]);
console.log(res);
