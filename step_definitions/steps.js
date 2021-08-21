const { I } = inject();
// Add in your custom step files

Given('I go to home page', () => {
  I.amOnPage('/index.html')
});

When('I navigate on login page', () => {
  I.click('#signin_button');
  I.wait(2)
 });

When('I login with username and password', (table) => {
  const cells = table.rows[1].cells;
  console.log(cells[0].value);
  I.fillField('#user_login', cells[0].value);
  I.fillField('#user_password', cells[1].value);
  I.click('Sign in');
  I.wait(2)
  I.acceptPopup();

});

Then('I am on home page', () => {
    I.seeElement('h2:nth-child(1)')
});

Given('I am login', () => {
  I.loginUser();

});

When('I navigate on Account Summary tab', () => {
  I.click('Account Summary');
  I.wait(2)
});

Then('Page Title should be {string}', (pageTitle) => {
  console.log(pageTitle)
  I.seeInTitle(pageTitle)
});

When('I navigate on Account Activity tab', () => {
  I.click('#account_activity_tab');
});

When('I navigate on Transfer Funds tab', () => {
  I.click('#transfer_funds_tab');
});

When('I navigate on Pay Bills tab', () => {
  I.click('#pay_bills_tab');
});

When('I navigate on My Money Map tab', () => {
  I.click('#money_map_tab');
});

When('I navigate on Online Statements tab', () => {
  I.click('#online_statements_tab');
});
