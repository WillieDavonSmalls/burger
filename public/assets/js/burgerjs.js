



//function for devoured burgers
function loadDevouredBurgers(){

    // HTML for Display devoured burgers
    function buildDevBurgerTable(data) {
        var html = `<table id="t01">
            <tr>
            </tr>
        `;

        data.forEach(function(data) {
            html += `
                <tr>
                    <td>${data.burger_name}</td>

                </tr>
            `;
        });

        html += '</table>';
        return html;
    }

jQuery.ajax({
    method: 'GET',
    url: '/api/burger_controller',
    dataType: 'json',
    success: function(data){
        console.log(data);
        $("#t01").remove();
        $("#devBurgers").after(buildDevBurgerTable(data));
    },
    error: function(e){
        console.error(e)
    }
});
};

//Function for building Available Burgers
function buildAvailableBurgersForm(){
    function fillInAvailableBurgerInfo(data){
        var html;
        data.forEach(function(data) {
            html += `
                <form class="form-inline" id="eatMe">
                    <div class="checkbox">
                    <label><input type="hidden" value="${data.id}">${data.burger_name}</label> 
                    </div>
                    <button type="button" class="btn btn-success btn-xs" id="btnRemoveForm">Eat it Up!</button>
                </form>`
            });
            return html;
    };

    
    jQuery.ajax({
        method: 'GET',
        url: '/api/available',
        dataType: 'json',
        success: function(data){
            console.log(data);
            $("#availBurgers").after(fillInAvailableBurgerInfo(data));
        },
        error: function(e){
            console.error(e)
        }
    });
};



jQuery(document).ready(function() {
    var form = jQuery('#form');
    form.find('button').on('click', function() {
        var burgerType = form.find('textarea').val();
        var payload = {new_burgertype : burgerType};

        console.log('about to send post request', payload);

        jQuery.ajax({
            type: 'POST',
            url: '/api/new_burger',
            data: JSON.stringify(payload),//turn data into JSON string
            contentType: "application/json; charset=utf-8",
            success: function() {
                console.log('sending post request', payload);
                buildAvailableBurgersForm();
                loadDevouredBurgers();
                $('button#btnRemoveForm').click(function(){
                    alert('hello');
                    // $(this).remove();
                });
            },
            error: function(e) {
                console.error(e);
            }
        });

        //load devoured burgers
        // loadDevouredBurgers(); 

    });


    // //***********right here this one does not work.  
    // $('button#btnRemoveForm.btn.btn-success.btn-xs').click(function(){
    //     //$(this).closest('form').remove();
    //     alert('hello');
    //     // $(this).remove();
    // });


});

$(document).on('click', '#btnRemoveForm', function(){
    alert("success");
});
// $('button#btnRemoveForm.btn.btn-success.btn-xs').on("click", function(){
//     alert("success");
//   });

// jQuery(function(){
//     $('button#btnRemoveForm').click(function(){
//         alert('hello');
//         // $(this).remove();
//     });
//  });
