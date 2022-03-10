const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../index");

chai.should();

chai.use(chaiHttp);

describe("API ROUTES", () => {

	 /*
	 * Test the POST route
	 */

	 describe("POST /api/authenticate", () => {
	 	it("should return auth details if authenticated", (done) => {
	 		const user_creds = {
			    "username": "admin",
			    "password": "password123"
			  };
			chai.request(server)
			.post("/api/authenticate")
			.send(user_creds)
			.end((err, response) => {
				response.should.have.status(200);
				response.body.should.be.a("object");
				response.body.should.have.property("message");
				response.body.should.have.property("token");
				response.body.should.have.property("user");
				done();
			});
	 	});
	 });

	 describe("GET /api/welcome", () => {
	 	it("should return welcome message", (done) => {
			const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9."+
			"eyJ1c2VybmFtZSI6ImFkbWluIiwidXNlcklkIjoyLCJpYXQiOjE2"+
			"NDY5MDYyMDIsImV4cCI6MTY0Njk5MjYwMn0.XR5RLVsjkmXROSkU9"+
			"MSX2MfXh8Q-7mL7sP_xaXj4r7g";

			chai.request(server)
			.get("/api/welcome")
			.set('Authorization', 'Bearer ' + token)
			.end((err, response) => {
				response.should.have.status(200);
				response.should.be.html;
				done();
			});
	 	});
	 });
});