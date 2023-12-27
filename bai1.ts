function tinhTong(arr: number[]): number {
  return arr.reduce((acc, current) => acc + current, 0);
}
const mangSoNguyen: number[] = [1, 2, 3, 4, 5];
const tong: number = tinhTong(mangSoNguyen);
console.log(`Tổng của mảng là: ${tong}`);