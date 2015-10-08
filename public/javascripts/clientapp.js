$(function(){
    $("#mathForm").submit(function(event){
        event.preventDefault();
        var formData = $("#mathForm").serialize();
        $.ajax({
            type:"POST",
            url: "/users/mathProblem",
            data: formData,
            success: function(response){
                console.log('Success!');
                getData();
            }
        });
    });

    function getData(){
        $.ajax({
            type:"GET",
            url: "/users/getAnswer",
            success: function(data){
                console.log(data);
            }
        })
    }
});