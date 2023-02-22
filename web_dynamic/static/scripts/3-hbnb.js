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

  $.get(url, (response)=> {
      if (response === "OK") {
        $('DIV#api_status').addClass('available');
      } else {
        $('DIV#api_status').removeClass('available');
      }
    });
  
  $.ajax({
    url: api + ':5001/api/v1/places_search/',
    type: 'POST',
    data: '{}',
    contentType: 'application/json',
    dataType: 'json',
    success: function (data) {
      $('SECTION.places').append(data.map(place => {
        return `<ARTICLE>
                    <DIV class="title">
                        <H2>${place.name}</H2>
                        <DIV class="price_by_night">
                          ${place.price_by_night}
                        </DIV>
                    </DIV>
                    <DIV class="information">
                        <DIV class="max_guest">
                          <I class="fa fa-users fa-3x" aria-hidden="true"></I>
                          </BR>
                          ${place.max_guest} Guests
                        </DIV>
                        <DIV class="number_rooms">
                          <I class="fa fa-bed fa-3x" aria-hidden="true"></I>
                          </BR>
                          ${place.number_rooms} Bedrooms
                        </DIV>
                        <DIV class="number_bathrooms">
                          <I class="fa fa-bath fa-3x" aria-hidden="true"></I>
                          </BR>
                          ${place.number_bathrooms} Bathrooms
                        </DIV>
                    </DIV>
                    <DIV class="description">
                      ${place.description}
                    </DIV>
                </ARTICLE>`;
      }));
    }
  });
});