// feetToMile
function feetToMile(mile){
    var feet = mile / 5280;
    return feet;
}
var result = feetToMile(5280);
console.log(result);
// woodCalculator
function woodCalculator(chair, table, bed){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed * 5;
    var total = chairCount + tableCount + bedCount;
    return total;
}
// brickCalculator
// tinyFriend
function tinyFriend(names){
    var small = names[0]
    for(var i = 0; i < names.length; i++){
        var find = names[i];
        if(find < small){
            small = find;
        }
    }
    return small;
}
var lastResult = tinyFriend(['prince', 'nazmul', 'baki', 'hridoyKhan',]);
console.log('result', lastResult);
