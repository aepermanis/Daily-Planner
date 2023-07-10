
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  let saveButtons = document.querySelectorAll(".saveBtn")
  for (let i = 0; i < saveButtons.length; i++){
    saveButtons[i].addEventListener("click", function(event){
      let timeSlot = event.target;
      
      let gh = timeSlot.parentElement.getAttribute("id");
      
      let text = timeSlot.parentElement.querySelector(".description").value;
      
      localStorage.setItem(("" + gh),("" + text));
    });
  };
  //saves all the timeblocks as an array
  let timeBlocks = document.querySelectorAll(".time-block");
  // iterates through the timeblocks 
  for (let i = 0; i < timeBlocks.length; i++){
    //if the time block id is the same as the current hour it will be marked as present
    if(timeBlocks[i].id === "hour-" + dayjs().format("H")){
      timeBlocks[i].classList.add("present");
      //then the next i value will be saved so the loop can start there
      var u = i + 1;
      //then the loop will break
      break;
      //otherwise the time is marked as past
    }else{
      timeBlocks[i].classList.add("past");
    };
  };

  //then starting from where the loop left off everything else is marked as future
  for (let z = u; z < timeBlocks.length; z++){
    timeBlocks[z].classList.add("future");
  };
  
  
  let textAreas = document.querySelectorAll(".description");

  for (let i = 0; i < textAreas.length; i++) {
    let jk = textAreas[i].parentElement.getAttribute("id")
    textAreas[i].value = localStorage.getItem(("" + jk));
  };


  
  

  //find the html element to display the current date
  let currentDay = document.getElementById("currentDay");
  //change the text content of the element to the current date
  currentDay.textContent = dayjs().format("MMMM D, YYYY");
});
