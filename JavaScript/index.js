function updateTime() {
  let accraElement = document.querySelector("#accra");
  if (accraElement) {
    let accraDateElement = accraElement.querySelector(".date");
    let accraTimeElement = accraElement.querySelector(".time");
    let accraTime = moment().tz("Africa/Accra");

    accraDateElement.innerHTML = accraTime.format("MMMM Do YYYY");
    accraTimeElement.innerHTML = accraTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let chicagoElement = document.querySelector("#chicago");
  if (chicagoElement) {
    let chicagoDateElement = chicagoElement.querySelector(".date");
    let chicagoTimeElement = chicagoElement.querySelector(".time");
    let chicagoTime = moment().tz("America/Chicago");

    chicagoDateElement.innerHTML = chicagoTime.format("MMMM Do YYYY");
    chicagoTimeElement.innerHTML = chicagoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
updateTime();
setInterval(updateTime, 1000);
