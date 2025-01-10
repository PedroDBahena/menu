<script>
  import "./Time.css";
  import arrowUp from "../../../../images/arrowUp.svg";
  import arrowDown from "../../../../images/arrowDown.svg";
  import { createEventDispatcher } from "svelte";

  let hour = 0;
  let minutes = 0;
  let currentPeriod = "am";

  const dispatch = createEventDispatcher();

  const increaseHours = () => {
    hour = hour >= 11 ? 0 : hour + 1;
    emitTime();
  };
  const decreaseHours = () => {
    hour = hour <= 0 ? 11 : hour - 1;
    emitTime();
  };

  const increaseMinutes = () => {
    minutes = minutes >= 59 ? 0 : minutes + 1;
    emitTime();
  };
  const decreaseMinutes = () => {
    minutes = minutes === 0 ? 59 : minutes - 1;
    emitTime;
  };

  const changePeriod = (timePeriod) => (currentPeriod = timePeriod);

  function emitTime() {
    const data = {
      hour,
      minutes,
      currentPeriod
    }
    dispatch("timeEmmiter", data)
  }
</script>

<div id="time">
  <div>
    <button on:click={() => increaseHours()}>
      <img src={arrowUp} alt="" />
    </button>
    <span>{hour}</span>
    <button on:click={() => decreaseHours()}>
      <img src={arrowDown} alt="" />
    </button>
  </div>
  <span>:</span>
  <div>
    <button on:click={() => increaseMinutes()}>
      <img src={arrowUp} alt="" />
    </button>
    <span>{minutes}</span>
    <button on:click={() => decreaseMinutes()}>
      <img src={arrowDown} alt="" />
    </button>
  </div>
  <div>
    <button on:click={() => changePeriod("am")}>
      <img src={arrowUp} alt="" />
    </button>
    <span>{currentPeriod}</span>
    <button on:click={() => changePeriod("pm")}>
      <img src={arrowDown} alt="" />
    </button>
  </div>
</div>
