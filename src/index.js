var translateInput = document.querySelector("#input-translate");
var translateBtn = document.querySelector("#btn-translate");
var translateTxtarea = document.querySelector("#textarea-translate");

var api = `https://api.funtranslations.com/translate/minion.json`;

function clickHandler() {
  const inputVal = translateInput.value;
  const queryParams = `?text=${inputVal}`;
  const url = api + queryParams;

  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      if (res?.success) {
        translateTxtarea.innerText = res.contents.translated;
      }
      if (res?.error) {
        alert(res?.error?.message);
      }
    })
    .catch((error) => console.log(error));
}

translateBtn.addEventListener("click", clickHandler);
