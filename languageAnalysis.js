"use strict"

let btn = document.getElementById("btn") ;
let wordList = document.getElementById("wordList") ;
let total = document.getElementById("total");
let total__num = document.getElementById("total__num");
let form = document.querySelector("form");


// event on button element 
btn.addEventListener("click", (e) =>{ 
  e.preventDefault();
  let deletor = document.querySelectorAll("[id='trKing']");
  deletor.forEach( e => e.remove())
  let text = document.getElementById("text").value ;
  countWords(text)
})
// This function counts the number of times each word appear 
// on a text and the total number of different words.
function countWords(string){
  if( string.trim() == "" ) return console.log("text empty");
     let list = {} ;

function addCount(ele){
  if( ele.trim() == "" ) return ;
  if( ele == " " ) return ;
  if(list.hasOwnProperty(ele) === true ){
     list[ele]++ ;
  }else{
     list[ele] = 1 ; 
  }
  return list 
}
   let brokenSerie = string.replace(/[.*+\-?^${}()|[\]%$&¬↵€"'’«»–\\¿!:;¡,=”\<>/≠]/g," ")
   .replace(/(\r\n|\n|\r)/gm, "")
   .split(" ") ;

 let results = brokenSerie.map( e => addCount(e.toLowerCase()) );
 let numberOfWords = Object.values( list ).reduce((cu, e)=> cu +e  )
 let sortedList = Object.entries( list ).sort( 
   (a, b) =>{ return  b[1] - a[1]  }
  );


  // creates a table with the results 
   function resultTable(data){
     
       let tableRow = document.createElement("div") ;
       tableRow.classList.add("tr");
       tableRow.setAttribute("id", "trKing");
       let dataWord = document.createElement("div") ;
       dataWord.classList.add("td")
       let dataNum = document.createElement("div") ;
       dataNum.classList.add("td")
       let dataPer = document.createElement("div") ;
       dataPer.classList.add("td")
          dataWord.innerText = data[0] ;
          dataNum.innerText = data[1] ;
          dataPer.innerText =  ((data[1] * 100)/numberOfWords).toFixed(2) +"%" ;

					tableRow.appendChild(dataWord);
					tableRow.appendChild(dataNum);
					tableRow.appendChild(dataPer);

					wordList.appendChild(tableRow);
      
   }

   sortedList.forEach( (e)=>{ resultTable(e) }  )

   function refreshValues(){
     // sets values of tr, th, total number of words 
    total__num.innerText = "TOTAL: "+ numberOfWords ;
    form.reset()
   }
   refreshValues() 
} 





