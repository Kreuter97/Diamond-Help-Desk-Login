$('form').submit(function() {
    // post the form data to the spreadsheet
    $.post('https://script.google.com/macros/s/AKfycbyOyFG6fPlMOZi6Biv8Df9qIY46_DYWK4YiPbR8hl-nfb7omMs/exe', $('form').serialize());
    
    // reset the value on the input
    $('input[type=text]').val('');
    return false;
});
