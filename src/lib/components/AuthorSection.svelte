<script>
	import profilePic from '$assets/profile.jpeg';
</script>

<section class="author-section">
	<h2 class="mb-l">About the author</h2>
	<div class="author-container">
		<div class="author-text">
			<p>
				Join Bucky, the dapper gentleman with a top hat and monocle, as he recounts his
				adventure-filled move to Spain, where each chapter is brimming with invaluable tips and
				humorous pitfalls. From navigating the complexities of residency paperwork to uncovering the
				best local secrets, Bucky's charming tales make this ebook a must-read for anyone dreaming
				of a life under the Spanish sun.
			</p>
			<p>
				With years of firsthand experience and a knack for navigating Spain's unique cultural and
				bureaucratic landscape, Bucky has become an expert guide for anyone looking to make the move
				seamlessly and enjoyably.
			</p>
		</div>
		<img src={profilePic} alt="Author bucky" />
	</div>
</section>

<style>
	.author-section {
		padding: 40px 5%;
		max-width: 1150px;
		margin: 0 auto;
	}

	.author-container {
		display: flex;
		flex-direction: column-reverse;
		align-items: center;
	}

	.author-container img {
		width: 80%;
		max-width: 300px;
		border: 6px solid black;
		box-shadow:
			0 4px 8px 0 rgba(0, 0, 0, 0.2),
			0 6px 20px 0 rgba(0, 0, 0, 0.19);
		margin-bottom: 20px;
	}

	.author-text {
		width: 100%;
	}

	@media (min-width: 768px) {
		.author-section {
			padding: 60px 5%;
		}

		.author-container {
			flex-direction: row;
			justify-content: space-between;
			align-items: flex-start;
		}

		.author-container img {
			width: 40%;
			max-width: none;
			margin-bottom: 0;
		}

		.author-text {
			width: 55%;
		}
	}

	@media (min-width: 1024px) {
		.author-section {
			padding: 80px 0;
			margin-left: 12vw;
			margin-right: 20vw;
		}
	}

	h2 {
		font-size: 1.8rem;
		margin-bottom: 1.5rem;
	}

	p {
		font-size: 1rem;
		line-height: 1.6;
		margin-bottom: 1rem;
	}

	@media (min-width: 768px) {
		h2 {
			font-size: 2rem;
		}

		p {
			font-size: 1.1rem;
		}
	}
</style>
