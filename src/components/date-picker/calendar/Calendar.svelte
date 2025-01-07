<script>
  import "./Calendar.css";
  import leftSvgrepo from "../../../images/leftSvgrepo.svg";
  import leftArrow from "../../../images/leftArrow.svg";
  import rightArrow from "../../../images/rightArrow.svg";
  import rightSvgrepo from "../../../images/rightSvgrepo.svg";
  import { onMount, tick } from "svelte";
  import { json } from "@sveltejs/kit";

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
      increaseYear();
    }

    generateCalendar();
  }

  function decreaseMonth() {
    currentMonth--;

    if (currentMonth < 0) {
      currentMonth = 11;
      decreaseYear();
    }

    generateCalendar();
  }

  function increaseYear() {
    currentYear++;
    generateCalendar();
  }

  function decreaseYear() {
    currentYear--;
    generateCalendar();
  }

  function getTotalDays() {
    currentDays = new Date(currentYear, currentMonth + 1, 0).getDate();
  }

  function generateCalendar() {
    getTotalDays();
    daysByWeek = fillWeeks();
    console.warn(daysByWeek);
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
    month = month < 0 ? 12 : month;
    let year = month == 12 ? currentYear - 1 : currentYear;

    const initialDay = new Date(year, month, adjustedDay);

    const days = [];

    if (getPrevMonthDays) {
      for (let i = count - 1; i >= 0; i--) {
        const day = new Date(
          year,
          month < 0 ? 11 : month,
          initialDay?.getDate() - i
        );
        days?.push(day?.getDate());
      }
    } else {
      for (let i = 0; i < count; i++) {
        const day = new Date(
          year,
          month < 0 ? 11 : month,
          initialDay?.getDate() + i
        );
        days?.push(day?.getDate());
      }
    }

    return days;
  }

  function fillWeeks() {
    let days = [[], [], [], [], [], []];
    const monthRange = getCurrentMonthRange();

    // DOCS: Obtiene los últimos días del mes y los agrega a la primer semana del mes actual
    days[0].push(
      ...generatePreviousOrNextDays(monthRange.firstDay, true)
    );

    const firstDays = days[0]?.length;

    let countWeeks = 1;

    for (let i = 1; i <= currentDays; i++) {
      if (i <= 7 - firstDays) {
        // DOCS: Guarda los días de la primer semana, incluyendo los últimos días del mes anterior
        days[0]?.push(i);
      } else {
        // DOCS: Guarda el resto de los días por semana
        countWeeks =
          days[countWeeks]?.length === 7 ? countWeeks + 1 : countWeeks;

        days[countWeeks]?.push(i);
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

    // DOCS: Acompleta las semanas incompletas
    for (let i = 0; i < incompleteWeeks?.length; i++) {
      const index = incompleteWeeks[i]?.index;
      const missingDays = 7 - days[index]?.length;

      days[index].push(...nextMonthDays.slice(0, missingDays));
      nextMonthDays?.splice(0, missingDays);
    }

    return days;
  }

  onMount(async () => {
    getTotalDays();
    generateCalendar();
  });
</script>

<div id="calendar">
  <div class="header">
    <button on:click={decreaseYear}>
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
    <button on:click={increaseYear}>
      <img src={rightSvgrepo} alt="" />
    </button>
  </div>

  <div class="week">
    {#each daysOfWeek as day}
      <p>{day}</p>
    {/each}
  </div>

  <div class="days-of-week">
    {#each daysByWeek as week}
      <div class="week">
        {#each week as day}
          <span>{day}</span>
        {/each}
      </div>
    {/each}
  </div>
</div>
