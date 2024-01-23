const currentDate = document.querySelector(".current-date"),
  daysTag = document.querySelector(".days"),
  prevNextIcon = document.querySelectorAll(".icons span");

let date = new Date(),
  currYear = date.getFullYear(),
  currMonth = date.getMonth();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const renderCalendar = () => {
  let lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
  let liTag = "";

  for (let i = 1; i <= lastDateOfMonth; i++) {
    liTag += `<li>${i}</li>`;
  }

  currentDate.innerText = `${months[currMonth]} ${currYear}`;
  daysTag.innerHTML = liTag;
};

renderCalendar();

prevNextIcon.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    if (icon.id === "prev") {
      currYear = currMonth === 0 ? currYear - 1 : currYear;
      currMonth = currMonth === 0 ? 11 : currMonth - 1;
    }
    if (icon.id === "next") {
      currYear = currMonth === 11 ? currYear + 1 : currYear;
      currMonth = currMonth === 11 ? 0 : currMonth + 1;
    }
    renderCalendar();
  });
});
