describe('Booking API Automation', () => {
  let bookingId;
  let payload;

  before(() => {
    cy.fixture('booking').then((bookingPayload) => {
      payload = bookingPayload;
      cy.request({
        method: 'POST',
        url: 'https://restful-booker.herokuapp.com/booking',
        body: payload,
        headers: { 'Content-Type': 'application/json' }
      }).then((response) => {
        expect(response.status).to.be.oneOf([200, 201]);
        expect(response.body.booking).to.have.property('firstname', payload.firstname);
        bookingId = response.body.bookingid;
      });
    });
  });

  it('should retrieve customer booking and validate firstname', () => {
    cy.request(`https://restful-booker.herokuapp.com/booking/${bookingId}`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.firstname).to.eq(payload.firstname);
    });
  });
});
