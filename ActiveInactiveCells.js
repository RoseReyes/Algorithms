function activeInactiveCells(state, days) {
    var temp = [];
    for(let x = 0; x <= state.length -1; x++){
        temp[x] = state[x];
    }
    while(days-- > 0){
        temp[0] = 0 ^ state[1];
        temp[state.length - 1] = 0 ^ state[state.length - 2];
        
        for(let y = 1; y <= state.length - 2; y++){
            temp[y] = state[y - 1] ^ state[y + 1];
        for(let z = 0; z <= state.length -1; z++) {
            state[z] = temp[z];
        }
        }
    }
    return state;
}
var a = activeInactiveCells([0,1,1,1,0,1,1,0], 4);
console.log(a);
