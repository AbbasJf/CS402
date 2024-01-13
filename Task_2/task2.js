 let fullName = 'Ulfat Zakirli Rovshen'

// 1) Ad soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin(split)

let letters = fullName.split('');
console.log(letters);

// 2) FullName'də soyadinizi adinizin onune keciren alqoritm yazin


let parts = fullName.split(' ');
let newFullName = parts[1] + ' ' + parts[0] + ' ' + parts[2];

console.log(newFullName);


// 3) Alinan yeni arrayi stringe cevirin(join)

// let newFullNameString = newFullName.join(' ');
// console.log(newFullNameString); // bilmirem niye error verir :(

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]

// QEYD - Bu tasklarda "arr" arrayindan istifade edilecekdir.....

//4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin

let amountOfFive = arr.filter(function(element){
    return element === 5;
}).length;

console.log(amountOfFive);

//5) Yuxaridaki arraydaki butun reqemlerin cemini tapin

let sumOfArr = arr.reduce(function(acc, current){
    return acc + current;
}, 0);

console.log(sumOfArr);

//6) arrayda tekrar olunan reqemleri artan sira ile duzun


let tekrarlananlar = arr.filter(function(element, index, array) {
    return array.indexOf(element) !== index;
});

tekrarlananlar.sort(function(a, b) {
    return a - b;
});

console.log(tekrarlananlar);


//7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin(Math.max)

let maxNumber = Math.max(...arr);

let amountOfMaxNumber = arr.filter(function(element) {
    return element === maxNumber;
}).length;

console.log("En boyuk regem: " + maxNumber);
console.log("Tekrar sayisi: " + amountOfFive);

//8) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Ulfat adinda 5 herf var ve 5 arrayda var(includes)

let fullName1 = 'Abbas Jafarov';
let array1= fullName1.split(' ');
let result = arr.filter(num => num === array1[0].length);
console.log(result);


//9) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin


let birinciReqem = arr.find(num=> num % 3 === 2);
let birinciReqemIndex = arr.findIndex(num=> num % 3 === 2);
console.log('Reqem: '+ birinciReqem,'Index: '+ birinciReqemIndex);


//10) arraydaki en boyuk reqemin ilk indexini tapin

let maxNumberIndex=arr.findIndex(num=> num === Math.max(...arr));
console.log(maxNumberIndex);

//11) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin
let findIndexOf4 = arr.map((num,index)=>{
    if(num===4){
    return index;
    }
});

console.log(findIndexOf4);

//12) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin


//13) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin
let ferq = arr.filter((num=> num >2));
console.log(arr.length-ferq.length);

//14) 7 reqeminin indexleri cemini tapin.
let sum=0;
let sumOfIndexes=arr.reduce((acc,curr,index)=>{
    if(curr===7){
        return acc+index;
    }
    return acc;
},sum);
console.log(sumOfIndexes);

let arr2 = [
    {
        name: 'test',
        key: 1
    },
    {
        name: 'task',
        key: 2
    },
    {
        name: 'tanqo',
        key: 3
    },
    {
        name: 'like',
        key: 4
    },
    {
        name: 'task',
        key: 5
    },
    {
        name: 'trust',
        key: 6
    },
    {
        name: 'test',
        key: 7
    },
    {
        name: 'last',
        key: 8
    },
    {
        name: 'tanqo',
        key: 9
    },
    {
        name: 'elephant',
        key: 10
    },
    {
        name: 'love',
        key: 11
    },
    {
        name: 'small',
        key: 12
    },
    {
        name: 'little',
        key: 13
    },
]


//Aşağıdakı hər bir taskı function icərisində yazın.

//QEYD Bu tasklarda arr2 istifade edilecekdir
// 16 arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin
function findT(array){

    let newArray=[];
    
    array.map(item=> {
    
    if(item.name.startsWith('t')){
        newArray.push(item.name);
    }
    
    });
    
    return newArray;
    
    }
    
    let newArray = findT(arr2);
    console.log(newArray);
// 17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin
function countWordsT(array) {

    let count =0;
    
    array.map(item=>{
    
    if(item.name.startsWith('t')&&item.name.endsWith('t')){
        count++;
    }
    
    });
    
    return count;
    
    }
    
    let wordCount=countWordsT(arr2);
    console.log(wordCount);
// 18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin
function sumOfKeys(array) {

    let sum = 0;
    
    array.map(item=>{
    
    if(item.name.startsWith('t')&&item.name.endsWith('t')){
        sum+=item.key;
    }
    
    });
    
    return sum;
    
    }

    let keySum=sumOfKeys(arr2);
    console.log(keySum);
// 19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
function changingValue(array) {
    
    return array.map(item=>{
     
     if(item.name.endsWith('e')){
         item.name='SuperDev';
     }
 
     return item;
 
     });
 
     }
     
 let superDev=changingValue(arr2);
 console.log(superDev);
// 20 arr2 de "name"-i en uzun olan obyektin key-i ni tapin
function LongestWordKey(array){



    let maxWordLength = array[0].name.length;
    let maxKey=0;
    let i=1;

    while(i<array.length){
        if(array[i].name.length>maxWordLength){
            maxWordLength=array[i].name.length;
            maxKey=array[i].key;
        }
        i++;
    }
     
    return maxKey;
}

let longestWordKey=LongestWordKey(arr2);
console.log(longestWordKey);
// 21 arr2 de "name"-i en uzun olan obyektin indexin kvadratini hesablayin
function longestWordIndex(array) {
    let longestWordIndex = 0;
    let maxLength = array[0].name.length;

    for (let i = 1; i < array.length; i++) {
        if (array[i].name.length > maxLength) {
            maxLength = array[i].name.length;
            longestWordIndex = i;
        }
    }

    return Math.pow(longestWordIndex, 2);
}

let LongestWordIndex = longestWordIndex(arr2);
console.log(LongestWordIndex);
// 22 arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.
function comparing(array){
    let newArray=[];
array.map(item=>{
    if(item.name.length===4){
    newArray.push(item.name);
    }
});
 return newArray;
}

let newArr=comparing(arr2);
console.log(newArr);
// 23 arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin
function maxKeyName(array) {
    let maxKey = array[0].key;
    let maxName = array[0].name;

    for (let i = 1; i < array.length; i++) {
        if (array[i].key > maxKey) {
            maxKey = array[i].key;
            maxName = array[i].name;
        }
    }

    return maxName;
}

let MaxKeyName = maxKeyName(arr2);
console.log(MaxKeyName);
// 24 arr2 de terkibinde 2 'L' herfi olan obyekt(ler)in index(ler)ini tapin.
function findIndexL(array) {
    return array.map((item, index) => {
        let lCount=0;
        for (let i=0;i<item.name.length;i++) {
            if (item.name[i] === 'l') {
                lCount++;
                if (lCount === 2) {
                    return index;
                }
            }
        }
    });
}

let resultL = findIndexL(arr2);
console.log(resultL);
// 25 arr2 de terkibinde 2 't' herfi olan obyekt(ler)in key(ler)ini tapin.
function findKeyT(array){
    return array.map(item=>{
        let TCount = 0;
        for(let i=0;i<item.name.length;i++){
            if(item.name[i] === 't'){
               TCount++;
               if(TCount === 2){
                 return item.key;
               }
            }
        }
    });
    
    }
    
    let resultT = findKeyT(arr2);
    console.log(resultT);