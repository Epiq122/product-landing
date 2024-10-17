<script>
	import bookCover from '$assets/book_cover.png';
	import phoneCover from '$assets/phone_cover.png';
	import { Button } from '$components';
</script>

<section class="hero">
	<div class="hero-showcase text-center bold">
		<h1 class="purple">Move To</h1>
		<h1 class="purple mb-xs">Spain</h1>
		<h4 class="italic semi-bold">
			There's no better time to move to Spain than now.Don't make the same mistake as others who
			wait until it's too late.
		</h4>
		<img src={bookCover} alt="" class="book-cover" />
		<img src={phoneCover} alt="" class="phone-cover" />
	</div>
	<div class="hero-text white text-center">
		<h1>This ebook will</h1>
		<h1>save you money</h1>
		<h1 class="mb-m">time & nerves</h1>
		<p class="light-grey mb-l">
			This ebook will save you money, time & nerves. It will help you avoid the most common mistakes
			when moving to Spain, i learned most things the hard way, but you don't have to.
		</p>
		<Button>Purchase E-book for $10</Button>
	</div>
</section>

<style>
	.hero {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		overflow-x: hidden;
	}

	.hero-showcase {
		position: relative;
		width: 100%;
		padding: 50px 16px 200px;
		background: linear-gradient(135deg, #e2cbff, #e2cbff 25%, #deeaff 50%, #ece5ff 75%, #927bce);
		overflow: hidden;
	}

	.hero-text {
		padding: 50px 5%;
		width: 100%;
		background-color: black;
	}

	.book-cover {
		position: absolute;
		width: 65%;
		max-width: 300px;
		right: -10%;
		bottom: -10%;
		transform: translateY(20%);
	}

	.phone-cover {
		position: absolute;
		width: 35%;
		max-width: 150px;
		bottom: -10%;
		left: 10%;
		transform: translateY(20%);
	}

	h1 {
		font-size: 2.5rem;
		margin-bottom: 0.5rem;
	}

	h4 {
		font-size: 1rem;
		margin-bottom: 1rem;
	}

	p {
		font-size: 0.9rem;
		line-height: 1.5;
	}

	@media (min-width: 768px) {
		.hero {
			flex-direction: row;
		}

		.hero-showcase,
		.hero-text {
			width: 50%;
		}

		.hero-showcase {
			padding: 100px 16px 0;
		}

		.hero-text {
			padding: 100px 5%;
		}

		.book-cover {
			right: 2%;
			bottom: 0;
			width: 65%;
			max-width: none;
			transform: translateY(30%);
		}

		.phone-cover {
			width: 35%;
			bottom: 0;
			left: auto;
			right: 52%;
			transform: translateY(25%);
		}

		h1 {
			font-size: 3rem;
		}

		h4 {
			font-size: 1.2rem;
		}

		p {
			font-size: 1rem;
		}
	}

	@media (min-width: 1024px) {
		h1 {
			font-size: 3.5rem;
		}

		h4 {
			font-size: 1.3rem;
		}

		p {
			font-size: 1.1rem;
		}
	}
</style>
