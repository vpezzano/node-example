# node-example

Node is a Javascript runtime server, built on Chrome's v8 Javascript engine, so that we don't
need a browser to run Javascript code. This allows to write not only client-side code (validations), 
but we can do all type of operations on the server side. For example, we can create REST end-points
and access them from an Angular application or from any other web framework.
Npm is the equivalent of Maven for Javascript. We have a lot of libraries written by open source
communities or companies which are contributing to them; so, a common repository was needed, 
and that's why npm was created. Npm stands for Node Package Manager, and it's going to manage
all the packages for Node.js applications (Javascript applications). Npm hosts all the artifacts for 
the Javascript related stuff, and we can pull this content and use it in a Node.js project.


## Usage

To create the base skeleton of a node.js application, use the following command:

npm init

The entry-point will be the default index.js. This is analogous to the main class
for a Java program. The previous command will generate a package.json file, which
is the analogous of a pom.xml file in Maven world; so, the behavior of the Node.js
application will be based on this package.json file.
At this point, in order to pull the required dependencies (we don't have any in this case), run

npm install

so that we get the necessary libraries from the npm repository.
To start the Node.js application, we need to change the package.json file, 
adding inside the scripts section the row:

"start": "node index.js"

Finally, we can execute:

npm start (this is equivalent to: node index.js)

and we should be able to see the answer in the browser when we hit the REST end-point.
Node.js is faster than traditional application servers like Apache Tomcat; this is because
it uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.


## Developing

A simple REST end-point.
