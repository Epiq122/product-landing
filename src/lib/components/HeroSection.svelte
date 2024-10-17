<script>
	import bookCover from '$assets/book_cover.png';
	import phoneCover from '$assets/phone_cover.png';
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
		<p class="light-grey">
			This ebook will save you money, time & nerves. It will help you avoid the most common mistakes
			when moving to Spain, i learned most things the hard way, but you don't have to.
		</p>
	</div>
</section>

<style>
	.hero {
		display: flex;
		height: 100vh;
		overflow-y: hidden;
	}

	.hero-showcase {
		position: relative;
		width: 50%;
		padding:
			100px,
			16px 0 16px;
		background: linear-gradient(135deg, #e2cbff, #e2cbff 25%, #deeaff 50%, #ece5ff 75%, #927bce);
	}
	.hero-text {
		padding: 100px 5%;
		width: 50%;
		background: black;
	}

	.book-cover {
		position: absolute;
		right: 2%;
		bottom: 0;
		width: 65%;
		transform: translateY(30%);
	}

	.phone-cover {
		position: absolute;
		right: 52%;
		bottom: 0;
		width: 35%;
		transform: translateY(25%);
	}
</style>
