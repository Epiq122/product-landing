import { json } from '@sveltejs/kit';
import sgMail from '@sendgrid/mail';
import { SENDGRID_API_KEY } from '$env/static/private';

sgMail.setApiKey(SENDGRID_API_KEY);

const PDF_GUIDE = 'https://narrify-pubnlic.s3.eu-central-1.amazonaws.com/sample.pdf';

export async function POST({ request }) {
	const body = await request.json();

	const response = await fetch(PDF_GUIDE);
	const pdfBuffer = await response.arrayBuffer();
	const pdfBase64 = Buffer.from(pdfBuffer).toString('base64');

	const customerEmail = body.data.object.customer_details.email;
	const customerName = body.data.object.customer_details.name;

	const message = {
		to: customerEmail,
		from: 'robprojects122@gmail.com',
		subject: 'Order Confirmation - Ebook ',
		html: `<h1>Hi ${customerName},</h1>
    <p>Thank you so much for purchasing my ebook, if you have any questions feel free to send me message and I will get back to you!</p>
    <p><strong>What happens next?</strong></p>
    <ul>
    <li>You will find your ebook attached to this email. Please download and enjoy</li>
    <li>Keep an eye on your inbox for any updates or new ebooks I release</li>
    </ul>
    `,
		attachments: [
			{
				content: pdfBase64,
				filename: 'digital-ebook.pdf',
				type: 'application/pdf',
				disposition: 'attachment'
			}
		]
	};
	await sgMail.send(message);

	return json({ response: 'Email sent' });
}
