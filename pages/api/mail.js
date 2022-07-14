

const mail =(req, res) => {
	const userData = req.body
	res.status(201).json(userData)
  }
  
export default mail