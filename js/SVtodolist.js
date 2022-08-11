const textAdd = document.querySelector('.textContent');
const btn = document.querySelector('.btn');
const list = document.querySelector('.list');

let todoList = [];
btn.addEventListener('click',addData);
function addData(){
  if (textAdd.value == ''){alert('不得為空')}else{
  todoList.push({id:todoList.length,text:textAdd.value});
  saveToLocal();
  renderData(todoList);
  cleanWord();
  }
}  


function saveToLocal(){
  localStorage.setItem('LSList',JSON.stringify(todoList))
}


//渲染
function renderData(){
let str = '';
for (let i=0; i<todoList.length; i++){
  str += '<li data-num='+i+'>'+todoList[i].text+' <button class="edit" data-num='+i+'>'+'修改'+'</button>'+ ' <button class="del" data-num='+i+'>'+'刪除'+'</button>'+' <button class="done" data-num='+i+'>'+'完成'+'</button></li>'
  }
  list.innerHTML = str;
  
//binding
let del = document.querySelectorAll('.del');
let edit = document.querySelectorAll('.edit')
// let done = document.querySelectorAll('.done')
  for (let i=0;i<del.length; i++){
    del[i].addEventListener('click',deleteData);
    edit[i].addEventListener('click',editData);
    // done[i].addEventListener('click',done);
    };
}

//wondow load
window.addEventListener('DOMContentLoaded',function(){
  if (!localStorage.getItem('LSList')){return}
  let ary = JSON.parse(localStorage.getItem('LSList'));
  todoList = ary;
  renderData(todoList);
})


//刪除本地 & localStorage的資料
function deleteData(e){
  let id = e.target.dataset.num
  todoList.splice(id,1);
  renderData(todoList);
  saveToLocal();
}


//清空input文字
function cleanWord(){
  let str = '';
  textAdd.value = str;
};

//修改內文
function editData(e){
  let id = e.target.dataset.num;
  let target = e.target.closest('li')
  for (let i=0;i<todoList.length;i++){
    if (id == todoList[i].id){
      target.innerHTML = '<input type="text" class="textContent2" data-num='+i+' value='+todoList[i].text+'>'+' <button class="cf" data-num='+i+'>'+'確認'+'</button>'
      let confirm = target.querySelector('.cf')
      console.log(confirm)
      confirm.addEventListener('click',confirmData);
      
    };
  };
};


function confirmData(e){
    const id = e.target.dataset.num;
    const target = e.target.closest('li');
    const textEdit = document.querySelector('.textContent2');
    for (let i=0;i<todoList.length;i++){
      if (textEdit.value === ''){
        alert('不得為空');
    }else if (id == todoList[i].id){
      console.log(textEdit)
      todoList[i].text = textEdit.value;
      renderData(todoList);
      saveToLocal();
    }
  }
}




