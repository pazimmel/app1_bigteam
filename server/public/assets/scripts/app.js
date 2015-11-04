$(document).ready(function(){
    $('#createEmployees').submit(function(event){
        event.preventDefault();
        var employeesAdded = 0;
        var values = {};
        $.each($(this).serializeArray(), function(i, field){
            values[field.name]= field.value;
        });
        $("#createEmployees").find("input[type=number]").val("");
        //console.log(values);
        displayLoading();
        callToServer(values,employeesAdded);
    });

    function callToServer(values,employeesAdded){
        employeesAdded++;
        console.log("Adding employee number", employeesAdded);
        $.ajax({
            type:"POST",
            url:"/data",
            data: values,
            success: function(data){
                if (employeesAdded<values.numEmployees){
                    callToServer(values, employeesAdded);
                }else{
                    console.log('done');
                    displayCompleted();
                }
            }
        });
    }

});

function displayLoading(){
    $('.message').empty();
    $('.message').append("<div>" +
        "<p>Employees are being added...</p>"
        + "</div>");
    $('body').addClass('progress');
    //$('form').addClass('progress');
}
function displayCompleted(){
    $('body').removeClass('progress');
    //$('form').removeClass('progress');
    $('.message').empty();
    $('.message').append("<div>" +
            "<p>Employees have been added!</p>"
        + "</div>");
}