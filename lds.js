// this is a js version

class DistinctElementsInTwoSets {}
DistinctElementsInTwoSets.findDistinctElements = (setOne, setTwo) => {
  console.log(
    "Set 1: " + Arrays.toString(setOne) + ", Set 2: " + Arrays.toString(setTwo)
  );
  let map = new HashMap();
  for (let i = 0; i < setOne.length; i++) {
    let element = setOne[i];
    if (map.containsKey(element)) {
      let count = map.get(element);
      map.put(element, count + 1);
    } else {
      map.put(element, 1);
    }
  }
  for (let i = 0; i < setTwo.length; i++) {
    let element = setTwo[i];
    if (map.containsKey(element)) {
      let count = map.get(element);
      map.put(element, count + 1);
    } else {
      map.put(element, 1);
    }
  }
  let sum = 0;
  let set = map.keySet();
  let iterator = set.iterator();
  while (iterator.hasNext()) {
    let key = iterator.next();
    if (map.get(key) === 1) {
      sum += key;
    }
  }

DistinctElementsInTwoSets.main = (arg) => {
  let setOne = [3, 1, 7, 9];
  let setTwo = [2, 4, 1, 9, 3];
  this.findDistinctElements(setOne, setTwo);
};
