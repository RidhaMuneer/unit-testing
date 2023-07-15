function analyzeArray(arr){
    let length = arr.length;
    let midIndex = arr.length/2;
    let average = arr[midIndex];
    let min = arr[0];
    let max = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return average + min + max + length;
    // let object = {
    //     average: average,
    //     length: length,
    //     min: min,
    //     max: max
    // }
    // return object;
}
module.exports = analyzeArray;