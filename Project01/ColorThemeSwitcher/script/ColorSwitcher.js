function changeColor(colorname){
    document.querySelector('body')
    .style.backgroundColor = colorname

    let ele = document.querySelector(`#${colorname}`);
    let value = ele.innerText;
    // console.log(value);
    if(value){
        ele.innerText = ++value
    }
}

