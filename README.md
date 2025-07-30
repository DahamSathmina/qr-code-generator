# QR Code Generator

A cross-platform desktop application for generating custom QR codes from text or URLs. Built with [Electron](https://www.electronjs.org/) (Chromium + Node.js), this app provides a simple GUI to create and save QR codes on Windows, macOS, and Linux. It also includes a command-line interface for batch generation.

---

##  Key Features

*  **Real-time Generation**: Enter text or a URL and instantly see the QR code preview.
*  **Customizable Output**: Adjust the QR code size and error-correction level (L, M, Q, H).
*  **Export as Image**: Save the generated QR code as a PNG (or other supported formats).
*  **Offline Usage**: Works entirely on your machine without an internet connection but not generate QR Codes.
*  **CLI Support**: Includes a command-line script (`convert.js`) for batch QR code generation.


##  Technology Stack

* **Electron & Node.js**: Build a native desktop app using web technologies. Electron embeds Chromium and Node.js, enabling HTML/CSS/JS to run as a desktop application.
* **Frontend**: Standard HTML5, CSS3, and JavaScript for the user interface.
* **QR Code Library**: Utilizes a Node.js library (e.g., `qrcode` or `qr-image`) to encode input data into QR code images.
* **Build Tools**: Uses [electron-builder](https://www.electron.build/) for packaging and distribution, creating native installers for Windows, macOS, and Linux.


##  Installation

```bash
# Clone the repository
git clone https://github.com/DahamSathmina/qr-code-generator.git
cd qr-code-generator

# Install dependencies
npm install      # or yarn install

# Run the application
npm start        # or yarn start
```

This will launch the Electron app. The main window will appear with an input field and a live-updating QR code preview.


## Usage

### Graphical Interface

1. Launch the app.
2. Type or paste text/URL into the input field.
3. The QR code is generated automatically.
4. Click **Save** to export the QR code as an image file.

### Command-Line Interface (CLI)

Use the included `convert.js` script for terminal-based QR code generation:

```bash
node convert.js "Hello, world!" hello.png
```

This generates `hello.png` containing the QR code for "Hello, world!". Use `--help` to see all options.


## 📦 Packaging (Electron Builder)

To create distributable installers:

1. Install electron-builder:

   ```bash
   npm install --save-dev electron-builder
   ```
2. Add the following to your `package.json`:

   ```json
   "scripts": {
     "dist": "electron-builder"
   },
   "build": {
     "appId": "com.dahamsathmina.qrcodegenerator",
     "productName": "QR Code Generator",
     "files": ["**/*"],
     "mac": { "target": "dmg" },
     "win": { "target": "nsis" },
     "linux": { "target": ["AppImage", "deb"] }
   }
   ```
3. Run the packaging script:

   ```bash
   npm run dist   # or yarn dist
   ```

Installers will be generated in the `dist/` folder.

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a branch: `git checkout -b feature/YourFeature`.
3. Make your changes and commit: `git commit -m "Add YourFeature"`.
4. Push: `git push origin feature/YourFeature`.
5. Open a Pull Request to merge into `main`.

Please follow the existing code style and include tests or screenshots for UI changes.


## 📄 License

This project is licensed under the **GNU General Public License v3.0** (GPLv3). See the [LICENSE](https://www.gnu.org/licenses/gpl-3.0.en.html) file for details.
Learn more about GPLv3: [https://www.gnu.org/licenses/gpl-3.0.en.html](https://www.gnu.org/licenses/gpl-3.0.en.html)

