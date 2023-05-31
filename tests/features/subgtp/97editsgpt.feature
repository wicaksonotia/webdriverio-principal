Feature:  97. Edit Sub GTP

  Scenario Outline: As a user, I can create and edit Sub GTP
    Given I am on the Sub GTP page
    When I click button 'Tambah'
    Then System should be leading to form create Sub GTP

    Given I am on the form create Sub GTP page
    When I input form and submit
    Then System should be able to submit Sub GTP and leading to Sub GTP page

    When I search and edit Sub GPT
    Then System should be edit Sub GTP