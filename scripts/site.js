function ClearForm() {
  document.getElementById("contactform").reset();
}

function hidePTags() {
  let ptags = document.getElementsByTagName("p");
  for (let item of ptags) {
    item.style.display = "none";
  }
}

$("#jqueryBtn").click(function () {
  $("p").hide();
});
