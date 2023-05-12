Feature: 13. Publish Coin Disbursement

  Scenario Outline: As a user, I can publish Coin Disbursement
    Given I am in Coin Disbursement page
    When I search a coin disbursement
    Then System should be according data coin disbursement based on search keyword
    When I click button edit a unpublished coin disbursement
    Then System should be leading to form edit Coin Disbursement page

    # Given I am on the form edit coin disbursement page
    When I click button 'Simpan' on tab Target Penerima
    Then System should be able to save as draft coin disbursement

    Given I am in the Coin Disbursement page
    When I search name a coin disbursement
    Then System should be according data coin disbursement

    When I click button edit a draft coin disbursement
    Then System should be leading to form edit Coin Disbursement
    
    When I click button 'Simpan' Target Penerima
    Then System should be able to save and publish draft coin disbursement