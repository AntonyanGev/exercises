////filter
function filter(callBack){
let result=[]
for(let i=0;i<this.length;i++){
if(callBack(this[i],i,this)){
result.push(this[i])
}
}
return result
}


////map
function customMap(arr, callback) {
  const newArr = [];
  
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i], i, arr));
  }
  
  return newArr;
}

////IndexOf
function customIndexOf(arr, elem) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elem) {
      return i;
    }
  }
  return -1;
}
