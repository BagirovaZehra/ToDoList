let input = document.querySelector("input");
let addBtn = document.querySelector(".text");
let listsDiv = document.querySelector(".lists")
let list  =document.createElement("ul");
let inputContainer = document.querySelector(".input-container");
let iconAdd = document.querySelector(".icon");
let iconFirst = document.querySelector(".icon-first img");
let inputIcon = document.querySelector(".icon-x img");
const itemArr = [];

inputIcon.addEventListener("click",()=>{
  input.value=""
})
inputIcon.addEventListener("mouseover",()=>{
  inputIcon.src="./images/Group70.svg"
})
inputIcon.addEventListener("mouseout",()=>{
  inputIcon.src="./images/Group59.svg"
})


addBtn.addEventListener("click",()=>{
    if(input.value==""){
      alert("Yalnış dəyər daxil edilib")
      inputContainer.style.display="block"
    }
    else{
      inputContainer.style.display="none"
      listsDiv.style.display="block";
      list.style.display="block";
      itemArr.push(input.value)
    }
   
    addTodo()
})

function addTodo(){
    list.innerHTML=""
    itemArr.forEach((item,index)=>{
      let listItem = document.createElement("li");
    const imgIconX = document.createElement("img");
  
      imgIconX.src="./images/Group59.svg";
      imgIconX.alt="deleteIcon";
      imgIconX.classList.add("list-x")
      listItem.append(imgIconX)
      listItem.classList.add("list-element")
  
      listItem.innerHTML=`${++index}. ${item}`;
      input.value=""
      listItem.append(imgIconX)
      list.append(listItem);
      listsDiv.append(list);
      
      imgIconX.addEventListener("mouseover",()=>{
        imgIconX.src="./images/Group70.svg"
      })
      imgIconX.addEventListener("mouseout",()=>{
        imgIconX.src="./images/Group59.svg"
      })


      imgIconX.addEventListener("click",(e)=>{        
        itemArr.forEach((item,index)=>{
          
          if(listItem.textContent.split(". ")[1]==item){            
            itemArr.splice(index,1);

          }
        })
        
        addTodo();
        
        if(itemArr.length===0){
          listsDiv.style.display="none";
          list.style.display="none"
          inputContainer.style.display="block"

          
        }
      })  
    })
}


iconAdd.addEventListener("click",()=>{
    inputContainer.style.display="block";
})
iconFirst.addEventListener("mouseover",()=>{
  iconFirst.src="./images/Group73.svg"
})
iconFirst.addEventListener("mouseout",()=>{
  iconFirst.src="./images/Group74.svg"
})


iconFirst.addEventListener("click",()=>{
    iconFirst.style.display="none";
    let iconSecond = document.createElement("img");
    iconSecond.src = "./images/Group90.svg";
    iconSecond.alt = "secondIcon";
    document.querySelector(".icon-first").append(iconSecond);
    let isTrue=true;
    
    itemArr.sort((a, b) => {
      if (isTrue) {
          return a.localeCompare(b);
      } else {
          return b.localeCompare(a);
      }
  });

  isTrue=!isTrue
    
    addTodo();
  
    iconSecond.addEventListener("mouseover",()=>{
      iconSecond.src="./images/Group91.svg"
    })
    iconSecond.addEventListener("mouseout",()=>{
      iconSecond.src="./images/Group90.svg"
    })
    iconSecond.addEventListener("click",()=>{
        iconSecond.style.display="none";
        iconFirst.style.display="block";        
        itemArr.sort((a, b) => {
          if (isTrue) {
              return a.localeCompare(b);
          } else {
              return b.localeCompare(a);
          }
      });
        addTodo()
    })
})






