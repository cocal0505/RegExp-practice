

let str = ` 
010-3250-3092
thecocal3250@gmail.comn
https://www.omdbpi.com/?apikey=7035c60c&s=frozen 
The quick brown fox jumps over the lazt dognd
abbcccdddd
`


console.log(str.match(/.{1,}(?=@)/g))

console.log(str.match(/(?<=@).{1,}/g))



 
        
    
    