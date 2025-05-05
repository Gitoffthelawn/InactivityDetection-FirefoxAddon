# EPN inactivity detection extension for Firefox

## Description

This Firefox extension check if the citizen is active on the terminal. 

You can set the period of time after which the popup will be displayed and the lifetime of this popup, if it is exceeded, the browser will be closed

You can define the message according to the language, based on the examples at "HTML Message Structure".

## Improvement 

02-05-2025 : \
 Refactor promise for a better view \
 Add default values (showModal, popupLife, title, message) \
             Add rounding and shadow on modal window \
             No more using innerHtml \
             Multilingual buttons (continue & close) \

## Bug Fix

29-12-2022 : Add parameters, add EPNLauncher Language, MultiLingual function, Fix itsme timer conflict (phone field page) \
07-12-2022 : Add itsme timeout (phone timeout), add exception on CSAM Authorized URL, counter on 60sec \
05-12-2022 : Fix redirection after itsme by adding exception for url containing "idp.iamfas" \
03-12-2022 : itsme.be, timer conflict, exception created when URL contains "itsme.be" \
03-12-2022 : MyBXL.be use the same selector (modal), renaming them \
02-12-2022 : Fix timer issue when mode is displayed

## Authors

- [@michaelvdh84](https://github.com/michaelvdh84)


