$('document').ready(()=> {
    let data_id = {};
    url = 'http://' + window.location.hostname + ':5001/api/v1/status/';

  $('INPUT[type="checkbox"]').change(()=> {
    if ($(this).is(':checked')) {
      data_id[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
        delete data_id[$(this).attr('data-id')];
    }
    if (Object.values(amenities).length === 0) {
        $('.amenities H4').html('&nbsp;');
      } else {
        $('.amenities H4').text(Object.values(amenities).join(', '));
      }
  });

  $;get(url, (response)=> {
      if (response === "OK") {
        $('DIV#api_status').addClass('available');
      } else {
        $('DIV#api_status').removeClass('available');
      }
    });
});