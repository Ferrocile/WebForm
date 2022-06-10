$(document).ready(function () {
    $(function () {
        $.ajax({
            url: "https://restcountries.com/v3.1/all",
            contentType: "application/json",
            success: function (response) {
                var r = '<option value="-1">Select a Region</option>';
                $.each(response, function (index, val) {
                    r += '<option value="' + val.region + '">' + val.region + '</option>';
                });
                $('#regionDropdown').append(r);
            },
            error: function (error) {
                console.log(error)
            }
        });
    });

    $('#submitBtn').click(function () {
        $('#textarea').prepend('Personal Information:');
        $('#display_info').append('<p>First Name: ' + $('#firstName').val() + '</p>');
        $('#display_info').append('<p>Last Name: ' + $('#lastName').val() + '</p>');
        $('#display_info').append('<p>Email: ' + $('#email').val() + '</p>');
        $('#display_info').append('<p>Region: ' + $('#regionDropdown').val() + '</p>');
        $('#display_info').append('<p>Country: ' + $('#countryDropdown').val() + '</p>');
    });

});
