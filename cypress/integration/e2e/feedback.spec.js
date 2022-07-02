import Feedback from "../../page-objects/pages/FeedbackPage";

describe('Feedback Test using Fixtures', () => {
  before(() => {
    Feedback.load();
  });
  it('should submit feedback form', () => {
    Feedback.submitFeedback();
  });
});
