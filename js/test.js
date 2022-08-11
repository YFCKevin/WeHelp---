var biotools=[
    {
        name: 'Kevin',
        member: true,
        yearPrice: 120000,
        level: 'VVIP'
    },{
        name: 'fan',
        member: false, 
        yearPrice: 20000,
        level: 'normal'
    },{
        name: 'sharon',
        member: true, 
        yearPrice: 60600,
        level: 'VIP'
    },{
        name: 'jelly',
        member: true, 
        yearPrice: 180000,
        level: 'VVIP'
    }
];
//選單執行條件後，下方列出所屬的會員名稱，以及年消費
var area = document.getElementById('areaId');
var list = document.querySelector('.list');


area.addEventListener('change',areaList,false);
function areaList(e){
    var select = e.target.value;
    var memName = '';
    
    for (var i=0; i<biotools.length;i++){
        if (select == biotools[i].level){
            memName += '<li>'+'會員名稱：'+biotools[i].name+' 。年消費：'+biotools[i].yearPrice +'元'+'</li>'
        };
    };
    console.log(memName);
    list.innerHTML = memName;
};


//rocket 起飛
var body = document.body;
body.addEventListener('keydown',goRocket,false);
function goRocket(e){
    switch (e.keyCode){
        case 49:
        document.querySelector('.rocket-1').style.bottom = '2000px';
        break;
        case 50:
        document.querySelector('.rocket-2').style.bottom = '2000px';
        break;
        case 51:
        document.querySelector('.rocket-3').style.bottom = '2000px';
        break;
    }
}


//localStorge
var button = document.querySelector('.butClass');
button.addEventListener('click',saveName);
var call = document.querySelector('.callClass');
call.addEventListener('click',function(e){
    var str = localStorage.getItem('myName');
    var callName = document.querySelector('.callName');
    var printName = '';
    if (str == document.querySelector('.textClass').value){
        printName += '<li>'+'我是誰?'+str+'</li>';
        callName.innerHTML = printName;
    };
})
function saveName(e){
    var str = document.querySelector('.textClass')
    .value;
    localStorage.setItem('myName',str);
}


//陣列轉字串、字串轉陣列，localstorge只會存取字串形式
//JSON.stringify & JSON.parse
var companyString = JSON.stringify(biotools);
console.log(typeof(companyString));
localStorage.setItem('companyMem',companyString);

var companyAry = JSON.parse(companyString);
console.log(companyAry[0].name);

//將存取在html的數據撈出，便可以進行增修
//利用dataset撈出html的數據
var farmList = document.querySelector('.farm');
farmList.addEventListener('click',function (e){
    console.log(e.target.dataset.dog);
    console.log(e.target.dataset.num);
})


//
var list = document.querySelector('.updateBiotools');

function updateBiotools(){
    var str='';
    for (var i=0; i<biotools.length; i++){
        str += '<li data-num='+i+' data-name='+biotools[i].name+'>'+biotools[i].name+'</li>';
    };
    list.innerHTML = str;
};
updateBiotools();

list.addEventListener('click',showList);

function showList(e){
    var area = e.target.nodeName;
    if (area !== 'LI'){return}
    var str = e.target.dataset.name;
    alert('您選取的會員是：'+str);
}

// window prototype
document.getElementById('print').onclick = function(){
    window.print();
};
document.getElementById('location').onclick = function(){
    console.log(location)
};
document.getElementById('open').onclick = function(){
    window.open('http://www.google.com')
};




