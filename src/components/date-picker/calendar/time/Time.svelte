<script>
  import "./Time.css";
  import arrowUp from "../../../../images/arrowUp.svg";
  import arrowDown from "../../../../images/arrowDown.svg";

  let hour = 0;
  let minutes = 0;

  const increaseHours = () => hour < 12 ? hour++ : hour;
  const increaseMinutes = () => minutes < 12 ? minutes++ : minutes;
  const decreaseHours = () => hour === 0 ? hour : hour--;
  const decreaseMinutes = () => minutes === 0 ? minutes : minutes--;
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
    <button>
      <img src={arrowUp} alt="" />
    </button>
    <span>am</span>
    <button>
      <img src={arrowDown} alt="" />
    </button>
  </div>
</div>
