module.exports = function (genes, mutateRate) {

    return genes.map(i => {
        if(Math.random() < mutateRate){
            return (Math.random()*2)-1
        } else {
            return i
        }
    })
}