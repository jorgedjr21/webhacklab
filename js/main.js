$(document).ready(function(){
    
    $.ajax({
        url:'https://api.thingspeak.com/channels/282403/feeds.json?api_key=UTNOOV9RD40C73SZ&results=20',
        method:'GET',
        success: function(result){
            var divdados = $("#dados1");
            var table = $("table");
            var tbody = $("tbody");
            table.append("<thead><tr><th>#</th><th>"+result.channel.field1+"</th><th>"+result.channel.field2+"</th></tr></thead>")
            divdados.append("<p><strong>Nome: </strong> "+result.channel.name+"</p>");
            divdados.append("<p><strong>Dados recebidos: </strong>"+result.feeds.length+"</p>");
            for(var i = 0; i < result.feeds.length; i++){
                tbody.append("<tr><td>"+(i+1)+"</td><td>"+result.feeds[i].field1+"</td><td>"+result.feeds[i].field2+"</td></tr>");
            }
            console.log(result);
        },
        error: function(result){
            console.log('error',result);
        }
    })
});