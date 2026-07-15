function showMessage() {
    const msg = document.getElementById("topMessage");

    msg.style.top = "20px";

    setTimeout(() => {
        msg.style.top = "-60px";
    }, 3000);
}
