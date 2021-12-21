//1 
//ii
let div = document.getElementById('black');
let btn = document.querySelector('.btn_2');
    
btn.addEventListener('click',function(){
    div.remove()
})

//iii
let button = document.querySelector('.btn_3');
button.addEventListener('click',function(){
    div.classList.add('hidden')
})


//2
let block = document.querySelector('.block');
let btn_2 = document.querySelector('.btn2');

btn_2.addEventListener('click',function(){
    block.classList.toggle('hidden')
})

//3
let blocks = document.querySelectorAll('.block3');
let btn3 = document.querySelector('.btn3')

btn3.addEventListener('click',function(){
    blocks.forEach(function(block){
        block.classList.toggle('hidden')
    })
})

//4

let btn4 = document.querySelector('.btn4')

btn4.addEventListener('click',function(){
    let selector = document.querySelector('.input_selector').value;
    document.querySelector(`${selector}`).remove()
});

//5
let yellow_div = document.querySelector('.yellow_div');

yellow_div.addEventListener('click',func);

 function func(){
    alert('Привет')
    yellow_div.removeEventListener('click',func)
    yellow_div.addEventListener('click',function(){
        yellow_div.classList.add('hidden')
    });
}

//6
let red_div = document.querySelector('.red_div');
let btn6 = document.querySelector('.btn6');

btn6.addEventListener('mouseover',mouse);

function mouse(){
    red_div.classList.remove('hide');
    red_div.removeEventListener('mouseover',mouse)
    btn6.addEventListener('mouseout',function(){
        red_div.classList.add('hide')
    })
}

//7
let input = document.querySelector('.input7');
let green_div = document.querySelector('.green_div');

input.addEventListener('focus',hideinput);

function hideinput(){
    green_div.classList.remove('hidden');
    green_div.removeEventListener('focus',hideinput);
    input.addEventListener('input',function(){
        green_div.classList.add('hidden')
    });
}

//8
let btn8 = document.querySelector('.btn8');
let img = document.querySelector('.img_8');
btn8.addEventListener('click',function(){
    img.classList.remove('hidden');
    let input_img = document.querySelector('.input8').value;
    img.src = input_img 
})

//9

let btn9 = document.querySelector('.btn99');
let images = document.querySelector('.images')


btn9.addEventListener('click',function(){
    let textareaValues = document.getElementById('textarea1').value.split(/\n/);
    console.log(textareaValues)
    console.log(images)
    for(let i = 0;i <= textareaValues.length; i++ ){
        console.log(i)
        let img = new Image(200);
        img.src = textareaValues[i];
        images.appendChild(img);
    }
})

// 10
document.body.onmousemove = 
function(event){
    // console.log(event)
    document.querySelector('.x').innerHTML = event.offsetX;
    document.querySelector('.y').innerHTML = event.offsetY
}

//11
let lang = navigator.language
document.querySelector('.lang').innerHTML = lang;

//12
navigator.geolocation.getCurrentPosition(pos);

function pos(positon){
    let latitude = positon.coords.latitude;
    let longitude = positon.coords.longitude;
    document.querySelector('.longitude').innerHTML = longitude
    document.querySelector('.latitude').innerHTML = latitude

}
//13
let localStorageD = document.querySelector('.localStorage');
let sessionStorageD = document.querySelector('.sessionStorage');
const cookiesDiv = document.querySelector('.cookies')

localStorageD.addEventListener('DOMSubtreeModified', function(){
    localStorage.setItem('local',localStorageD.innerHTML )
})

sessionStorageD.addEventListener('DOMSubtreeModified',function(){
    sessionStorage.setItem('session', sessionStorageD.innerHTML)
})
window.addEventListener('load',function(){
    localStorageD.innerHTML = localStorage.getItem('local');
    sessionStorageD.innerHTML = sessionStorage.getItem('session');
    cookiesDiv.innerHTML = document.cookie
})


//14
let height = window.innerHeight;
let btn14 = $('.btn14');

$(window).scroll(function(){
    if($(window).scrollTop()> 700){
        btn14.removeClass('hidden')
    } else{
        btn14.addClass('hidden')
    }
})

btn14.on('click',function(event){
    $('html, body').animate({
        scrollTop: 0
    })
})
//15
let firstdiv = document.querySelector('.first');
let secondDiv = document.querySelector('.second');

firstdiv.addEventListener('click',function(){
    alert('hi')
})

secondDiv.addEventListener('click',second);

function second(){
    firstdiv.removeEventListener('click',function(){
        alert('hi')
    });
}
//16
let modalBtn = document.querySelector('.modalBtn');
let modal = document.querySelector('.modal');
let body = document.querySelector('body')

modalBtn.addEventListener('click',function(){
    modal.style.display = 'block';
    body.classList.add('overflow')
});

modal.addEventListener('click',function(){
    modal.style.display = 'none';
    body.classList.remove('overflow')
});

//17
let go =document.querySelector('.sumbit');
go.addEventListener('click',stop);

function stop(event){
    event.preventDefault()

}

//18
let inputFile = document.querySelector('.inputfile');

inputFile.addEventListener('dragover',function(){
    inputFile.classList.add('drag');
});

inputFile.addEventListener('dragleave',function(){
    inputFile.classList.remove('drag')
});

inputFile.addEventListener('drop',function(){
    inputFile.classList.remove('drag');
    inputFile.classList.add('drop')
});

// csv
let csvText  = document.getElementById('csvText');
let result_btn = document.querySelector('.result');
let text = document.querySelector('#text');
let resultDiv = document.querySelector('#results');

function ParseCsv(){
    let csValue = csvText.value;
    let csvArr = csValue.split('\n')
    let csvFilter = csvArr.filter(item => !item.includes('#') && !item.includes('  '));
    let maps = csvFilter.map(function(elem){
        let lineForMap = elem.split(',');
        let map = {
            x: lineForMap[0],
            y: lineForMap[1],
            name: lineForMap[2],
            population: lineForMap[3]
        }
        return map
    })
    let SortMap = maps.sort((a , b) => b.population -  a.population);
    let tenCities = SortMap.slice(0,10);
    let finalObj = tenCities.reduce((a,c,i) =>{
        a[c.name] = {
            population : c.population,
            raiting : i + 1
        }
        return a
    },{})
    console.log(finalObj)
 
    return finalObj
}

result_btn.addEventListener('click',function(){
   let cont = text.value;
   let afterParse =  ParseCsv()
   resultDiv.innerHTML = `${cont} - немає у рейтингу`
   let lineForRes = `${cont}-${afterParse[cont].raiting} місце у Топ 10 міст України з населенням ${afterParse[cont].population }`
   resultDiv.innerHTML = lineForRes
})