<script>
    import "./Calendar.css";
    import leftSvgrepo from "../../../images/leftSvgrepo.svg";
    import leftArrow from "../../../images/leftArrow.svg";
    import rightArrow from "../../../images/rightArrow.svg";
    import rightSvgrepo from "../../../images/rightSvgrepo.svg";
    import { onMount } from "svelte";

    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();

    export let months;
    export let daysOfWeek;

    function increaseMonth() {
        currentMonth++;

        if (currentMonth > 11) {
            currentMonth = 0;
            increaseYear();
        }
    }

    function decreaseMonth() {
        currentMonth--;

        if (currentMonth < 0) {
            currentMonth = 11;
            decreaseYear();
        }
    }

    function increaseYear() {
        currentYear++;
    }

    function decreaseYear() {
        currentYear--;
    }
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

    <div class="days-of-week">
        {#each daysOfWeek as day}
            <p>{day}</p>
        {/each}
        <p></p>
    </div>
</div>
