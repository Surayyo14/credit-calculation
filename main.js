function hisobla() {
  var miqdor = parseFloat(document.getElementById("miqdor").value);
  var foiz = parseFloat(document.getElementById("foiz").value) / 100 / 12;
  var yillar = parseFloat(document.getElementById("yillar").value) * 12;
  var tolov =
    (miqdor * Math.pow(1 + foiz, yillar) * foiz) /
    (Math.pow(1 + foiz, yillar) - 1);

  if (isFinite(tolov)) {
    document.getElementById("tolov").innerHTML = tolov.toFixed(2);
    document.getElementById("jami").innerHTML = (tolov * yillar).toFixed(2);
    chizma(miqdor, foiz, tolov, yillar);
  } else {
    document.getElementById("tolov").innerHTML = "";
    document.getElementById("jami").innerHTML = "";
    chizma();
  }
}

function chizma(miqdor, foiz, tolov, yillar) {
  var grafik = document.getElementById("grafik");
  var g = grafik.getContext("2d");
  g.clearRect(0, 0, grafik.width, grafik.height);

  if (!arguments.length) return;

  g.moveTo(0, grafik.height);
  g.lineTo(grafik.width, 0);
  g.fillStyle = "#f88";
  g.fill();
}
