$(document).ready(function(){
    $('#createEmployees').submit(function(event){
        event.preventDefault();
        var employeesAdded = 0;
        var values = {};
        $.each($(this).serializeArray(), function(i, field){
            values[field.name]= field.value;
        });
        console.log(values);
        callToServer(values,employeesAdded);
    });

    function callToServer(values,employeesAdded){
        $.ajax({
            type:"POST",
            url:"/data",
            data: values,
            success: function(data){
                console.log("this is data ",data);
                var currNumEmployees = employeesAdded + 1;
                console.log("num employees added", currNumEmployees);
                //callToServer(values,currNumEmployees);


            }
        });
    }

});

