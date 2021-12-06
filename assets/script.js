var currentHour = moment().hour();

// current date displays when page opens up 

$("#currentDay").text(moment().format('dddd, MMMM Do YYYY, h:mm a'));

// function that adds color to blocks 


//function that loads times


// click alerts and functionality 

$(".saveBtn").click(function () {
    event.preventDefault();
    var formValue = $(this).siblings(".form-control").val();
    console.log("BETTER WORK");
    var listItem = $(this).parent().data("hour");

    localStorage.setItem(listItem, formValue);
});

