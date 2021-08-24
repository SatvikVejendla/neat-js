
/*

WARNING:
THIS METHOD DOES NOT WORK AS INTENDED AND IS CURRENTLY IN DEVELOPMENT

*/

module.exports = function(data) {

    let oldGenomes = data.slice();
    oldGenomes.sort((a,b) => {
        return a.fitness - b.fitness
    })

    let length = oldGenomes.length;
    let range_max = (length+1) * (length)/2;

    for(let i = 0; i < length; i++){
        oldGenomes[i].prob = (i+1)/range_max;
    }
    let r = Math.random();

    let index = 0;
    for(let i = 0; i < length; i++){
        r -= oldGenomes[i].prob;
        if(r <= 0){
            break;
        }
        index++;
    }
    return data[index];
}