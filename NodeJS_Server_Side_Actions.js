/* NodeJS File Upload React/Express Architecture. */
/* Server-side Actions. */
/* Once the client gives the server a file and other relevant meta info associated with the file, */
/* the server has to know how to handle the binary file. Few libraries can help with this. */
/* We’ll be using Multer, which is maintained by the Express.js team. */

import express from 'express';
import axios from 'axios';
import multer from 'multer';

const app = express();

/**
 ... express.js boilerplate
 routes, middlewares, helpers, loggers, etc
**/

// configuring Multer to use files directory for storing files
// this is important because later we'll need to access file path

const storage = multer.diskStorage({

  destination: './files',
  filename(req, file, cb) {
    cb(null, `${new Date()}-${file.originalname}`);

  },

});

const upload = multer({ storage });

// express route where we receive files from the client
// passing multer middleware

app.post('/files', upload.single('file'), (req, res) => {
 const file = req.file; // file passed from client
 const meta = req.body; // all other values passed from the client, like name, etc..
 
 // send the data to our REST API

 axios({

    url: `https://api.myrest.com/uploads`,
    method: 'post',
    data: {
      file,
      name: meta.name,      

    },
  })
   .then(response => res.status(200).json(response.data.data))
   .catch((error) => res.status(500).json(error.response.data));

});
