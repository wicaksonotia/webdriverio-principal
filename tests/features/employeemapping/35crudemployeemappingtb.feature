Feature: 35. CRUD Employee Mapping (Transfer Bank)

  Scenario Outline: As a user, I can create, read, update and delete employee - transfer bank
    Given I am on the Employee Mapping page
    When I click button 'Tambah'
    Then System should be leading to form create Employee Mapping

    Given I am on the form create Employee Mapping page
    When I input form with metode pembayaran 'Transfer Bank' and submit
    Then System should be able to submit Employee Mapping and leading to Employee Mapping page

    When I search a employee
    Then System should be display employee data based on search keyword

    When I edit and delete employee
    Then System should be delete employee