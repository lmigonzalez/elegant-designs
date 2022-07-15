
const mail = async(req, res) => {
	const {name, email, type, idea} = req.body
	// console.log(req.body)
	let nodemailer = require('nodemailer')
	
	const transport = nodemailer.createTransport({
		host: process.env.MAIL_HOST,
		secure: true,
		port: process.env.MAIL_PORT,
		auth: {
			user: process.env.MAIL_USER,
			pass: process.env.MAIL_PASS,
		}
	})
	
	await transport.sendMail({
		from: `${process.env.MAIL_USER}`,
		to: `${process.env.MAIL_USER}`,
		subject: 'Client Message',
		html: `<div> 
		<p> <b>Name: </b> ${name} </p>
		<p> <b>Email: </b> ${email} </p>
		<p> <b>Type: </b> ${type} </p>
		<p> <b>Idea: </b> ${idea} </p>
		</div>`
	})
	
	res.status(201).json(req)
	
	
}
  
export default mail