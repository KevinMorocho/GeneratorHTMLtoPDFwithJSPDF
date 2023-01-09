const { jsPDF } = window.jspdf;
var pdf = new jsPDF({
  orientation: "p",
  unit: "mm",
  format: "a4",
  compress: true
});
// source can be HTML-formatted string, or a reference
// to an actual DOM element from which the text will be scraped.
var elementHTML = document.querySelector("#ViewPdf");

pdf.html(elementHTML, {
  callback: function (pdf) {
    pdf.setFont("Lato-Regular", "normal");
    // Save the PDF
    pdf.save(
             ".pdf"//Colocar el nombre del archivo a guardar
    );
  },
  margin: [10, 10, 10, 10],
  x: 0,
  y: 0,
  width: 190, //target width in the PDF document
  windowWidth: 675 //window width in CSS pixels
});

//USAR LA SIGUIENTE CDN
{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.2.1/html2canvas.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js" integrity="sha512-qZvrmS2ekKPF2mSznTQsxqPgnpkI4DNTlrdUmTzrDgektczlKNRRhy5X5AAOnx5S09ydFYWWNSfcEqDTTHgtNA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script> */}
