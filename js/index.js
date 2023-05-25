import programData from "../assets/data/data.js";

const mainProgram = (htmlDiv, item) => {
  htmlDiv.innerHTML = `  
    <div class="card-body d-flex flex-md-column align-items-center">
    <div>
        <img
        width="60"
        height="60"
        class="position-relative"
        src="${item.icon}"
    />
    </div>
      <div class="text-md-center my-4 d-flex flex-md-column align-items-center justify-content-around">
            <h3 class="text-secondary item-name">${item.name}</h3>
            <p class="card-text h-full justify-content">
            ${item.desc}
            </p>
        </div>
      </div>
    </div>
    `;
};

window.onload = function () {
  programData.forEach(function (item) {
    let htmlDiv = document.createElement("div");
    htmlDiv.classList.add("program-card", "card", "text-white", "mb-3");
    mainProgram(htmlDiv, item);
    document.querySelector(".main-program-lists").appendChild(htmlDiv);
  });
};
