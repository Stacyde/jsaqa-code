Feature: TheCinema test
    Scenario: Should movie ticket
        Given user is on "/client/index.php" page
        When user choose day "5"
        When user choose movie "2" and movieTime "1"
        When user choose row "6" and place "5"
        When user click button "button"
        Then user sees booking confirmation "Вы выбрали билеты:"

    Scenario: Purchase of three movie tickets
        Given user is on "/client/index.php" page
        When user choose day "3"
        When user choose movie "2" and movieTime "2"
        When user choose row "9" and place "7"
        When user choose row "9" and place "8"
        When user choose row "9" and place "9"
        When user click button "button"
        When user click button "button"
        Then user sees booking confirmation "Электронный билет"

    Scenario: Should't book ticket
        Given user is on "/client/index.php" page
        When user choose day "5"
        When user choose movie "2" and movieTime "1"
        Then user sees the header "Микки маус"
        Then user sees "button" is not clickable