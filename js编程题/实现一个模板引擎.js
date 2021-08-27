/* 模板引擎是用来分离逻辑代码和显示代码的
   比如PHP中的Smarty可以将PHP代码和HTML代码分离，这样前后端开发人员可以各司其职，专心开发 
   vue中的模板引擎是采用mustache语法

   面试题：如何自己实现一个模板引擎？ 这道题一般是想考察正则这个点

   参考地址：https://zhuanlan.zhihu.com/p/115008837
*/

/**
 * tplv render
 * @param template
 * @param data
 */
function mytpl(template, data){
    const ks = Object.keys(data);
    const vs = ks.map((k) => data[k]);
  
    const t = `return \`${template}\``;
    const f = new Function(...ks, t);
  
    return f(...vs);
}

export default mytpl;