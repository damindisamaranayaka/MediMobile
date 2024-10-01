const app=require('./app');
const db= require('./config/db')
const UserModel= require('./model/user.model')

const port=3000;

app.get('/', (req, res) => {
    res.send('Hello, World!,,555,,');
  });

  app.get('/', async (req, res) => {
    try {
        const newUser = new UserModel({ email: 'patient@example.com', password: 'securepassword' });
        const savedUser = await newUser.save();
        res.send('User created: ' + savedUser);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(port,()=>{
  console.log(`Server Listening on Port http://localhost:${port}`);
});