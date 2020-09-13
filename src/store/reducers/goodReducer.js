
const initState = {
    arr:[]
}


export default function goodReducer(state=initState,action){
    // console.log('-------------good',action)
    switch (action) {
        case 'add':
            //添加商品
            return state;
    
        default:
            return state;
    }

}