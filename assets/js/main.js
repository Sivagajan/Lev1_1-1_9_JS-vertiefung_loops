console.log('first')

// Lev1_1

console.log('// Lev1_1-------------')

for(let i = 1; i<=10; i++){

    console.log(`Hello World ${i}`)
}

// Lev1_2

console.log('// Lev1_2---------------')

let numArray = [];

for( let i = 0; i <= 10; i++){
    numArray.push(i)
}

console.log(numArray)


// Lev1_4

console.log('// Lev1_4---------------')

let names = ["Eric", "Steffen", "Finn", "Simon", "Franzi", "Kim", "Sergio"]

for(let n = 0; n < names.length;  n++){
    console.log(names[n])
}

// Lev1_6

console.log('// Lev1_6---------------')

const retArray = []


for( let i=1; i <=100;i++ ){
    retArray.push(`image_${i}.jpg`)
}
console.log(retArray)

// Lev1_7
document.write('-----------------Lev1_7------------ </br>')
console.log('// Lev1_7---------------')

let dw = 1
do{
    document.write(`The number is ${dw} <br>`)
    dw++

}while(dw <= 5)

// Lev1_8
document.write('-----------------Lev1_8------------ </br>')
console.log('// Lev1_8---------------')

document.write(`<h2> Using do...while loops</h2><p>Even numbers less than 20</p>`)
let en = 1
do{
    if(en % 2 == 0){
        document.write(`${en} <br>`)
    }
    en++
}while(en < 20)

// Lev1_9
document.write('-----------------Lev1_9------------ </br>')
console.log('// Lev1_9---------------')

let words = ['hallo', 'Auto', 'Waschmaschine', 'Schrank', 'Katze', 'Beispiel', 'Eltern', 'Fenster', 'Geburtstag', 'Himmel', 'schwimmen', 'Zeitung']


let suchen = () => {

    let search = document.getElementById('inputText').value.length
    console.log(search, 'search word')
    let div = document.createElement('div')

    for(let i = 0; i < words.length; i++)
    {

        if(words[i].length == search)
        {
            console.log(words[i].length, words[i])
            document.writeln(`<h2>${words[i]}</h2>`)
        }
    }
}

