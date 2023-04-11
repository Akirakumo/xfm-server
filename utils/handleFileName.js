// (^\w)&? \s[^]$+\s*[]*()*

let name = '(C90) [うみのさち (水平線)] パイショタみるく [兔司姬漢化組](DL)'
let name2 = '[水平線] がーるずらっしゅ [中国翻訳] (DL版)'
let name3 = '(单行本) [八尋ぽち] ちゅぱ♡シャワー 噗啾♥愛浴 [無修正]'

const regEvent = /(\(\S*\))?/
const regGroup = /\[\S*\s*(\(\S*\))?\]/
const regAuthor = /\(\S*\)/

const event = name.match(regEvent)[0]

let group = name2.match(regGroup)[0]
let author
author = group.match(regAuthor)
if (!author) {
    author = group
    group = null
}

let title

const fileName = {
    event,
    group,
    author,
    title,
}

console.log(fileName);