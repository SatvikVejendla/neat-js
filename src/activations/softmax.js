module.exports = function(arr){
    let sum;
    let result = []
    for(let i =0; i < arr.length; i++){
        sum += Math.exp(arr[i])
    }
    for(let i = 0; i < arr.length; i++){
        result.push(Math.exp(arr[i]) / sum);
    }
    return result;
}