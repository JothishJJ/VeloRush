<script lang="ts">
  export let myDate: Date;

  const formattedDate = new Date(myDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
</script>

{formattedDate}
