$('document').ready(()=> {
    let data_id = {};
  $('INPUT[type="checkbox"]').change(()=> {
    if ($(this).is(':checked')) {
      data_id[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
        delete data_id[$(this).attr('data-id')];
    }
    $('.amenities H4').text(Object.values(data_id).join(', '));
  });
});
