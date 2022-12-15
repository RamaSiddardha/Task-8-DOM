var addform=document.querySelector('#addForm')
var newitem=document.querySelector('#items')

var filter=document.querySelector('#filter')

addform.addEventListener('submit',additem)

newitem.addEventListener('click',removeItem)

filter.addEventListener('keyup',filetItem)


function additem(e){

    e.preventDefault()

   

    var getitem=document.getElementById('item').value
    // store in localstorage
    localStorage.setItem(getitem,'Item')

    var li=document.createElement('li')
    li.className='list-group-item'
    li.appendChild(document.createTextNode(getitem))

    var Dlbutton=document.createElement('button')
    Dlbutton.className='btn btn-danger btn-sm float-right delete'
    Dlbutton.appendChild(document.createTextNode('X'))

    var editbtn=document.createElement('button')
    editbtn.className='btn btn-danger btn-sm float-right delete'
    editbtn.appendChild(document.createTextNode('EDIT'))


    li.appendChild(editbtn)

    li.appendChild(Dlbutton)


    newitem.appendChild(li)


}

function removeItem(e){
    if(e.target.classList.contains('delete'))
    {
      if(confirm('Are You Sure')){
        var li=e.target.parentElement
        newitem.removeChild(li)
      }
    }
}


function filetItem(e){
  var text=e.target.value.toLowerCase()
  var itemList=newitem.getElementsByTagName('li')
  Array.from(itemList).forEach(function(item){
    var ListItem=item.firstChild.textContent
    if(ListItem.toLocaleLowerCase().indexOf(text) != -1){
        item.style.display='block'
    }
    else{
      item.style.display='none'
    }
  })
}

