$(document).ready(function() {
// write your code here
    $.getJSON("data.json", function(data){
        var hotspot_data = '';

        $.each(data, function(key,value){
            var link_it = "<a href= 'https://www.google.com/maps?q=" + value.location + "'>" + 'Link' + '</a>';
            hotspot_data += '<tr>';
            hotspot_data += '<td>' + value.name + '</td>';
            hotspot_data += '<td>' + value.description + '</td>';
            //hotspot_data += '<td>' + value.location + '</td>';
            hotspot_data += '<td>' + link_it + '</td>';
            hotspot_data += '</tr>';
        });
    $('tbody').append(hotspot_data);
    
    });
});




