'use strict';


class Parser {

    constructor(fields){
        this.fields = fields;
    }

    parse(originalExpress){
        let express = originalExpress.trim();

        if(express === ''){
            return {};
        }
    }
}

module.exports = Parser;

/*
*
* 替换带引号的value
*
* in 等特殊操作符的值的处理
*
* 按括号拆分（空括号处理：函数调用）
* 解析子表达式
*
* 按逻辑运算符从低王高拆分
* 然后分别对字表达式重复此过程
*
* 识别单个表达式
* 识别字段
* 识别字段操作符
* 识别value
*
 */