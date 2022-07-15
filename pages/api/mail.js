
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
	
	const mailData = {
		from: `luisgonzalez@elegantdesigns.site`,
		to: `luisgonzalez@elegantdesigns.site`,
		subject: 'Client Message',
		html: `<div> 
		<p> <b>Name: </b> ${name} </p>
		<p> <b>Email: </b> ${email} </p>
		<p> <b>Type: </b> ${type} </p>
		<p> <b>Idea: </b> ${idea} </p>
		</div>`
	}
	
	
	await transport.sendMail(mailData, function (err, info) {
		if(err){
			console.log(err)
			
		}
		else{
			console.log("info")
			
		}
	})
	
	res.status(200).json(req.body)
	console.log(`env ${process.env.MAIL_HOST}`)
	
}
  
export default mail