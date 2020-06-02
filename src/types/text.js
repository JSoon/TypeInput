/**
 * 文本输入控件
 * @description 仅能输入文本
 * @param   {string}  input     输入数据
 * @param   {boolean} symbol    是否允许输入特殊符号
 * @param   {number}  length    最大文本长度
 * @returns {string}            文本字符串
 */
export default function integer(input, {
  symbol = false,
  length = 20,
} = {}) {
  // 合法输入正则表达式
  let regex = new RegExp(`^[^-!$%^&*()_+|~=\`{}\\[\\]:";'<>?,\\./\\\\]{0,${length}}`, 'i');
  if (symbol) {
    regex = new RegExp(`^.{0,${length}}`, 'i');
  }

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
