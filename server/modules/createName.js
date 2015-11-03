/**
 * Created by eandreweccleston on 11/3/15.
 */
var Chance= require('chance'),
    chance = new Chance();

function createName(data){
    if(data.sex=='male'){
        return chance.name({ gender: "male" });
    }else if(data.sex=='female'){
        return chance.name({ gender: "female" });
    }else{
        return chance.name();
    }
}


module.exports = createName;