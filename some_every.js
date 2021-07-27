

const words = [

    'helloo',
    'whatsgoingonnnn',
    'howeareyou',
    'mynameisdavidd',
    'nicetomeetyouuu',
    'whattimeisittt',
    'unimaginateively'
];

words.some(function(word){
    return word.length > 10;
})


// const btn = document.querySelector('button');
// btn.addEventListener('click', function(e){
// const checkboxes = document.querySelectorAll('input[type="checkbox]');
// const allChecked = Array.from(checkboxes).every(function(checkbox){
//     return checkbox.checked;
// });
// if (!allChecked) alert ('PLEASE AGREE TO EVERYTHING!');
// });


function mySome(arr, callback){
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr)) return true;
    }
    return false
}

mySome([4,5,6,7], function(n){
    return n > 5;
})


function myEvery(arr, callback){
    for(let i = 0; i < arr.length; i++){
        if(!callback(arr[i], i, arr)) return false;
    }
    return true
}

myEvery([4,5,6,7], function(n){
    return n > 5;
})

function hasOddNumber (array){
    return array.some(function(n){
       return n % 2 === 1
    })
}

function hasAZero(number){
    return number
    .toString()
    .split('')
    .some(function(value){
        return value === '0';
    })
}

function hasOnlyOddNumbers(array){
    return array.every(function(n){
        return n % 2 !== 0;
    })
}

function hasNoDuplicates (array){
    return array.every(function(value){
        return array.indexOf(value) === array.lastIndexOf(value);
    })
}

let array = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
  ]

function hasCertainKey(array,key){
    return array.every(function(value){
        return key in value
    })
}

function hasCertainValue(array,key, searchValue){
    return array.every(function(value){
        return value[key] === searchValue
    })
}