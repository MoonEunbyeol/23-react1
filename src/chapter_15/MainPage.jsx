const name1='인제'
const region='서울'

function myTagFunction(string, nameExp, regionExp) {
  let str0 = string[0];
  let str1 = string[1];
  let str2 = string[2];

  return `${str0}${nameExp}${str1}${regionExp}${str2}`
}

const output = myTagFunction`제 이름은 ${name1}이고, 사는 곳은 ${region}입니다.`
// 함수 호출 시 변수로 구분. string 입장에서는 변수가 콤마
console.log(output)