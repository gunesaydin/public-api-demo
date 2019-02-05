# Public API Demo (NodeJS + Express) & Static Page for Frontend (HTML5 + CSS3)

## [LiveDemo](https://public-api-demo.herokuapp.com)


## A quick walkthrough

I wrote the public API with NodeJS by using Express framework. It is connected to a MongoDB database that is on mLab right now, but if you want to use a local mongoDB, adress can be uncommented from `index.js` to switch databases.

Public API is also serving to two other applications that I have created for my frontend demo applications, one React and one Angular version of the same app.

I have wrote the static pages with HTML5 and CSS3. I tried to use all new introductions to them at least once. I tried to avoid external libraries as much as possible. Only two elements I've imported from external libraries are a Google Font and, a few Font-Awesome icons. Also, all design is based on CSS3 flexboxes.

---

# Installation & Dependencies

I have used NodeJS version `v10.15.0` for coding the backend.

After cloning solution repo to your computer, first run

> npm install

Then you should be able to run it via

> node index.js

Unless an environmental PORT variable is set, server hosts itself on port 8000 by default. You can click [here](http://localhost:8000/) to access it.


