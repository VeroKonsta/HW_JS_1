//1.	Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1 

// let a = 2
// let b = 1
// while(b<11){
//     console.log(a**b)
//     b++
// }


//1** Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2 

// const power = function(number) {
// let result = 1;
// for(let b=1; b <= number; b++) {
// result = result*2
// }
// return result
// }
// console.log(power(10))

// const result = function(num){
//     let a = 2
//     for(let b=1; b<=num; b++) {
//         console.log(a**b)
//     }
// }
// result(9)


// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее Пример в консоли:
//  :)
//  :):)
//  :):):)
//  :):):):)
//  :):):):):) 

// let sym = ":)"
// let result = ""
// for(b=1; b<=5; b++) {
//     result+=sym
//     console.log(result)
// }


// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), 
// а также количество строк для вывода e.g. function printSmile(stroka, numberOfRows) 

function printSmile(stroka, numberOfRows){
    let result = "";
    for(let b=1; b<=5; b++){
        result+=stroka
        console.log(result)    
    }
}
printSmile(":)",5)


// 3**. Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, 
// сколько в слове гласных, и сколько согласных букв. e.g. function getWordStructure(word) В консоли: Слово (word) состоит из (число) гласных 
// и (число) согласных букв Проверки: 'case', 'Case', 'Check-list' 

// function getWordStructure(word) {
//     const vowels = "aeiouy".split("") //split разбивает слово на массив из букв
//     const consonants = "qwrtpsdfghjklzxcvbnm".split("")
//     let numberofvowels = 0;
//     let numberofconsonants = 0;
//     for(char of word.toLowerCase()){  //приводим слово к нижнему регистру (метод toLowerCase) и будем бежать по каждой букве из заданного слова
//         if(vowels.includes(char)) numberofvowels++;
//         if(consonants.includes(char)) numberofconsonants++;
//     }
//     console.log("Cлово", word, "состоит из", numberofvowels, "гласных и", numberofconsonants, "согласных букв")
// }
// getWordStructure("case")
// getWordStructure("Case")
// getWordStructure("Check-list")

//4**. Написать функцию, которая проверяет, является ли слово палиндромом e.g. function isPalindrom(word) Проверки: 'abba', 'Abba'
// Вариант1
function isPalindrom(word) {
    let newStroka = "";   //ввели переменную, в которую будем записывать перевернутое слово
    for (i = word.length - 1; i >=0; i--) {  //пробежится по слову с конца к началу, т.к. массив начинается с 0, то последний стмвол (-1)
        newStroka = newStroka + word[i];  //в строку добавится дополнительно буква
    }
    if (word.toLowerCase() == newStroka.toLowerCase()) {
        console.log(word, "- палиндром",);
    }
    else {
        console.log(word, "- не палиндром",);
    }
}
isPalindrom ("Ab64a")
isPalindrom ("Abba")

//Вариант2
function isPalindrom2(word) {
    return word.toLowerCase() == word.toLowerCase().split("").reverse().join("")
}
console.log(`${isPalindrom2("Abb6a")? "It is a palindrom" : "It is not a palindrome"}`)
console.log ("Roman and Andrey".split(" "))
console.log([1,2,3,4,5].join("**"))