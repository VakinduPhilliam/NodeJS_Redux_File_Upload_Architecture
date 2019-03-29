# NodeJS_Redux_File_Upload_Architecture
NodeJS example on how to upload files using Redux and ExpressJS.

The following scripts demonstrate the process of uploading files with Node.js using React/Express Architecture.
Uploading files using Node.Js is not so straightforward, unless you understand how to user Buffer API for reading streams of binary files (i.e. uploading file content as binary code).
We are using React.js on the client, Express.js as the middle (orchestration) layer and external REST API, which is not part of React/Express architecture. One way to handle files is to upload them directly to a server through API from the browser, which may not be ideal in every scenario, for example, when the API is on a different domain or you want to modify the file before sending to API.
Node server is a perfect solution in this case.
Compiled and presented by Vakindu Philliam.
