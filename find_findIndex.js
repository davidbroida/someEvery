// const scores = [
// 	0,
// 	0,
// 	0,
// 	0,
// 	0,
// 	0,
// 	0,
// 	0,
// 	55,
// 	59,
// 	69,
// 	73,
// 	73,
// 	75,
// 	79,
// 	83,
// 	88,
// 	91,
// 	93
// ];


// scores.find(function(score){
//     return score > 75;
// })


// scores.find(function(score){
// 	return score !== 0 && score % 2 === 0;
// })

// const evenScores = scores.filter(function(score){
// 	return score !== 0 && score % 2 === 0;
// })


// function partition(array, pivot){
// 	const pivotIdx = array.findIndex(function(el){
// 		return el > pivot;
// 	})
// 	const left = array.slice(0, pivotIdx);
// 	const right = array.slice(pivotIdx);
// 	return [left, right];
// }



// function myFind(array,callback){
// 	for(let i = 0; i < array.length; i++){
// 		if(callback(array[i],i,array) === true)
// 			return array[i];
// 	}
// }

// myFind(scores,function(score){
// 	return score > 91;
// })


// function myFind(array,callback){
// 	for(let i = 0; i < array.length; i++){
// 		if(callback(array[i],i,array) === true)
// 			return i;

// myFindIndex(scores, function(score){
// 	return score !== 0 && score %2 ==0;
// })

const users = [
	{username: 'mlewis'},
	{username: 'akagen'},
	{username: 'msmith'}
  ];

//   function findUserByUsername(array,key){
// 	  return array.find(function(user){
// 		  return user.username === key;
// 	  })
//   }

  function removeUser(array,key){
	  let foundIndex = array.findIndex(function(user){
		  return user.username === key;
	  }) 
	  if(foundIndex === -1) return;
	  return array.splice(foundIndex,1)[0];
  }