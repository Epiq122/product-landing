<script>
	import chevronArrow from '$assets/icons/chevron-down.svg';
</script>

<button class="container">
	<div class="question-and-answer">
		<p class="question mb-s">What will I learn from this ebook?</p>
		<p class="answer">
			In this delightful ebook, you'll learn from Bucky's extensive firsthand experience as he
			navigates the ins and outs of relocating to Spain. Discover practical tips on securing
			residency, finding the perfect neighborhood, and integrating into the local culture. Bucky
			shares invaluable advice on avoiding common pitfalls, such as understanding the intricacies of
			Spanish bureaucracy and embracing the laid-back lifestyle. His charming anecdotes and expert
			insights make this guide an indispensable resource for anyone looking to make their move to
			Spain both seamless and enjoyable.
		</p>
	</div>
	<img src={chevronArrow} alt="" />
</button>

<style>
	.container {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		padding: 12px 0;
		border-bottom: 1px solid #e0e0e0;
		text-align: left;
	}

	.question-and-answer {
		padding-right: 150px;
		flex-grow: 1;
	}

	.answer {
		max-height: 0;
		overflow: hidden;
		opacity: 0;
		transition: all 0.3s ease-out;
	}
	button img {
		width: 24px;
		height: 24px;
		transition: transform 0.3s linear;
	}
	.question {
		font-weight: bold;
	}

	.container-expanded img {
		transform: rotate(180deg);
	}
	.container-expanded .answer {
		max-height: unset;
		opacity: 1;
	}
</style>
