Feature: Validate login functionality and dashboad
  verify login functionality

  Scenario: Check Login Functionality
    Given I go to home page
    When I navigate on login page
    And I login with username and password
      | UserName | Password |
      | username | password |
    Then I am on home page

  Scenario: Validate Account Summary Functionality
    Given I am login
    When I navigate on Account Summary tab
    Then Page Title should be "Zero - Account Summary"

  Scenario: Validate Account Activity Functionality
    Given I am login
    When I navigate on Account Activity tab
    Then Page Title should be "Zero - Account Activity"

  Scenario: Validate Transfer Funds Functionality
    Given I am login
    When I navigate on Transfer Funds tab
    Then Page Title should be "Zero - Transfer Funds"

  Scenario: Validate Pay Bills Functionality
    Given I am login
    When I navigate on Pay Bills tab
    Then Page Title should be "Zero - Pay Bills"

  Scenario: Validate My Money Map Functionality
    Given I am login
    When I navigate on My Money Map tab
    Then Page Title should be "Zero - My Money Map"

  Scenario: Validate Online Statements Functionality
    Given I am login
    When I navigate on Online Statements tab
    Then Page Title should be "Zero - Online Statements"






