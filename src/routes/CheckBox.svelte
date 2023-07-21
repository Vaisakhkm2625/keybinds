<script>
	export let visible = true;
</script>

<label class="custom-checkbox">
	<input type="checkbox" bind:checked={visible} />
	<span class="plus" />
</label>

<style>
	.custom-checkbox {
		display: inline-block;
		position: relative;
		width: 50px;
		height: 50px;
	}

	.custom-checkbox input[type='checkbox'] {
		display: none; /* Hide the default checkbox */
	}

	.plus {
		position: absolute;
		top: 0;
		left: 0;
		width: 40px;
		height: 40px;
		background: linear-gradient(#fff 0 0), linear-gradient(#fff 0 0), #635985;
		background-position: center;
		background-size: 50% 2px, 2px 50%; /* thickness = 2px, length = 50% (25px) */
		background-repeat: no-repeat;
		border-radius: 50%;

		pointer-events: none; /* Allow clicks to pass through to the actual checkbox */
	}

	/* Style the checkbox when it's checked */
	.custom-checkbox input[type='checkbox']:checked + .plus {
		transform: rotate(45deg); /* Rotate the plus sign by 45 degrees */
	}
</style>
