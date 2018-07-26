



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
                    <label><input type="hidden" value="${data.id}" name="burger">${data.burger_name}</label> 
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
            },
            error: function(e) {
                console.error(e);
            }
        }); 

    });

});

//Function that Devours the Burgers and Puts them into the Devoured List
$(document).on('click', '#btnRemoveForm', function(){
    var SQLid = $(this).closest("form.form-inline").find("input[name='burger']").val();
    alert(SQLid);
    $(this).closest("form.form-inline").remove();
    var payload = {burgerSQLID : SQLid};

    jQuery.ajax({
        type: 'POST',
        url: '/api/devour_burger',
        data: JSON.stringify(payload),//turn data into JSON string
        contentType: "application/json; charset=utf-8",
        success: function() {
            console.log('sending post request', payload);
            loadDevouredBurgers();
        },
        error: function(e) {
            console.error(e);
        }
    });
});
