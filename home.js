$('#contact-submit').click(function (event) {
    event.preventDefault();
    const serialize_form = form => JSON.stringify(
        Array.from(new FormData(form).entries())
            .reduce((m, [key, value]) => Object.assign(m, { [key]: value }), {})
    );
    $.ajax({
        url: 'https://asia-south1-blrsports-all.cloudfunctions.net/send-email',
        type: "POST",
        dataType: 'json',
        data: JSON.stringify($("#contact-form").serializeArray().reduce((json, value, key) => { json[value.name] = value.value; return json; }, {})),
        contentType: 'application/json;charset=UTF-8',
        success: function (response) {
            alert(response);
        }
    });
    return false; // for good measure
});