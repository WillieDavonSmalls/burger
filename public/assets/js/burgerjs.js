

jQuery(document).ready(function() {
    var form = jQuery('#form');
    form.find('button').on('click', function() {
        var burgerType = form.find('textarea').val();
        console.log(burgerType);

        $.ajax({
            method: 'GET',
            url: '/api/burger_controller',
            success: function(data) {
              console.log(data);
            //   res.send(data);
            }
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

// Make sure we wait to attach our handlers until the DOM is fully loaded.
// $(function() {
//     $(".change-sleep").on("click", function(event) {
//       var id = $(this).data("id");
//       var newSleep = $(this).data("newsleep");
  
//       var newSleepState = {
//         sleepy: newSleep
//       };