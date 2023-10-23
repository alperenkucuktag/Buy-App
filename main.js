// Defined Variables

const nameInput = document.getElementById("name-input")
const priceInput = document.getElementById("price-input")
const addBtn = document.getElementById("add-btn")
const listArea = document.getElementById("list")
const statusCheckbox = document.getElementById("status-check")
const sumInfo = document.getElementById("sum-info")
const deleteBtn = document.getElementById("delete")
const editBtn = document.getElementById("edit")
const userInfo = document.getElementById("user-input")
const select = document.getElementById("select")


let sum=0
addBtn.addEventListener("click",addExpense)

listArea.addEventListener("click",handleUpdate)

// Harcama Ekle
function addExpense(event) {
   //Refresh Engelle

   event.preventDefault()

   if (!nameInput.value || !priceInput.value) {

    alert("Bir değer giriniz")
    
   }

   const expenseDiv=document.createElement("div")

   expenseDiv.classList.add("expense")

   if (statusCheckbox.checked) {
    expenseDiv.classList.add("paid")

    
   }

   
   expenseDiv.innerHTML = `
   <h2 class="name">${nameInput.value} </h2>
   <h2 class="price">${priceInput.value} </h2>
   <div class=""btns>
   <img id="edit" src="/images/money.png"/>
   <img id="delete" src="/images/delete.png"/>
   
   </div>
  

   
   `
  
   listArea.appendChild(expenseDiv)

   //toplamıDegistir

   updateSum(priceInput.value)

   nameInput.value = ""
   priceInput.value= ""
   statusCheckbox.checked=false

   console.log(listArea);

    
}
/*toplami güncelle*/
function updateSum(price) {

    sum +=Number(price)
    sumInfo.innerText=sum

    
}
// liste elemanları üzerindeki işlemleri yönet
function handleUpdate(event) {
    //tıklanılan item
    const item=event.target

    const parent=item.parentElement.parentElement
    //silme tık

    if (item.id=="delete") {
        //kaldır

        parent.remove()
        //toplamı guncelle

        const price=parent.querySelector(".price").textcontent
        updateSum(Number(price)*-1)
    }
    //guncelleme tıklandığında

    if (item.id=="edit") 
    {parent.classList.toggle("paid")
        
    }

    
}
// kullanıcıyı local e kaydet 
function saveUser(event) {
    localStorage.setItem("user",event.target.value)
    
}

// kullanıcıyı localden al

function name(params) {
    const username =localStorage.getItem("user")|| ""
    userInfo.value=username
    
}
