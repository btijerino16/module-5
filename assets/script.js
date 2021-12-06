var currentHour = moment().hour();

// current date displays when page opens up 

$("#currentDay").text(moment().format('dddd, MMMM Do YYYY, h:mm a'));

// function that adds color to blocks 

function hoverColor ()



//function that loads times
 
function loadTimes () {


    



 }

 // function to show save task when refreshed

 

// click alerts and functionality 

$(".saveBtn").click(function () {
    event.preventDefault();
    var columnControl = $(this).siblings(".col-10-control").val();
    console.log("BETTER WORK");
    var listItem = $(this).parent().data("hour");

    localStorage.setItem(listItem, columnControl);
});

