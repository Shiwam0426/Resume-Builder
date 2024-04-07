import express from "express";
import multer from "multer"
const port=3000;
const app=express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static('views/uploads'));
const upload = multer({ dest: './views/uploads' });
// app.use(express.static(path.join(__dirname, 'views')));
app.get('/', (req, res) => {
    res.render('card.ejs')
  })
  app.post('/create-resume',upload.single("file"), (req, res) => {
    const{name,phone,email}=req.body;
    const resumeImagePath = req.file ? req.file.path : null;
    console.log('Resume Image Path:', resumeImagePath);

    // Redirect to the "Your Resume" page
    res.render('Your_Resume.ejs',{name,phone,email,resumeImagePath});
});
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })