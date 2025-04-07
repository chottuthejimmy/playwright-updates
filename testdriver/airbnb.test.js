version: 4.2.26
session: 67f40b8cb9ecdba433709178
steps:
  - prompt: go to airbnb.com,
    commands:
      - command: assert
        expect: the browser is on airbnb.com
  - prompt: click on search destination,
    commands:
      - command: hover-text
        text: Search destinations
        description: search destination input field on Airbnb homepage
        action: click
  - prompt: type in "Austin",
    commands:
      - command: type
        text: Austin
  - prompt: click on check-in date,
    commands:
      - command: hover-text
        text: Check in
        description: check-in date input field on Airbnb homepage
        action: click
