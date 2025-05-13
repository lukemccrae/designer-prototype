# Designer Prototype

Designer Prototype is a React-based prototyping tool that allows designers and developers to view, iterate, and explore various UI component designs. The application utilizes Material-UI (MUI) components for its designs and provides a dynamic way to preview and interact with design examples. The project is also a demonstration of modular and reusable component design.

---

## Features
- **Dynamic Example Viewer**: Navigate through different UI component designs using a dropdown and navigation buttons.
- **Code Preview**: View the JSX code for each design alongside the live example.
- **Material-UI Integration**: All designs are built with MUI components for consistency and ease of use.
- **Responsive Layouts**: Optimized for both desktop and mobile viewing.
- **Reusable Design Sets**: Modular examples for quick integration into other projects.

---

## Design Sets
This repository includes multiple sets of design examples, each focusing on a specific UI component type. Current sets include:

1. **BlogCardVariants**: A collection of blog card designs featuring avatars, titles, and content summaries.
2. **AthleticFeedPosts**: Activity feed cards showcasing user activities like running, cycling, or yoga.
3. **LiveUserCards**: Profile cards with "LIVE" status indicators, perfect for streaming platforms.
4. **EditUserInfoCards**: Editable user information cards for profile settings.
5. **ProfileHeaderViews**: Profile header designs with layouts for bios, stats, and actions.

---

## Getting Started

### Prerequisites
Ensure you have the following installed on your system:
- **Node.js** (v14 or above)
- **npm** or **yarn**

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/lukemccrae/designer-prototype.git
   cd designer-prototype
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

   The application will be available at `http://localhost:3000`.

---

## Usage
1. Run the application locally.
2. Use the dropdown menu at the top to select a design set (e.g., Blog Card Variants, Athletic Feed Posts).
3. Navigate through the examples using the **Previous** and **Next** buttons.
4. View the live example and its JSX code side by side.

---

## Code Structure

### Key Files and Directories:
- **`src/App.tsx`**: The main application file. It handles the example navigation and rendering logic.
- **`src/examples/`**: Contains the design sets. Each file exports an array of examples with JSX and code.
  - `blogcards.tsx`
  - `athleticfeed.tsx`
  - `liveprofile.tsx`
  - `profileHeaderViews.tsx`
  - `userInfoCards.tsx`
- **`src/instructions/semantic-guidelines.md`**: Semantic guidelines for generating new design examples.

---

## Adding New Design Sets
To add a new set of examples:
1. Create a new file in the `src/examples/` directory (e.g., `newExamples.tsx`).
2. Follow the existing format of exporting an array of examples with `jsx` and `code` fields.
3. Add the new set to the `exampleSets` object in `App.tsx`.

---

## Contribution Guidelines
Contributions are welcome! If you'd like to enhance the project, please follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/new-example
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add new design example"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/new-example
   ```
5. Open a pull request.

---

## License
This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments
- [Material-UI](https://mui.com/) for the component library.
- [Prism Syntax Highlighter](https://prismjs.com/) for the code preview styling.

---

## Author
**Luke McCrae**  
GitHub: [lukemccrae](https://github.com/lukemccrae)