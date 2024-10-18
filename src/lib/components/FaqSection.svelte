<script>
	import { FaqItem, Button } from '$components';
	import twitterIcon from '$assets/icons/twitter.webp';
</script>

<section class="landing-page-section">
	<h2 class="mb-l">Frequently Asked Questions</h2>
	<div class="faq-container">
		<FaqItem />
	</div>
	<div class="additional-info">
		<Button class="mt-s">Buy Now</Button>
		<p class="mt-m">Any other questions?</p>
		<a href="https://x.com">
			<p>Hit me up on twitter <img src={twitterIcon} alt="twitter" class="twitter-icon" /></p>
		</a>
	</div>
</section>

<style>
	.additional-info {
		display: flex;
		flex-direction: column;
		color: grey;
		align-items: center;
		margin-top: 20px;
	}

	.twitter-icon {
		width: 20px;
		margin-left: 5px;
	}

	a {
		text-decoration: underline;
		color: grey;
	}
</style>
