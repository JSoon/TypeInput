/**
 * 整数输入控件
 * @description 仅能输入整数
 * @param   {string}  input     输入数据
 * @param   {boolean} negative  是否为负数
 * @param   {number}  digit     有效数字位数
 * @returns {string}            整数字符串
 */
export default function integer(input, {
  negative = false,
  digit = 20,
} = {}) {
  // 合法输入正则表达式
  const regex = new RegExp(`^${negative ? '-' : ''}[0-9]{1,${digit}}`, 'i');

  // 匹配合法输入
  const filtered = input.match(regex);

  // 默认输出数据
  let output = '';

  // 若存在合法匹配, 则输出匹配结果, 若不存在, 则输出默认数据
  if (filtered) {
    [output] = filtered;
  }

  return output;
}
