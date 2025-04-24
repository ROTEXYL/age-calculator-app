document.addEventListener('DOMContentLoaded', () => {
  const day = document.getElementById('day');
  const month = document.getElementById('month');
  const year = document.getElementById('year');
  const arrowIcon = document.getElementById('arrowIcon');

  const errorDay = document.getElementById('error-day');
  const errorMonth = document.getElementById('error-month');
  const errorYear = document.getElementById('error-year');

  const yearNumberMobile = document.querySelector('.flex.gap-3.ml-5.justify-start.items-start.md\\:mb-0 div:nth-child(2)');
  const monthNumberMobile = document.querySelector('.flex.gap-3.ml-5.justify-start.items-start.md\\:ml-5 div:nth-child(2)');
  const dayNumberMobile = document.querySelector('.flex.ml-5.justify-start.items-start.gap-2 div:nth-child(2)');
  const yearNumberDesktop = document.querySelector('.hidden.md\\:inline-block.text-7xl');
  const monthNumberDesktop = document.querySelectorAll('.hidden.md\\:inline-block.text-7xl')[1];
  const dayNumberDesktop = document.querySelectorAll('.hidden.md\\:inline-block.text-7xl')[2];

  const dataDate = new Date();
  let hasError = false;

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
    hasError = false;

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
    } else if (monthVal < 1 || monthVal > 12) {
      e.preventDefault();
      errorMonth.innerText = 'Must be a valid Month';
      month.style.borderColor = 'red';
      document.getElementById('month-label').classList.add('text-red-400');
      hasError = true;
    } else if (dayVal < 1 || dayVal > 31) {
      e.preventDefault();
      errorDay.innerText = 'Must be a valid Day';
      day.style.borderColor = 'red';
      document.getElementById('day-label').classList.add('text-red-400');
      hasError = true;
    } else {
      const daysInMonth = new Date(yearVal, monthVal, 0).getDate();
      if (dayVal > daysInMonth) {
        e.preventDefault();
        errorDay.innerText = 'Must be a valid date';
        day.style.borderColor = 'red';
        document.getElementById('day-label').classList.add('text-red-400');
        hasError = true;
      }
    }

    if (!hasError){
      calculaIdade(yearVal, monthVal, dayVal);
    }
  });

  function calculaIdade(year, month, day) {
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
    
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
    
    if (days < 0) {
        months--;
        const lastDayOfLastMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        days += lastDayOfLastMonth;
    }
    
    if (months < 0) {
        years--;
        months += 12;
    }
    
    yearNumberMobile.textContent = years;
    monthNumberMobile.textContent = months;
    dayNumberMobile.textContent = days;
    
    yearNumberDesktop.textContent = years;
    monthNumberDesktop.textContent = months;
    dayNumberDesktop.textContent = days;
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