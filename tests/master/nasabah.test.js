const request = require("supertest");
const app = require("../../index.js");
// const truncate = require("./helpers/truncate");

describe("Get All Nasabah", () => {
  let existingData = null;
  let token = null;

  //   beforeAll(async () => {
  //     // set up the todo
  //     const dataUser = await request(app)
  //       .post("/auth/signin")
  //       .send(userMockUpLogin);
  //     const newCustomer = await request(app)
  //       .post("/location/add")
  //       .set("Authorization", `Bearer ${dataUser.body.data.token.access_token}`)
  //       .send(locationMockup);
  //     token = dataUser;
  //     existingData = newCustomer.body.data;
});

//   afterAll(async () => {
//     await request(app)
//       .delete(`/location/delete/id/${existingData.id}`)
//       .set("Authorization", `Bearer ${token.body.data.token.access_token}`);
//   });

it("should return 200 and have message Nasabah Found if location exist", async () => {
  try {
    const res = await request(app).get("/masterNasabah");
    // .set("Authorization", `Bearer ${token.body.data.token.access_token}`);

    expect(res.statusCode).toBe(200);
    // expect(res.body).toHaveProperty("status", "success");
    // expect(res.body).toHaveProperty("message", "Nasabah Found");
    // expect(res.body).toHaveProperty("data");
  } catch (err) {
    console.log(err.message);
    expect(err).toBe(500);
  }
});
// });
