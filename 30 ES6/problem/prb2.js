const name = ['asif','rakib','johan'];

const bondhu = (Names) => {
    const evenArray = [];
    for(const nam of Names){
        if(nam.length %2 ==0 ){
            evenArray.push(nam);
            console.log(nam);
            return nam;
        }
    }
}

const callFuntion = bondhu(name);