## 정규표현식 연습

### 역할 

- 문자 검색(search)
- 문자 대체
- 문자 추출


### 정규식 생성 


``` js

// 생성자
new RegExp ('표현', '옵션')
new RegExp ('[a-z]', 'gi')
// 리터럴

/표현/옵션
/[a-z]/gi


```

### 정규식 생성 예제 
```js

const str = ` 
010-3250-3092
thecocal3250@gmail.com
https://www.omdbpi.com/?apikey=7035c60c&s=frozen 
The quick brown fox jumps over the lazt dog.
abbcccdddd`


const regexp = new RegExp ('the', 'gi')     // 생성자 작성 방식 // 
console.log(str.match(regexp))

const regexp = /the/gi              // 리터럴 방식으로 작성하는 것이 간결 //
console.log(str.match(regexp))



```

### 정규표현식 메소드 


match |  문법 | 설명 
 -- | -- | -- 
test |` 정규식.test (문자열)` | 정규식과 일치하는 테이터가 있는지 불린 테이터로 반환 
match | `문자열.match (정규식)` | 일치하는 문자를 배열로 반환 
replace|` 문자열.replace(정규식 , 대체문자)` | 일치하는 문자를 대체 





***
***

- 예제1 
```js





const str = ` 
010-3250-3092
thecocal3250@gmail.com
https://www.omdbpi.com/?apikey=7035c60c&s=frozen 
The quick brown fox jumps over the lazt dog.
abbcccdddd`

const regexp = /fox/gi             
// console.log(regexp.test(str))
console.log(str.replace(regexp,'human'))
console.log(str)    // 원본은 손상 안됌// 





let str = ` 
010-3250-3092
thecocal3250@gmail.com
https://www.omdbpi.com/?apikey=7035c60c&s=frozen 
The quick brown fox jumps over the lazt dog.
abbcccdddd`
const regexp = /fox/gi             
// console.log(regexp.test(str))
str = str.replace(regexp,'human')
console.log(str)    // str 원본에 재할당// 

```

### 플래그 (옵션)


플래그 | 설명 
--| --
g| 모든 문자 일치(global)
i| 영어 대소문자를 구분하지 않고 일치(ignore case)
m|여러줄 일치(multi line)

``` js



let str = ` 
010-3250-3092
thecocal3250@gmail.com
https://www.omdbpi.com/?apikey=7035c60c&s=frozen 
The quick brown fox jumps over the lazt dog.
abbcccdddd`



const regexp =  /\.$/gim
console.log(str.match(regexp))





```


### 패턴

패턴|설명
--|-- 
^ab| 줄(line) 시작에 있는 ab와 일치 
ab& |줄 {line} 끝에 있는 ab와  일치 
. |  임의의 한 문자와 일치 
a&verbar;b | a또는 b와 일치 
ab? | b 가 없거 b와 일치 
{3} | 3개가 연속으로 일치
{3,}| 3개 이상 연속으로 일치
{3,5} | 3개 이상 5개 이하(3,5개) 연속 일치 
[abc] | a또는 b 또는 c 
[a-z] | a부터 z 사이의 문자 구간에 일치 (영어 소문자)
[A-Z] |    `` (영어 대문자)
[0-9] | 0 부터 9 사이의 문자 구간에 일치 ( 숫자)
[가-힣] | 가부터 힣 사이의 문자 구간에 일치(한글)
\w | 63개의 문자 (world, 대소영문52개 + 숫자 10개 + _) 에 일치
\b | 63개 문자에 일치하지 않는 문자 경제 
\d | 숫자 (Digit) 에 일치 
\s | 공백(space, tab 등) 에 일치 
(?=) | 앞쪽 일치 (lockahead)
(?<=) | 뒤쪽 일치 (lockbehind)




```js


let str = ` 
010-3250-3092
thecocal3250@gmail.comn
https://www.omdbpi.com/?apikey=7035c60c&s=frozen 
The quick brown fox jumps over the lazt dognd
abbcccdddd
http:cocala:123`


console.log(str.match(/d$/gm))    // 끝에 일치

console.log(str.match(/^t/gm))   // 시작에 일치

console.log(str.match(/fox|dog/g))  // 둘다 찾아줌 // 

console.log(str.match(/https?/g))   // s 가 있을 수 도 없을 수 도 있는 문자 찾는다 .

console.log(str.match(/d{2}/g))   // dd, dd

console.log(str.match(/d{2,}/g))  // dddd

console.log(str.match(/d{2,3}/g))  // ddd


console.log(str.match(/\b\w{2,3}\b/g)) 

console.log(str.match(/\b/g)) 



console.log(str.match(/[a-z]{1,}/g)) // a부터 z 까지 1개 이상의 문자를 모두 반환

console.log(str.match(/[0-9]{1,}/g)) // 0 부터 9 까지 1개이상의 숫자를 모두 반환 

console.log(str.match(/[a-z]{1,3}/g))  // a 부터  z 까지 3개 이상의 문자를 모두 반환



console.log(
    str.match(/\w/g))     // 모든 문자 숫자 _( 언더 스코어) 반환
    

console.log(
        str.match(/\b/g))  //  모든 문자 경계 반환


console.log(
        str.match(/\bf\w{1,}\b/g))   // 모든 문자 중에서 f 로 시작하는 문자 중에 1개 이상으로 끝나는 문자를 반환

            

 console.log(
        str.match(/\d{1,}/g))  // digit 1개이상으로 갖고 있는 숫자를 반환

console.log(
        str.match(/\s{1,}/g))
        // 공백, 줄바꿈이 1개 이상으로 있는 것을 반환 

const h = `  the hello  world   !  


`
console.log(
    h.replace(/\s/g,''))  // 공백혹은 줄 바꿈 된 모든 공간을 삭제 
```