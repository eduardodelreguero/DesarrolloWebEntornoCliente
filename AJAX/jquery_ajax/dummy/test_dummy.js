$(document).ready(function() {
  loading = $("#spinner").hide();
  $("button").click(() => {
    $.ajax({
      type: "GET",
      dataType: "json",
      url: "https://n161.tech/api/dummyapi/user",
      beforeStart: () => {
        loading.show();
      },
      success: data => {
        alert("success");
        // en data tenemos lo recibido
        console.info(data);
        loadData(data);
      },
      complete: () => {
        loading.hide();
      },
      error: () => {
        alert("error");
      },
      always: () => {
        alert("complete");]
      }
    });

    // Perform other work here ..
  });
});

function loadData(response) {
  txt = "";
  $.each(response.data, (i, item) => {
    txt += item.firstName + " - ";
  });

  if (response) $("#data").html(txt);
}
