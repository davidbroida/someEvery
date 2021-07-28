const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]

// function extractValue(arr,key){
//     return arr.reduce(function(accum, next){
//         accum.push(next[key]);
//         return accum;
//     }, []);
// }


// const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
// extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']

function extractValue(arr,key){
    return arr.reduce(function(accum, next){
        accum.push(next[key]);
        return accum;
    },[]);
}

// function vowelCount(str) {
//         let splitArr = str.split("");
//         let obj = {};
//         const vowels = "aeiou";
      
//         splitArr.forEach(function(letter) {
//           let lowerCasedLetter = letter.toLowerCase()
//           if (vowels.indexOf(lowerCasedLetter) !== -1) {
//             if (obj[lowerCasedLetter]) {
//               obj[lowerCasedLetter]++;
//             } else {
//               obj[lowerCasedLetter] = 1;
//             }
//           }
//         });
//         return obj;
//       }

// vowelCount('Elie') // {e:2,i:1};
// vowelCount('Tim') // {i:1};
// vowelCount('Matt') // {a:1})
// vowelCount('hmmm') // {};
// vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};

function vowelCount(str){
    const vowels = 'aeiou';
    return str.split('').reduce(function(accumulator, next){
        let lowerCasedLetter = next.toLowerCase()
        if(vowels.indexOf(lowerCasedLetter) !== -1){
            if(accumulator[lowerCasedLetter]){
                accumulator[lowerCasedLetter] += 1;
            } else {
                accumulator[lowerCasedLetter] = 1;
            }
        }
        return accumulator;
    }, {});
    }

    // const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];

    // addKeyAndValue(arr, 'title', 'Instructor') //
    
    // [
    //   {title: 'Instructor', name: 'Elie'},
    //   {title: 'Instructor', name: 'Tim'},
    //   {title: 'Instructor', name: 'Matt'},
    //   {title: 'Instructor', name: 'Colt'}
    // ]


    function addKeyAndValue(arr, key, value){
        return arr.reduce(function(acc, next, idx){
            acc[idx][key] = value;
            return acc;
        }, arr);
    }

    // function isEven(val){
    //     return val % 2 === 0;
    //   }
      
    //   const arr = [1,2,3,4,5,6,7,8];
      
    //   partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
      
    //   function isLongerThanThreeCharacters(val){
    //     return val.length > 3;
    //   }
      
    //   const names = ['Elie', 'Colt', 'Tim', 'Matt'];
      
    //   partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]


    function partition (array, callback){
        return array.reduce(function(accumulator,next){
            if(callback(next)){
                accumulator[0].push(next);
            } else{
                accumulator[1].push(next);
            }
            return accumulator;
        }[[],[]]);
    }

   