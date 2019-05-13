import moment from 'moment';
import { auth, app } from '../src/constants/testIDs';
import texts from '../src/constants/translations';
import { sleep } from '../src/helpers';

const getRandomString = () =>
  Math.random()
    .toString(36)
    .substring(2);

const loginCredentials = {
  email: `${getRandomString()}@test.pl`,
  password: getRandomString(),
};

const profile = {
  weight: '123',
  height: '200',
  age: '50',
};

const openDrawer = () => {
  it('should open drawer menu', async () => {
    await element(by.id(app.hamburger.id)).tap();
    await expect(
      element(by.id(app.drawer.id)),
    ).toBeVisible();
  });
};

const backToMainScreen = () => {
  it('should go back', async () => {
    await element(by.id(app.backArrow.id)).tap();
    await expect(element(by.id(app.main.id))).toBeVisible();
  });
};

const formatDate = day => {
  return `${moment().format('YYYY-MM')}-${day}`;
};

describe('Authorization flow', () => {
  it('should have login screen', async () => {
    await device.reloadReactNative();
    await expect(
      element(by.id(auth.login.id)),
    ).toBeVisible();
  });

  it('should navigate to register screen', async () => {
    await element(by.label('REJESTRACJA')).tap();
    await expect(
      element(by.id(auth.register.id)),
    ).toBeVisible();
  });

  it('should display register error', async () => {
    await element(by.id(auth.register.buttonSubmit)).tap();
    await expect(
      element(by.id(auth.register.error)),
    ).toBeVisible();
  });

  it('should fill and send the register form', async () => {
    await element(
      by.id(auth.register.inputEmail),
    ).replaceText(loginCredentials.email);
    await element(
      by.id(auth.register.inputPassword),
    ).replaceText(loginCredentials.password);
    await element(
      by.id(auth.register.inputPasswordRepeat),
    ).replaceText(loginCredentials.password);

    await element(by.id(auth.register.buttonSubmit)).tap();
    await expect(element(by.id(app.main.id))).toBeVisible();
  });

  openDrawer();

  it('should log out', async () => {
    await element(by.id(app.drawer.linkLogout)).tap();
    await expect(
      element(by.id(auth.login.id)),
    ).toBeVisible();
  });
});

describe('Remind password', () => {
  it('should navigate to remind password screen', async () => {
    await element(by.id(auth.login.buttonRemind)).tap();
    await expect(
      element(by.id(auth.remindPassword.id)),
    ).toBeVisible();
  });

  it('should display remind password error', async () => {
    await element(
      by.id(auth.remindPassword.buttonSubmit),
    ).tap();
    await expect(
      element(by.id(auth.remindPassword.error)),
    ).toBeVisible();
  });

  it('should fill and send the remind password form', async () => {
    await element(
      by.id(auth.remindPassword.inputEmail),
    ).replaceText(loginCredentials.email);
    await element(
      by.id(auth.remindPassword.buttonSubmit),
    ).tap();
    await element(by.text(texts.ok)).tap();
    await expect(
      element(by.id(auth.login.id)),
    ).toBeVisible();
  });
});

describe('Login', () => {
  it('should display login error', async () => {
    await element(by.id(auth.login.buttonSubmit)).tap();
    await expect(
      element(by.id(auth.login.error)),
    ).toBeVisible();
  });

  it('should fill and send the login form', async () => {
    await element(by.id(auth.login.inputEmail)).replaceText(
      loginCredentials.email,
    );
    await element(
      by.id(auth.login.inputPassword),
    ).replaceText(loginCredentials.password);
    await element(by.id(auth.login.buttonSubmit)).tap();
    await expect(element(by.id(app.main.id))).toBeVisible();
  });
});

describe('Profile screen', () => {
  openDrawer();

  it('should navigate to profile screen', async () => {
    await element(by.id(app.drawer.linkProfile)).tap();
    await expect(
      element(by.id(app.profile.id)),
    ).toBeVisible();
  });

  it('should display profile form error', async () => {
    await element(by.id(app.profile.buttonSubmit)).tap();
    await expect(
      element(by.id(app.profile.error)),
    ).toBeVisible();
  });

  it('should fill and send profile form', async () => {
    await element(
      by.id(app.profile.inputWeight),
    ).replaceText(profile.weight);
    await element(
      by.id(app.profile.inputHeight),
    ).replaceText(profile.height);
    await element(by.id(app.profile.inputAge)).replaceText(
      profile.age,
    );
    await element(
      by.text(texts.profileLabelActivity),
    ).tapAtPoint({ x: 0, y: 30 });
    await element(
      by.text(texts.profileActivityAverage),
    ).tap();
    await element(by.text('Done')).tap();
    await element(by.id(app.profile.buttonSubmit)).tap();

    await element(by.text(texts.ok)).tap();
    await expect(
      element(by.id(app.profile.error)),
    ).toBeNotVisible();
  });

  backToMainScreen();
});

describe('Settings screen', () => {
  openDrawer();

  it('should navigate to settings screen', async () => {
    await element(by.id(app.drawer.linkSettings)).tap();
    await expect(
      element(by.id(app.settings.id)),
    ).toBeVisible();
  });

  it('should have email', async () => {
    await expect(
      element(by.id(app.settings.inputEmail)),
    ).toHaveText(loginCredentials.email);
  });

  it('should reset password', async () => {
    await element(by.id(app.settings.buttonReset)).tap();
    await element(by.text(texts.yes)).tap();
    await element(by.text(texts.ok)).tap();
    await expect(
      element(by.id(app.settings.id)),
    ).toBeVisible();
  });

  backToMainScreen();
});

describe('About screen', () => {
  openDrawer();

  it('should navigate to about screen', async () => {
    await element(by.id(app.drawer.linkAbout)).tap();
    await expect(
      element(by.id(app.about.id)),
    ).toBeVisible();
  });

  backToMainScreen();
});

describe('Main screen', () => {
  it('should change date', async () => {
    const selectedDay = '10';
    const expectedDate = formatDate(selectedDay);

    await element(by.text(selectedDay)).tap();
    await waitFor(element(by.id(app.main.date)))
      .toHaveText(expectedDate)
      .withTimeout(1000);
  });

  it('should navigate to statistics', async () => {
    await element(by.id(app.main.buttonStatistics)).tap();
    await expect(
      element(by.id(app.statistics.emptyView)),
    ).toBeVisible();
  });

  backToMainScreen();
});

describe('Survey', () => {
  it('should navigate to survey', async () => {
    await element(by.id(app.main.buttonSurvey)).tap();
    await expect(
      element(by.id(app.survey.id)),
    ).toBeVisible();
  });

  it('should change the date', async () => {
    const selectedDay = '15';
    const expectedDate = formatDate(selectedDay);
    await element(by.id(app.datePicker.button)).tap();
    await element(by.text(selectedDay)).tap();
    await waitFor(element(by.id(app.datePicker.date)))
      .toHaveText(expectedDate)
      .withTimeout(1000);
  });

  it('should select a mood', async () => {
    await element(by.id(app.moodSelector.mood[0])).tap();
    await element(by.id(app.moodSelector.mood[1])).tap();
    await element(by.id(app.moodSelector.mood[2])).tap();
    await expect(
      element(by.id(app.moodSelector.id)),
    ).toBeVisible();
  });

  it('should select sleep hour', async () => {
    await element(
      by.id(app.survey.selectorSleepHour.button),
    ).tap();
    await element(by.text(texts.confirm)).tap();
    await expect(
      element(by.id(app.survey.selectorSleepHour.value)),
    ).toBeVisible();
  });

  it('should select wake up hour', async () => {
    await element(
      by.id(app.survey.selectorWakeUpHour.button),
    ).tap();
    await element(by.text(texts.confirm)).tap();
    await expect(
      element(by.id(app.survey.selectorWakeUpHour.value)),
    ).toBeVisible();
  });

  it('should select food checkbox', async () => {
    const toggle = element(by.id(app.survey.toggleFood));
    await toggle.tap();
    await expect(toggle).toBeVisible();
  });

  it('should select alcohol checkbox', async () => {
    const toggle = element(by.id(app.survey.toggleAlcohol));
    await toggle.tap();
    await expect(toggle).toBeVisible();
  });

  it('should select caffeine checkbox', async () => {
    const toggle = element(
      by.id(app.survey.toggleCaffeine),
    );
    await toggle.tap();
    await expect(toggle).toBeVisible();
  });

  it('should send the survey form', async () => {
    await element(by.id(app.survey.buttonSubmit)).tap();
    await element(by.text(texts.ok)).tap();
    await expect(
      element(by.id(app.survey.id)),
    ).toBeVisible();
  });

  backToMainScreen();
});

describe('Statistics', () => {
  it('should navigate to statistics', async () => {
    await element(by.id(app.main.buttonStatistics)).tap();
    await expect(
      element(by.id(app.statistics.id)),
    ).toBeVisible();
  });

  backToMainScreen();
});

openDrawer();

it('should log out', async () => {
  await element(by.id(app.drawer.linkLogout)).tap();
  await expect(element(by.id(auth.login.id))).toBeVisible();
});
