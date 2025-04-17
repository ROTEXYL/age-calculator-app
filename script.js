document.addEventListener('DOMContentLoaded', () => {
  const day = document.getElementById('day');
  const month = document.getElementById('month');
  const year = document.getElementById('year');
  const arrowIcon = document.getElementById('arrowIcon');

  const errorDay = document.getElementById('error-day');
  const errorMonth = document.getElementById('error-month');
  const errorYear = document.getElementById('error-year');

  const yearOutput = document.getElementById('year-output');
  const monthOutput = document.getElementById('month-output');
  const dayOutput = document.getElementById('day-output');

  const dataDate = new Date();
  function resetBorders() {
    day.style.borderColor = '';
    month.style.borderColor = '';
    year.style.borderColor = '';

    document.getElementById('day-label').classList.remove('text-red-400');
    document.getElementById('month-label').classList.remove('text-red-400');
    document.getElementById('year-label').classList.remove('text-red-400');
}

day.addEventListener('input', () => {
    resetBorders();
    errorDay.innerText = '';
    focusNext();
});

month.addEventListener('input', () => {
    resetBorders();
    errorMonth.innerText = '';
    focusNext();
});

year.addEventListener('input', () => {
    resetBorders();
    errorYear.innerText = '';
});

  arrowIcon.addEventListener('click', (e) => {
    errorDay.innerText = '';
    errorMonth.innerText = '';
    errorYear.innerText = '';

    const dayVal = parseInt(day.value);
    const monthVal = parseInt(month.value);
    const yearVal = parseInt(year.value);

    if (!day.value || !month.value || !year.value) {
      e.preventDefault();
      if (!day.value){
        errorDay.innerText = 'This field is required';
        day.style.borderColor = 'red';
        document.getElementById('day-label').classList.add('text-red-400');
        hasError = true;
      };
      if (!month.value){
        errorMonth.innerText = 'This field is required';
        month.style.borderColor = 'red';
        document.getElementById('month-label').classList.add('text-red-400');
        hasError = true;
      };
      if (!year.value){
        errorYear.innerText = 'This field is required';
        year.style.borderColor = 'red';
         document.getElementById('year-label').classList.add('text-red-400');
        hasError = true;
      };
    } else if (yearVal > dataDate.getFullYear()) {
      e.preventDefault();
      errorYear.innerText = "Must be in the past";
      year.style.borderColor = 'red';
      document.getElementById('year-label').classList.add('text-red-400');
      hasError = true;
    } if (monthVal > 12) {
      e.preventDefault();
      errorMonth.innerText = 'Must be a valid Month';
      month.style.borderColor = 'red';
      document.getElementById('month-label').classList.add('text-red-400');
      hasError = true;
    } if (dayVal > 31) {
      e.preventDefault();
      errorDay.innerText = 'Must be a valid Day';
      day.style.borderColor = 'red';
      document.getElementById('day-label').classList.add('text-red-400');
      hasError = true;
    } if (!hasError){
      calculaIdade(yearVal, monthVal, dayVal);
    }
  });

  function calculaIdade(year, month, day) {
    if (month > (dataDate.getMonth() + 1)) {
      yearOutput.textContent = dataDate.getFullYear() - year - 1;
    } else if (month === (dataDate.getMonth() + 1) && day > dataDate.getDate()) {
      yearOutput.textContent = dataDate.getFullYear() - year - 1;
    } else {
      yearOutput.textContent = dataDate.getFullYear() - year;
    }

    if (month > (dataDate.getMonth() + 1)) {
      monthOutput.textContent = 12 + ((dataDate.getMonth() + 1) - month);
    } else {
      monthOutput.textContent = (dataDate.getMonth() + 1) - month;
    }

    if (day > dataDate.getDate() && month % 2 !== 0 || (dataDate.getMonth() + 1) == 8) {
      dayOutput.textContent = 31 - (day - dataDate.getDate());
    } else if (day < dataDate.getDate() && month % 2 !== 0 || (dataDate.getMonth() + 1) == 8) {
      dayOutput.textContent = 31 + (day - dataDate.getDate());
    } else if (day > dataDate.getDate() && month % 2 == 0 && (dataDate.getMonth() + 1) !== 8) {
      dayOutput.textContent = 30 - (day - dataDate.getDate());
    } else if (day < dataDate.getDate() && month % 2 == 0 && (dataDate.getMonth() + 1) !== 8) {
      dayOutput.textContent = - (day - dataDate.getDate());
    }
  }

  function focusNext() {
    if (day.value.length === day.maxLength) {
      month.focus();
    }

    if (month.value.length === month.maxLength) {
      year.focus();
    }
  }
});