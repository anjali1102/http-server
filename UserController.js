const loginUser = (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  const result={
    success: "true",
    name: name,
    email: email,
    password: password,
  };
  res.send(`<h2 style="background:orange;color:red;align-items:center;height:100vh;display:flex;justify-content:center">${JSON.stringify(result)}</h2>`)
};

module.exports = loginUser;
