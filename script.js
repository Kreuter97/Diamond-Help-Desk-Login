$('form').submit(function() {
    // post the form data to the spreadsheet
    $.post('https://script.google.com/macros/s/AKfycbyYcsejjBjLmC_go7O_66pgNySO2i0eK8wGKcGBW6y-zY7Szoo/exec', $('form').serialize());
    
    // reset the value on the input
    $('input[type=text]').val('');
    return false;
});
