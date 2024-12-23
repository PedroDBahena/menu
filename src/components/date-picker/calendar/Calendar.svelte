<script>
    import "./Calendar.css";
    import leftSvgrepo from "../../../images/leftSvgrepo.svg";
    import leftArrow from "../../../images/leftArrow.svg";
    import rightArrow from "../../../images/rightArrow.svg";
    import rightSvgrepo from "../../../images/rightSvgrepo.svg";
    import { onMount } from "svelte";

    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();
    let currentDays = 0;
    let daysOfCalendar = Array(7)
        .fill(null)
        .map(() => []);

    export let months;
    export let daysOfWeek;

    function increaseMonth() {
        currentMonth++;

        if (currentMonth > 11) {
            currentMonth = 0;
            increaseYear();
        }

        getTotalDays();
    }

    function decreaseMonth() {
        currentMonth--;

        if (currentMonth < 0) {
            currentMonth = 11;
            decreaseYear();
        }

        getTotalDays();
    }

    function increaseYear() {
        currentYear++;
        getTotalDays();
    }

    function decreaseYear() {
        currentYear--;
        getTotalDays();
    }

    function getTotalDays() {
        currentDays = new Date(currentYear, currentMonth + 1, 0).getDate();
    }

    function fillCalendar() {
        for (let i = 1; i <= currentDays; i++) {
            const dayOfWeek = new Date(currentYear, currentMonth, i)?.getDay();

            daysOfCalendar[dayOfWeek].push(i);
        }
    }

    onMount(() => {
        getTotalDays();
        daysOfCalendar = daysOfWeek.map((day) => [day, []]);
        fillCalendar();
        console.warn(daysOfCalendar);
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

        {#each daysOfCalendar as [day, empty, ...days], index}
            <div class="day-container">
                {#each days as dayNumber}
                    <span>{dayNumber}</span>
                {/each}
            </div>
        {/each}
    </div>
</div>
