

// Display devoured burgers
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
                console.log(results);
                // jQuery('table').remove();
                // form.after(buildTable(results))
                
                console.log('sending post request', payload);

            },
            error: function(e) {
                console.error(e);
            }
        });
});
});


{/* <form class="devour-form button-size">
<input input type="hidden" class="burger_id" type="text" value={{this.id}}><br>
<button type="submit" class="btn btn-default">Devour it!</button>
</form> */}