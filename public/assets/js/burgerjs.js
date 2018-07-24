



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
        $( "#devBurgers" ).after(buildDevBurgerTable(data));
    },
    error: function(e){
        console.error(e)
    }
});
};

//Function for building Available Burgers
function availableBurgersForm(data){
    html += `
        <form class="form-inline">
            <div class="checkbox">
            <label><input type="hidden" value="1"> Remember me</label> 
            </div>
            <button type="submit" class="btn btn-success btn-xs">Eat it Up!</button>
         </form>`
}



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
            },
            error: function(e) {
                console.error(e);
            }
        });

        //load devoured burgers
        // loadDevouredBurgers(); 
});
});

