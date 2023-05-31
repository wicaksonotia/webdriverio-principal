Feature:  90. Edit Budget Trade Program yang Sedang Berjalan

  Scenario Outline: As a user, I can create and edit trade program
    Given I am on the Trade Program page
    When I click button 'Tambah'
    Then System should be leading to Buat Trade Program page

    Given I am on the Buat Trade Program page
    When I input form and submit
    Then System should be able to submit Trade Program and leading to Trade Program page

    When I search and edit Budget Trade Program
    Then System should be edit Budget Trade Program and leading to trade Program page