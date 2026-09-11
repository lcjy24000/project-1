// My Library 静态网站交互功能

const books = [
  {name:'《活着》', author:'余华', status:'已读'},
  {name:'《平凡的世界》', author:'路遥', status:'阅读中'},
  {name:'Animal Farm', author:'George Orwell', status:'计划阅读'}
];

function showBookCount(){
  const element=document.getElementById('book-count');
  if(element){
    element.innerText=`当前展示 ${books.length} 本书`;
  }
}

document.addEventListener('DOMContentLoaded', showBookCount);
