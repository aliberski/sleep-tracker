import { auth } from '../src/constants/testIDs';

describe('Auth tabs', () => {
  it('should have login screen', async () => {
    await device.reloadReactNative();
    await expect(
      element(by.id(auth.loginScreen.id)),
    ).toBeVisible();
  });

  it('should have register screen', async () => {
    await element(by.label('REJESTRACJA')).tap();
    await expect(
      element(by.id(auth.registerScreen)),
    ).toBeVisible();
  });
});
