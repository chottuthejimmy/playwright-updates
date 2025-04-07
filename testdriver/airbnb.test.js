version: 4.2.26
session: 67f40265d5c0597efaa710bc
steps:
  - prompt: go to airbnb.com.
    commands:
      - command: focus-application
        name: Google Chrome
      - command: hover-text
        text: Google Chrome
        description: Google Chrome icon on the desktop
        action: double-click
      - command: type
        text: airbnb.com
      - command: press-keys
        keys:
          - enter
  - prompt: go to airbnb.com.
    commands:
      - command: hover-text
        text: New Tab
        description: new tab button in Chrome
        action: click
      - command: hover-text
        text: Search Google or type a URL
        description: address bar in the new tab
        action: click
      - command: type
        text: airbnb.com
      - command: press-keys
        keys:
          - enter
