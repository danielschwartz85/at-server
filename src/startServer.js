const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

/*
 * We currently serve only base URLs i.e. not http://base/something/
 * since it should anyway be like that and If we serve from 'something'
 * we then dont't serve these files: /static/media/*.woff2
 * defined in ccs files. They are defined as aboslute.
 */
app.use(express.static(path.join(__dirname, '../../at-dist')));

app.listen(port, () => console.log(`Server listening on port ${port}!`));
