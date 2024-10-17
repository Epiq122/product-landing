<script></script>

<section class="chapter-preview default-margin">
	<h2 class="mb-l">What you're getting</h2>
	<div class="chapter-container">
		<ul>
			<li>
				<button
					class="chapter-title selected-chapter-title"
					aria-controls="chapter-info-1"
					aria-expanded="true"
				>
					<h3>Chapter 1: Navigating the Spanish bureaucracy</h3>
				</button>
			</li>
		</ul>
		<div class="chapter-info">
			<h3 class="chapter-strapline italic mb-s">
				Understanding Visas, Residency and Legal Essentials
			</h3>
			<p>
				Moving to Spain involves navigating a labyrinth of bureaucratic processes that can feel
				overwhelming at first. This chapter breaks down the essential steps required to secure your
				visa, establish residency, and handle other legal formalities. Whether you’re planning a
				short-term stay or seeking permanent residency, understanding Spain’s legal framework is
				crucial. We’ll explore the different types of visas available, from student to work visas,
				and provide tips on how to streamline your application process. Additionally, this chapter
				covers essential documentation, such as obtaining a Número de Identidad de Extranjero (NIE),
				which is your key to unlocking many services in Spain. We’ll also delve into the process of
				registering with the local town hall, known as empadronamiento, and the importance of
				understanding the tax implications of your move. Whether you’re a retiree, a digital nomad,
				or someone relocating for work, this chapter will guide you through the maze of paperwork
				and official procedures with practical advice and insider tips, ensuring that you’re legally
				prepared for your new life in Spain.
			</p>
		</div>
	</div>
</section>

<style>
	.chapter-preview {
		padding: 60px 5%;
		max-width: 1150px;
		margin: 0 auto;
	}

	.chapter-container {
		display: flex;
		flex-direction: column;
	}

	.chapter-container ul {
		width: 100%;
		padding: 0;
		list-style-type: none;
	}

	.chapter-info {
		width: 100%;
		margin-top: 20px;
	}

	.chapter-title {
		border-bottom: 1px solid grey;
		width: 100%;
		display: block;
		padding: 12px;
		text-align: left;
		transition: all 0.3s ease;
	}

	.chapter-title h3 {
		font-size: 1rem;
		margin: 0;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.selected-chapter-title {
		background-color: black;
		border: none;
		color: white;
		box-shadow:
			0 4px 8px 0 rgba(0, 0, 0, 0.2),
			0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}

	.chapter-strapline {
		font-size: 1rem;
	}

	@media (min-width: 768px) {
		.chapter-preview {
			padding: 80px 5%;
		}

		.chapter-container {
			flex-direction: row;
			justify-content: space-between;
		}

		.chapter-container ul {
			width: 40%;
		}

		.chapter-info {
			width: 55%;
			margin-top: 0;
		}

		.chapter-title h3 {
			font-size: 1.1rem;
		}

		.chapter-strapline {
			font-size: 1.1rem;
		}
	}

	@media (min-width: 1024px) {
		.chapter-preview {
			padding: 80px 0;
			margin-left: 12vw;
			margin-right: 20vw;
		}

		.chapter-title h3 {
			font-size: 1.2rem;
		}

		.chapter-strapline {
			font-size: 1.2rem;
		}
	}
</style>
