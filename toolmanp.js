//tool change
let pencil = document.querySelector("#pencil");
let eraser = document.querySelector("#eraser");
let rect = document.querySelector("#rect");
let line = document.querySelector("#line");
let options = document.querySelectorAll(".size-box");

// identify -> click  -> again click
pencil.addEventListener("click" ,function(e){
    if(cTool == "pencil"){
        //second click
        //options show
        options[0].style.display = "flex";
    }
    else{
        for(let i = 0; i < options.length; i++){
            options[i].style.display = "none";  //to remove flex , sare hide , sbko thappad laga do
        }
        cTool = "pencil";
        tool.strokeStyle = "lightpink"
        tool.lineWidth = pencilSize
    }
 })
 eraser.addEventListener("click" ,function(e){
  if(cTool == "eraser"){
        //second click
        //options show
        options[1].style.display = "flex";
    }
    //first click
    else{
        //koi aur clicked aur usko options visible to wo remove ho jaaye
        cTool ="eraser";
        tool.strokeStyle = "white";
        for(let i = 0; i < options.length; i++){
            options[i].style.display = "none";
        }
       tool.lineWidth = eraserSize;
    }
  })
  rect.addEventListener("click" ,function(e){
      if(cTool == "rect"){
        //second click
        //options show
        options[2].style.display = "flex";
    }else{
        for(let i = 0; i < options.length; i++){
            options[i].style.display = "none";
        }
     cTool = "rect";
     tool.strokeStyle = "lightpink";
     tool.lineWidth = rectSize;
    }
  })
  line.addEventListener("click" ,function(e){
      if(cTool == "line"){
        //second click
        //options show
        options[3].style.display = "flex";
    }else{
        for(let i = 0; i < options.length; i++){
            options[i].style.display = "none";
        }
        cTool = "line";
        tool.strokeStyle = "lightpink";
     tool.lineWidth = lineSize;
    }
  })
   //color change
   let redColor = document.querySelector(".red");
   let greenColor = document.querySelector(".green");
   let blueColor = document.querySelector(".blue");
   redColor.addEventListener("click", function(){
     tool.strokeStyle = " lightpink";
   })
   greenColor.addEventListener("click", function(){
     tool.strokeStyle = " lightgreen";
   })
   blueColor.addEventListener("click", function(){
     tool.strokeStyle = " lightblue";
   })

   //size change logic
   //pencil , eraser,rect,line

   let pencilSize = 5;
   let eraserSize = 5;
   let lineSize = 5;
   let rectSize = 5;
   let sizeBoxArr = document.querySelectorAll(".size-box");

   sizeBoxArr[0].addEventListener("click" , function(e){
       //actual event occur -> target

       let elems = ["size1" , "size2", "size3","size4"];

       let allTheClasses = e.target.classList;
       let firstClass = allTheClasses[0];
       let test = elems.includes(firstClass);

       if(test){
           //size wale button p click
           if(firstClass == "size1"){
                     pencilSize = 5;
           }else if(firstClass == "size2"){
            pencilSize = 10;
           }else if(firstClass == "size3"){
            pencilSize = 15;
           }else if(firstClass == "size4"){
            pencilSize = 20;
           }
       }
       console.log("pencilsize" + pencilSize);
       tool.lineWidth = pencilSize;
       // event listener -> currentTarget
    // console.log(e.currentTarget)
   })
   sizeBoxArr[1].addEventListener("click" , function(e){
    //actual event occur -> target

    let elems = ["size1" , "size2", "size3","size4"];

    let allTheClasses = e.target.classList;
    let firstClass = allTheClasses[0];
    let test = elems.includes(firstClass);

    if(test){
        //size wale button p click
        if(firstClass == "size1"){
                  eraserSize = 5;
        }else if(firstClass == "size2"){
            eraserSize = 10;
        }else if(firstClass == "size3"){
            eraserSize = 15;
        }else if(firstClass == "size4"){
            eraserSize = 20;
        }
    }
   // console.log("pencilsize" + pencilSize);
    tool.lineWidth = eraserSize;
    // event listener -> currentTarget
 // console.log(e.currentTarget)
})
sizeBoxArr[2].addEventListener("click" , function(e){
    //actual event occur -> target

    let elems = ["size1" , "size2", "size3","size4"];

    let allTheClasses = e.target.classList;
    let firstClass = allTheClasses[0];
    let test = elems.includes(firstClass);

    if(test){
        //size wale button p click
        if(firstClass == "size1"){
             rectSize = 5;
        }else if(firstClass == "size2"){
            rectSize = 10;
        }else if(firstClass == "size3"){
            rectSize = 15;
        }else if(firstClass == "size4"){
            rectSize  = 20;
        }
    }
    console.log("pencilsize" + pencilSize);
    tool.lineWidth = rectSize ;
    // event listener -> currentTarget
 // console.log(e.currentTarget)
})
sizeBoxArr[3].addEventListener("click" , function(e){
    //actual event occur -> target

    let elems = ["size1" , "size2", "size3","size4"];

    let allTheClasses = e.target.classList;
    let firstClass = allTheClasses[0];
    let test = elems.includes(firstClass);

    if(test){
        //size wale button p click
        if(firstClass == "size1"){
                  lineSize = 5;
        }else if(firstClass == "size2"){
            lineSize = 10;
        }else if(firstClass == "size3"){
            lineSize = 15;
        }else if(firstClass == "size4"){
            lineSize = 20;
        }
    }
    console.log("pencilsize" + pencilSize);
    tool.lineWidth =  lineSize;
    // event listener -> currentTarget
 // console.log(e.currentTarget)
})