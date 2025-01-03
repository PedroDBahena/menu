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
        fillCalendar();
    }

    function decreaseMonth() {
        currentMonth--;

        if (currentMonth < 0) {
            currentMonth = 11;
            decreaseYear();
        }

        getTotalDays();
        fillCalendar();
    }

    function increaseYear() {
        currentYear++;
        getTotalDays();
        fillCalendar();
    }

    function decreaseYear() {
        currentYear--;
        getTotalDays();
        fillCalendar();
    }

    function getTotalDays() {
        currentDays = new Date(currentYear, currentMonth + 1, 0).getDate();
    }

    function fillCalendar() {
        daysOfCalendar = daysOfWeek.map((day) => [day, []]);

        console.warn('daysOfCalendar', daysOfCalendar);
        
        for (let i = 1; i <= currentDays; i++) {
            const dayOfWeek = new Date(currentYear, currentMonth, i)?.getDay();

            daysOfCalendar[dayOfWeek][1]?.push(i);
        }
        
        daysOfCalendar = completeDays(daysOfCalendar);
    }

    function completeDays(days) {
        days.forEach((item, index) => {
            const length = item[1]?.length;
            if (length === 4) {
                item[1]?.unshift(getDaysByWeekAndMonth(index, true));
                item[1]?.push(getDaysByWeekAndMonth(index, false));
            } else if (length === 5) {
                item[1]?.push(getDaysByWeekAndMonth(index, false));
            }
        });

        return days;
    }

    function getDaysByWeekAndMonth(dayIndex, isPreviousMonth) {
        let month = currentMonth;
        let year = currentYear;
        let initialDay = 1;

        if (isPreviousMonth) {
            month = isPreviousMonth
                ? month === 0
                    ? 12
                    : month - 1
                : month + 1;

            if(month === 12) {
                year = currentYear - 1;
                initialDay = 0;
            }
        } else {
            month = month + 1;
        }

        let date = new Date(year, month, initialDay);

        while (date.getDay() !== dayIndex) {
            if(isPreviousMonth) {
                date.setDate(date.getDate() - 1);
            } else {
                date.setDate(date.getDate() + 1);
            }
            
        }

        while (date.getMonth() === currentMonth) {
            if(isPreviousMonth) {
                date.setDate(date.getDate() - 7);
            } else {
                date.setDate(date.getDate() + 7);
            }
        }

        return date?.getDate();
    }

    onMount(() => {
        getTotalDays();
        fillCalendar();
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
        {#each daysOfCalendar as [day, numbers], index}
            <div class="day-container">
                {#each numbers as number}
                    <span>{number}</span>
                {/each}
            </div>
        {/each}
    </div>
</div>
