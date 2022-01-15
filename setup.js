let cTool = "pencil";
let canvasBoard = document.querySelector("canvas");
let tool = canvasBoard.getContext("2d");
let body = document.querySelector("body");
//canvas dimension set karne k baad jo changes kroge whi reflect/dikhenge
canvasBoard.height = window.innerHeight;
canvasBoard.width = window.innerWidth;
 tool.strokeStyle = "lightpink";
 