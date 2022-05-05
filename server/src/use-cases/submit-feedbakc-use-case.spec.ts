import { SubmitFeedbackUseCase } from './submit-feedback-use-case';

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeeback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
);

describe('Submit feedback', () => {
  it('should be able to submit a feeback', async () => {
    await expect(
      submitFeeback.execute({
        type: 'BUG',
        comment: 'example comment',
        screenshot: 'data:image/png;base64, DJSHAJDJASHHDASDKJSAJDAdasdas'
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it('should not be able to submit a feeback without type', async () => {
    await expect(
      submitFeeback.execute({
        type: '',
        comment: 'example comment',
        screenshot: 'data:image/png;base64, DJSHAJDJASHHDASDKJSAJDAdasdas'
      })
    ).rejects.toThrow();
  });

  it('should not be able to submit a feeback without comment', async () => {
    await expect(
      submitFeeback.execute({
        type: 'BUG',
        comment: '',
        screenshot: 'data:image/png;base64, DJSHAJDJASHHDASDKJSAJDAdasdas'
      })
    ).rejects.toThrow();
  });

  it('should not be able to submit a feeback with an invalid screenshot', async () => {
    await expect(
      submitFeeback.execute({
        type: 'BUG',
        comment: 'ta tudo bugado',
        screenshot: 'test.jpg'
      })
    ).rejects.toThrow();
  });
});
