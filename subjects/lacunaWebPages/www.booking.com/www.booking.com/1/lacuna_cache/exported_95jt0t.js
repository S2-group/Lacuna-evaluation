
        $.ajax({
            url: 'https://accommodations.booking.com/v1/fe/ping',
            type: 'post',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify({}),
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            }
        });
    