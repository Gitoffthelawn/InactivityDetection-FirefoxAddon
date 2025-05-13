# EPN Inactivity Detection Extension for Firefox

## Description

The EPN Inactivity Detection extension monitors user activity on the browser and displays a popup after a specified period of inactivity. If the user does not respond within the popup's lifetime, the browser will automatically close.

### Key Features:
- Set the inactivity period after which the popup is displayed.
- Define the popup's lifetime before the browser closes.
- Multilingual support for popup messages (French, Dutch, English).
- Customizable popup messages and titles for each language.

## Installation

1. Clone or download this repository.
2. Open Firefox and navigate to `about:debugging`.
3. Click on **This Firefox** and then **Load Temporary Add-on**.
4. Select the `manifest.json` file from the project directory.

## Usage

1. Open the extension's options page by clicking on the extension icon in the toolbar.
2. Configure the following settings:
   - **Inactivity Period**: Time (in seconds) before the popup is displayed.
   - **Popup Lifetime**: Time (in seconds) before the browser closes if no action is taken.
   - **Popup Messages**: Customize the title and message for each supported language (FR, NL, EN).
3. Save your settings by clicking the **Validate** button.
4. Ensure the Firefox parameter `dom.allow_scripts_to_close_windows` is set to `true` for the browser to close automatically.  
   - To enable this parameter:
     1. Open a new tab and navigate to `about:config`.
     2. Search for `dom.allow_scripts_to_close_windows`.
     3. Set its value to `true`.

## Improvements

### Recent Updates:
- **02-05-2025**:
  - Refactored promises for better readability.
  - Added default values for `showModal`, `popupLife`, `title`, and `message`.
  - Enhanced modal window with rounded corners and shadows.
  - Replaced `innerHTML` usage for improved security.
  - Added multilingual buttons for "Continue" and "Close".

## Bug Fixes

- **12-05-2025**: Add Default `defaultMessage` and `defaultModalTitle` in timeoutModal.js, without this, it finds nothing in memory, as there is no parameter validation via the extension interface.
- **07-05-2025**: Decoded HTML entities and updated `modalText.id` to `askingInactivity`.
- **29-12-2022**: Added parameters for EPNLauncher language detection, multilingual functionality, and fixed itsme timer conflict.
- **07-12-2022**: Added timeout for itsme and exceptions for CSAM Authorized URLs.
- **05-12-2022**: Fixed redirection issues for URLs containing `idp.iamfas`.
- **03-12-2022**: Resolved timer conflicts for `itsme.be` and renamed modal selectors for `MyBXL.be`.
- **02-12-2022**: Fixed timer issues when the modal is displayed.

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push them to your fork.
4. Submit a pull request with a detailed description of your changes.

## Authors

- [@michaelvdh84](https://github.com/michaelvdh84)

## License

This project is licensed under the GNU General Public License v3.0. See the `LICENSE` file for details.