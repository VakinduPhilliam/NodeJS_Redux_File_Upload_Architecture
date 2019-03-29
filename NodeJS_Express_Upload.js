/* The file upload app should have two components: */
/* Front end: lets user select file. */
/* Backend (API): that the front end can send a file to. */
/* express-file-upload is a handy package to handle uploaded files in express. */
/* We use it as middleware with express to move files from local disk to server. */

app.post('/upload', (req, res, next) => {

  let uploadFile = req.files.file
  const fileName = req.files.file.name

  uploadFile.mv(

    '${__dirname}/public/files/${fileName}',

    function (err) {

      if (err) {

        return res.status(500).send(err)

      }

      res.json({

        file: `public/${req.files.file.name}`,

      })

    },
  )

})