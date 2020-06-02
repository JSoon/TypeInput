/**
 * 浮点数输入控件
 * @description 仅能输入浮点数
 * @param   {string}  input     输入数据
 * @param   {boolean} negative  是否为负数
 * @param   {number}  accuracy  精确度, 精确到小数点后位数, 若超出该位数则截断
 * @returns {string}            浮点数字符串
 */
export default function decimal(input, {
  negative = false,
  accuracy = 3,
} = {}) {
  // 合法输入正则表达式
  const regex = new RegExp(`^${negative ? '-' : ''}[0-9]+(?:\\.[0-9]{0,${accuracy}})?`, 'i');

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
