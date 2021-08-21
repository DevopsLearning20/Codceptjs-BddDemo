Feature('Home Page Validations');

Scenario('Validate Title of Home page', ({ I }) => {
    I.amOnPage('http://zero.webappsecurity.com/');
    I.seeInTitle('Zero - Personal Banking - Loans - Credit Cards');

});

Scenario('Validate the search functionality', ({ I }) => {

    I.seeElement('#searchTerm');
});

Scenario('Validate online banking link', ({ I }) => {
    I.click({ xpath: "//li[@id='onlineBankingMenu']//div" });
    I.seeInCurrentUrl('/online-banking')
});


Scenario('Validate FeedBackLink', ({ I }) => {
    I.click({ css: "li[id='feedback'] div strong" });
    I.seeInCurrentUrl('/feedback');
});






