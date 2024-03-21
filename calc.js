function displayData(n){
    result.value+=n
}

function allClear(){
    result.value=""
}

function remove(){
    result.value=result.value.slice(0,-1)

}

function findOut(){
    result.value=eval(result.value)
}

function percent(){
    result.value=result.value/100
}