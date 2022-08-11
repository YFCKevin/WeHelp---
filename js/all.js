


document.getElementById('title1').textContent = '帥氣的康復';
var cookieprice = 35
document.getElementById('price').textContent = cookieprice;

var cookieprice = 12;
var mymoney = 10;
var total = cookieprice - mymoney;
document.getElementById('aaa').textContent = cookieprice;
document.getElementById('bbb').textContent = mymoney;
document.getElementById('ccc').textContent = total;

var total2
function count(price,number){
    total2 = price * number
    console.log(total2)
    console.log("總價錢"+total2+'元')
}
count(10,4);
console.log(total2);


document.getElementById('countId').onclick = function(){
    var hambugerprice = 100;
    var colaprice = 40;
    var hambuger = parseInt(document.getElementById('hamNumId').value)*hambugerprice;
    var cola = parseInt(document.getElementById('cokeNumId').value)*colaprice;
    document.getElementById('totalId').textContent = hambuger + cola  

}

var cornfield = [];
    cornfield.push(1);
    cornfield.push(10);
    cornfield.push(100);
    cornfield[3] = 401;

console.log('我是陳大米，我有'+cornfield.length+'個玉米田');


var company ={
    table: 20,
    computer: 20,
    sales: ['bob', 'john', 'jelly', 'maggie'],
    boss: 'gary'
}
company.boss = 'leo'

console.log(company.sales);
console.log(company.boss);
console.log(company.sales[2])


var biotools={
    staff: 95,
    salesname: ['bob', 'shelly', 'jack', 'kevin', 'gary', 'sunny'],
    totalreagentnum: 200,
    QuantIIprice: 9000,
    CCK8price: 4800,
    QuantIInum: 100,
    CCK8num: 21,
    getmoney: function (){
        var totalsaleprice = this.QuantIIprice*this.QuantIInum+this.CCK8price*this.CCK8num;
        console.log('我的員工今天做了'+totalsaleprice+'元的業績')
        console.log(this.salesname[0]+'今天推銷了'+this.totalreagentnum+'個試劑')
    }
}
biotools.getmoney();


var mymonth = 9;
var thismonth = 5;
var thisbirthday = mymonth == thismonth;
document.getElementById('birthdayId').textContent = thisbirthday

var nowpeople = 4;
var bookpeople = 6;
var arrivepeople = nowpeople !== bookpeople;
document.getElementById('peopleId').textContent = arrivepeople;



var biotools=[
    {
        name: 'Kevin',
        member: true,
        annualconsumption: 120000,
        buytools: true,
        buyabclonal: false,
    },{
        name: 'fan',
        member: false, 
        annualconsumption: 20000,
        buytools: false,
        buyabclonal: true,
    },{
        name: 'sharon',
        member: true, 
        annualconsumption: 60600,
        buytools: true,
        buyabclonal: true,
    },{
        name: 'jelly',
        member: true, 
        annualconsumption: 180000,
        buytools: false,
        buyabclonal: false,
    }
]

//所有會員中，消費超過10萬的有誰
var biotoolsalestotal = biotools.length
for (var i=0;i<biotoolsalestotal;i++){
    console.log('圖爾思公司第'+(i+1)+'個會員名字是'+biotools[i].name)
    if (biotools[i].annualconsumption>100000){
        console.log(biotools[i].name+'的年消費超過10萬元以上')
    }
}

//今年所有人消費總金額是多少
var annualconsumptiontotal = 0;
for (var i=0;i<biotoolsalestotal;i++){
    annualconsumptiontotal+=biotools[i].annualconsumption; 
}
console.log('今年的總消費金額是'+annualconsumptiontotal)

//在屬於會員且有購買tools or abclonal品項中，且兩品項的年消費相加達6萬以上，給予會員禮

// function isMember(biotools) {
//     var memberList = [];
//     for (var i = 0; i < biotools.length; i++) {
//       biotools[i].member && memberList.push(biotools[i]);
//     }
//     return memberList;

//   }
// var memberlist = isMember(biotools)
// console.log( isMember(biotools));

function isVip(biotools){
    var memberList = [];
    for (var i=0;i<biotools.length;i++){
        biotools[i].member == true && biotools[i].annualconsumption >= 60000 && memberList.push(biotools[i]);
    }
    return memberList;
}
console.log(isVip(biotools))


//在所有會員中，誰的年消費金額最高


//console.log(biotools[0].member == true && biotools[2].member == true)
//console.log(biotools[1].annualconsumption>40000 && biotools[1].member == true)
//console.log(biotools[1].member == true || biotools[1].annualconsumption>=20000)


var hungrylevel = 10;
function eat(food){
    console.log('我現在想吃'+food);
}

if (hungrylevel <= 2){
    eat('pizza');
}else if (hungrylevel <=6){
    eat('beefnoodle');
}else if (hungrylevel <=8){
    eat('cookie');}
else{
    console.log('我很飽了，先睡！')
}

/*
var fund = 'middlerisk'
var invest = '建議投資'
function fundation(recommand,invest){
    totalrecommand = '從你選取的基金，我們給予的風險評估是'+recommand+'，'+invest
    console.log(totalrecommand)
}
switch (fund,fund2){
    case 'highrisk':
        fundation(fund,fund2);
        break;
    case 'middlerisk':
        fundation(fund,fund2);
        break;
    case 'lowrisk':
        fundation(fund,fund2);
        break;
    default:
        break;

}
*/

