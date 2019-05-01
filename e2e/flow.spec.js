import { auth, app } from '../src/constants/testIDs';

describe('Auth tabs', () => {
  it('should have login screen', async () => {
    await device.reloadReactNative();
    await expect(element(by.id(auth.login.id))).toBeVisible();
  });

  it('should navigate to register screen', async () => {
    await element(by.label('REJESTRACJA')).tap();
    await expect(element(by.id(auth.register.id))).toBeVisible();
  });

  it('should fill and send the register form', async () => {
    await element(by.id(auth.register.inputEmail)).replaceText(
      'test@email.pl',
    );
    await element(by.id(auth.register.inputPassword)).replaceText(
      'test123',
    );
    await element(by.id(auth.register.buttonSubmit)).tap();
    await expect(element(by.id(auth.login.id))).toBeVisible();
  });

  it('should navigate to restore password screen', async () => {
    await element(by.id(auth.login.buttonRemind)).tap();
    await expect(element(by.id(auth.remindPassword.id))).toBeVisible();
  });

  it('should fill and send the remind password form', async () => {
    await element(by.id(auth.remindPassword.inputEmail)).replaceText(
      'test@email.pl',
    );
    await element(by.id(auth.remindPassword.buttonBack)).tap();
    await expect(element(by.id(auth.login.id))).toBeVisible();
  });

  it('should fill and send the login form', async () => {
    await element(by.id(auth.login.inputEmail)).replaceText(
      'test@email.pl',
    );
    await element(by.id(auth.login.inputPassword)).replaceText(
      'testowyLogin123',
    );
    await element(by.id(auth.login.buttonSubmit)).tap();
    // await expect(element(by.id(app.main.id))).toBeVisible();
  });
});
