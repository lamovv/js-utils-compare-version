'use strict';

/**
 * 比较版本大小，
 * @param va
 * @param vb
 * @param digit
 * @returns
 * va == vb -> 0
 * va > vb -> 1
 * va < vb -> -1
 */
export function compareVersion(va: string, vb: string, digit: number = 3): number {
  if (!va && !vb) {
    return 0;
  } else if (!va) {
    return -1;
  } else if (!vb) {
    return 1;
  }

  const aArr: string[] = va.split('.');
  const bArr: string[] = vb.split('.');

  let i = -1;
  while (++i < digit) {
    if (aArr[i] > bArr[i]) {
      return 1;
    } else if (aArr[i] < bArr[i]) {
      return -1;
    }
  }
  return 0;
}
