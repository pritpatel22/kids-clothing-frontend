function like(id) {
  //   var obj = document.getElementById("heart");
  if (id.innerHTML == '<i class="fas fa-heart"></i>') {
    id.innerHTML = '<i class="far fa-heart"></i>';
  } else {
    id.innerHTML = '<i class="fas fa-heart"></i>';
  }
}


    // Function to extract query parameter from URL
    function getQueryParam(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    // Get the product name from the URL
    const productName = getQueryParam('product');
    // Get the image URL from the URL
    const imageUrl = getQueryParam('image');
    // Get the price from the URL
    const price = getQueryParam('price');

    // Display the product name
    if (productName) {
        document.getElementById('productName').textContent = productName;
    }

    // Display the image
    if (imageUrl) {
        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        document.getElementById('imageContainer').appendChild(imageElement);
    }

    // Display the price
    if (price) {
        document.getElementById('priceamt').textContent = 'Rs. ' + price + '/-';
    }


    function togglePaymentDetails(selectedElementId, hiddenElementId) {
      var selectedDiv = document.getElementById(selectedElementId);
      var hiddenDiv = document.getElementById(hiddenElementId);

      if (selectedDiv) {
          selectedDiv.style.display = "block";
      }

      if (hiddenDiv) {
          hiddenDiv.style.display = "none";
      }
  }
//   document.getElementById("printButton").addEventListener("click", function() {
//     var printContent = document.getElementById("printContent").innerHTML;
//     var originalBodyContent = document.body.innerHTML;
//     document.body.innerHTML = printContent;
//     window.print();
//     document.body.innerHTML = originalBodyContent; // Restore the original content
// });
