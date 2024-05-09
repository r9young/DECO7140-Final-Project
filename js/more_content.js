
function toggleContent() {
    var moreContent = document.getElementById("more-content");
    var btnText = document.querySelector(".read-more-btn");

    if (moreContent.style.display === "none") {
        moreContent.style.display = "block";
        btnText.innerText = "Read Less";
    } else {
        moreContent.style.display = "none";
        btnText.innerText = "Read More";
    }
}
