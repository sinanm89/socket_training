$("#open").click(function(evt) {
  evt.preventDefault();

  var host = $("#host").val();
  var port = $("#port").val();
  var uri = $("#uri").val();

  ws = new WebSocket("ws://" + host + ":" + port + uri);

  ws.onmessage = function(evt) {alert("message received: " + evt.data)};

  ws.onclose = function(evt) { alert("Connection close"); };

  ws.onopen = function(evt) { 
    $("#host").css("background", "#00ff00"); 
    $("#port").css("background", "#00ff00"); 
    $("#uri").css("background", "#00ff00");
  };
});