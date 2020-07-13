<script>
  import Stopwatch from "../components/Stopwatch.svelte";
  import StopwatchList from "../components/StopwatchList.svelte";
  import ColorPicker from "../components/ColorPicker.svelte";
  export let name;
</script>

<style>
  main {
	padding: 1em;
	max-width: 1000px;
	margin: 0 auto;
  }

  header {
	  display: flex;
  }

  h1 {
	font-family: "Poppins", sans-serif;
    color: #2b2b2b;
    margin: 0 auto;
  }
</style>

<main>
  <header>
    <h1>WerkWeek</h1>
  </header>
  <StopwatchList />
</main>
