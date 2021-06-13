export const animals = {
  "cangrejo" : "crab",
  "ballena": "whale",
  "coral": "coral",
  "delfin": "dolphin",
  "foca": "seal",
  "tortuga": "turtle",
  "mariscos": "shellfish"
}

export const generateQuestions = (dictionary, numberQuestions) => {
  const keys = Object.keys(dictionary);
  const alternativesQuantity = 4;
  const mainShuffleKeys = shuffle(keys);
  let shuffleKeys = [...mainShuffleKeys];
  let questions = [];
  let key;
  let value;
  let newShuffleKeys;
  while(shuffleKeys.length > 0 && questions.length < numberQuestions){
    key = shuffleKeys.pop();
    value = dictionary[key];
    newShuffleKeys = shuffle([... mainShuffleKeys]);
    let alternatives = newShuffleKeys.slice(0, alternativesQuantity - 1).map(key => dictionary[key])
    const randomPosition = Math.floor(Math.random() * alternativesQuantity);
    insertAt(alternatives, randomPosition, value);

    questions.push({
      'question': `Como se dice ${key} en ingles?`,
      'alternatives': alternatives,
      'answer': value
    })
  }
  console.log('questions', questions);
  return questions;
}

const insertAt = (array, index, ...elementsArray) => {
  array.splice(index, 0, ...elementsArray);
}

/*
 * https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 * Warning!
 * The use of this algorithm is not recommended, because it is inefficient 
 * and strongly biased; see comments. It is being left here for future 
 * reference, because the idea is not that rare.
*/
const shuffle = (array)=> {
  return array.sort( () => .5 - Math.random() );
}
