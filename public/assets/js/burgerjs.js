

jQuery(document).ready(function() {
    var form = jQuery('#form');
    form.find('button').on('click', function() {
        var burgerType = form.find('textarea').val();
        console.log(burgerType);

        jQuery.ajax({
            method: 'GET',
            url: '/api/burger_controller',
            dataType: 'json'
            // success: function(data) {
            //     console.log('checking ajax');
            //     console.log(data);

            // }

          }).then(function(data) {console.log('data'); 
          console.log(data);
          return data;
        });

        // jQuery.ajax({
        //     type: 'POST',
        //     url: '/api/occupancies',
        //     dataType: 'json',
        //     data: locations,
        //     contentType: "application/json; charset=utf-8",
        //     success: function(results) {
        //         // console.log(results);
        //         jQuery('table').remove();
        //         form.after(buildTable(results))
        //     },
        //     error: function(e) {
        //         console.error(e);
        //     }
        // })
    });
});

