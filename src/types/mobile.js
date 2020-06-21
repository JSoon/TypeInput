/**
 * 中华人民共和国手机号码输入控件
 * @description 仅能输入标准11位中华人民共和国手机号码
 * @param   {string}  input     输入数据
 * @returns {string}            中华人民共和国手机号码字符串
 */
export default function mobile(input) {
  // 合法输入正则表达式
  // 为了兼容以后可能产生的新的手机号段, 在此只做首位号码约束
  const regex = /^1[0-9]{10}$/i;

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
