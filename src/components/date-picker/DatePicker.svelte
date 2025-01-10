<script>
  import "./DatePicker.css";
  import calendarIcon from ".././../../src/images/calendarIcon.svg";
  import Calendar from "./calendar/Calendar.svelte";

  let isShowCalendar = false;

  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const daysOfWeek = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

  function showCalendar() {
    isShowCalendar = !isShowCalendar;
  }

  function getSelectedDate(date) {
    console.warn("Date", date?.detail);
  }
</script>

<div id="datePicker">
  <label>Select date</label>
  <div class="input" on:click={showCalendar}>
    <input type="date" placeholder="dd/mm/aa" />
    <img src={calendarIcon} alt="Menu Icon" />
  </div>
  {#if isShowCalendar}
    <div class="calendar">
      <Calendar {months} {daysOfWeek} on:dateEmmiter={getSelectedDate}></Calendar>
    </div>
  {/if}
</div>
