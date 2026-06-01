//Event setup using the .on() method
$('p').on('click', function() {
    document.getElementById('par').innerHTML = "This has now changed on click.";
});

$('p').hide('slow');

$('p').show('normal');