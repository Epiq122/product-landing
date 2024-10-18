<script>
	import { FaqItem, Button } from '$components';
	import twitterIcon from '$assets/icons/twitter.webp';

	let questionExpanded = $state(-1);

	const onClick = (index) => {
		if (questionExpanded === index) {
			questionExpanded = -1;
			return;
		}
		questionExpanded = index;
	};

	const faqs = [
		{
			question: 'What will I learn from this ebook?',
			answer:
				"In this delightful ebook, you'll learn from Bucky's extensive firsthand experience as he navigates the ins and outs of relocating to Spain. Discover practical tips on securing residency, finding the perfect neighborhood, and integrating into the local culture. Bucky shares invaluable advice on avoiding common pitfalls, such as understanding the intricacies of Spanish bureaucracy and embracing the laid-back lifestyle. His charming anecdotes and expert insights make this guide an indispensable resource for anyone looking to make their move to Spain both seamless and enjoyable."
		},
		{
			question: 'What is this ebook for?',
			answer:
				'This ebook is designed to be a comprehensive guide for anyone considering a move to Spain. It provides practical advice, valuable tips, and firsthand experiences to help you navigate the complexities of relocating, ensuring a smoother and more enjoyable transition to your new life under the Spanish sun.'
		},
		{
			question: 'How much does the ebook cost?',
			answer:
				'The cost of the ebook is $10, offering you a wealth of information and expert guidance at an affordable price.'
		},
		{
			question: 'Is the information in the ebook up-to-date?',
			answer:
				'Yes, the information in the ebook is up-to-date, reflecting the latest insights and regulations to ensure you have the most accurate and current guidance for your move to Spain.'
		},
		{
			question: "Can I get a refund if I'm not satisfied?",
			answer:
				"Absolutely! If you're not satisfied with the ebook, we offer a 30-day money-back guarantee. Your satisfaction is our top priority."
		}
	];
</script>

<section class="landing-page-section">
	<h2 class="mb-l">Frequently Asked Questions</h2>
	<div class="faq-container">
		{#each faqs as faq, index}
			<FaqItem {faq} isExpanded={index === questionExpanded} onclick={() => onClick(index)} />
		{/each}
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
