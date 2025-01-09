<script>
  import "./Calendar.css";
  import leftSvgrepo from "../../../images/leftSvgrepo.svg";
  import leftArrow from "../../../images/leftArrow.svg";
  import rightArrow from "../../../images/rightArrow.svg";
  import rightSvgrepo from "../../../images/rightSvgrepo.svg";
  import { onMount } from "svelte";
  import Time from "./time/Time.svelte";

  let currentMonth = new Date().getMonth();
  let currentYear = new Date().getFullYear();
  let currentDays = 0;
  let daysByWeek = [[], [], [], [], [], []];

  export let months;
  export let daysOfWeek;

  function increaseMonth() {
    currentMonth++;

    if (currentMonth > 11) {
      currentMonth = 0;
      changeYear(true);
    }

    generateCalendar();
  }

  function decreaseMonth() {
    currentMonth--;

    if (currentMonth < 0) {
      currentMonth = 11;
      changeYear(false);
    }

    generateCalendar();
  }

  function changeYear(isNext) {
    currentYear = isNext ? currentYear + 1 : currentYear - 1;

    generateCalendar();
  }

  function getTotalDays() {
    currentDays = new Date(currentYear, currentMonth + 1, 0).getDate();
  }

  function generateCalendar() {
    getTotalDays();
    daysByWeek = fillWeeks();
  }

  function getCurrentMonthRange() {
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);

    return {
      firstDay: firstDay?.getDay(),
      lastDay: lastDay?.getDay(),
    };
  }

  function generatePreviousOrNextDays(count, getPrevMonthDays) {
    const adjustedDay = getPrevMonthDays ? 0 : 1;
    let month = getPrevMonthDays ? currentMonth - 1 : currentMonth;
    month = month < 0 ? 12 : month + 1;
    let year = month == 12 ? currentYear - 1 : currentYear;

    const initialDay = new Date(year, month, adjustedDay);

    const days = [];

    if (getPrevMonthDays) {
      for (let i = count - 1; i >= 0; i--) {
        const day = new Date(initialDay);
        day.setDate(initialDay.getDate() - i);
        days?.push(day);
      }
    } else {
      for (let i = 0; i < count; i++) {
        const day = new Date(year, month, initialDay?.getDate() + i);
        days?.push(day);
      }
    }

    return days;
  }

  function fillWeeks() {
    let days = [[], [], [], [], [], []];

    const monthRange = getCurrentMonthRange();

    // DOCS: Obtiene los últimos días del mes anterior y los agrega a la primer semana del mes actual
    const previousOrNextDaysrevious = generatePreviousOrNextDays(
      monthRange.firstDay,
      true
    );

    days[0].push(
      ...previousOrNextDaysrevious.map((day) => ({
        day,
        isDisabled: true,
        isSelected: false,
      }))
    );

    const firstDays = days[0]?.length;

    let countWeeks = 1;

    // DOCS: Itera los días del mes actual
    for (let i = 1; i <= currentDays; i++) {
      if (i <= 7 - firstDays) {
        // DOCS: Guarda los días de la primer semana, incluyendo los últimos días del mes anterior
        days[0]?.push({
          day: new Date(currentYear, currentMonth, i),
          isDisabled: false,
          isSelected: false,
        });
      } else {
        // DOCS: Guarda el resto de los días por semana
        countWeeks =
          days[countWeeks]?.length === 7 ? countWeeks + 1 : countWeeks;

        days[countWeeks]?.push({
          day: new Date(currentYear, currentMonth, i),
          isDisabled: false,
          isSelected: false,
        });
      }
    }

    // DOCS: Obtiene los arreglos de las semanas incompletas
    let incompleteWeeks = days
      .map((subarray, index) =>
        subarray.length !== 7 ? { index, subarray } : null
      )
      .filter((item) => item !== null);

    // DOSC: Calcular cuántos elementos se necesitan para llenar los subarreglos
    let neededDays = incompleteWeeks.reduce(
      (total, week) =>
        week?.subarray.length !== 7
          ? total + (7 - week?.subarray.length)
          : total,
      0
    );

    // DOCS: Obtiene los primeros días del mes siguiente
    const nextMonthDays = generatePreviousOrNextDays(neededDays, false);

    // DOCS: Llena las semanas incompletas
    for (let i = 0; i < incompleteWeeks?.length; i++) {
      const index = incompleteWeeks[i]?.index;
      const missingDays = 7 - days[index]?.length;

      const newDays = nextMonthDays.slice(0, missingDays);

      days[index].push(
        ...newDays.map((day) => ({ day, isDisabled: true, isSelected: false }))
      );

      nextMonthDays?.splice(0, missingDays);
    }

    return days;
  }

  function isCurrentDate(date) {
    const currentDate = new Date();

    return (
      date?.getDate() === currentDate?.getDate() &&
      date?.getMonth() === currentDate?.getMonth() &&
      date?.getFullYear() === currentDate?.getFullYear()
    );
  }

  function setDate(date, index, subIndex) {
    generateCalendar();
    daysByWeek[index][subIndex] = {
      day: date,
      isDisabled: false,
      isSelected: true,
    };
  }

  onMount(async () => {
    getTotalDays();
    generateCalendar();
  });
</script>

<div id="calendar">
  <div class="header">
    <button on:click={() => changeYear(false)}>
      <img src={leftSvgrepo} alt="" />
    </button>

    <button on:click={decreaseMonth}>
      <img src={leftArrow} alt="" />
    </button>

    <p>{months[currentMonth]}</p>
    <p>{currentYear}</p>

    <button on:click={increaseMonth}>
      <img src={rightArrow} alt="" />
    </button>
    <button on:click={() => changeYear(true)}>
      <img src={rightSvgrepo} alt="" />
    </button>
  </div>

  <div class="week">
    {#each daysOfWeek as day}
      <p>{day}</p>
    {/each}
  </div>

  <div class="days-of-week">
    {#each daysByWeek as week, index}
      <div class="week">
        {#each week as { day, isDisabled, isSelected }, subIndex}
          <span
            class={`${isDisabled && !isCurrentDate(day) ? "disabled" : ""} ${isCurrentDate(day) ? "current-date" : ""} ${isSelected ? "selected" : ""}`}
            on:click={isDisabled ? null : () => setDate(day, index, subIndex)}
            >{day?.getDate()}</span
          >
        {/each}
      </div>
    {/each}
  </div>

  <Time></Time>

  <div class="buttons">
    <button class="btn-cancel">Cancelar</button>
    <button class="btn-accept">Aceptar</button>
  </div>
</div>
