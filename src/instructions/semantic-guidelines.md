# Semantic Guidelines for Generating Design Sets

This document outlines the semantic guidelines and constraints that the Large Language Model (LLM) must follow to generate high-quality, reusable design examples. The goal is to ensure consistency, creativity, and code modularity across all generated outputs while adhering to the structure of existing examples (e.g., `BlogCardVariants`, `AthleticFeedPosts`, `LiveUserCards`).

---

## 1. **Core Objective**
When prompted, the LLM must generate **a set of 5 unique design examples** for the requested component type. Each example must:
- Be **visually and functionally distinct** from the others.
- Be implemented with **clean, reusable JSX code**.
- Include **semantic metadata** to describe the design's purpose, structure, and features.

---

## 2. **Input Expectations**
The LLM will receive a simple prompt from the user in the following format:
```
[Component type] [Design context]
```
Where:
- **Component type**: The type of design requested (e.g., "profile card", "user dropdown", "notification banner").
- **Design context**: (Optional) A brief description of the use case or intended design aesthetic (e.g., "for a dark theme mobile app", "for gamers").

Examples:
- `user dropdown for a modern dashboard`
- `live status badge for a streaming platform`
- `profile card for a fitness app`

---

## 3. **Output Structure**
The LLM must output a structured **JSON array** containing 5 unique design examples. Each example must include the following fields:

### JSON Schema:
```json
[
  {
    "jsx": "string",           // JSX code snippet for the design
    "code": "string",          // Full code block for the design
    "description": "string"    // Semantic description of the design
  },
  ...
]
```

### Example Output (for `profile card`):
```json
[
  {
    "jsx": "<Card>...</Card>",
    "code": "<Card sx={{ backgroundColor: 'white', color: 'black' }}>...</Card>",
    "description": "A modern profile card with avatar, username, and a live status indicator."
  },
  {
    "jsx": "<Card>...</Card>",
    "code": "<Card sx={{ display: 'flex', gap: 2 }}>...</Card>",
    "description": "A compact horizontal profile card optimized for mobile layouts."
  },
  ...
]
```

---

## 4. **Guidelines for Generating Examples**
The LLM must adhere to the following rules when generating content:

### 4.1 Component Structure
1. **Use Material-UI (MUI)**: Build all designs using MUI components (e.g., `Card`, `Box`, `Typography`, `Avatar`, `Chip`, etc.).
2. **Component Hierarchy**: Ensure the JSX structure reflects a clear and intuitive component hierarchy.
3. **Responsive Design**: Emphasize responsive layouts (e.g., flexible dimensions, spacing, and alignment).

---

### 4.2 Styling and Theming
1. **Styling**: Use `sx` props for inline styling, following MUI conventions.
2. **Themes**:
   - Default to a **light theme** unless otherwise specified.
   - Support **dark themes** when explicitly requested in the prompt.
3. **Colors**:
   - Use color tokens (e.g., `backgroundColor: 'white'`, `color: 'text.secondary'`).
   - Avoid hardcoding colors unless necessary for the design.

---

### 4.3 Metadata
Each design must include a `description` field that:
1. Summarizes the design's **purpose and use case**.
2. Highlights **notable features** (e.g., hover effects, badges, or layouts).
3. Mentions **aesthetic or functional choices** (e.g., "compact design", "optimized for mobile").

---

### 4.4 Code Quality
1. **Clean Code**:
   - Keep the JSX modular and reusable.
   - Avoid unnecessary inline styles or hardcoded values.
2. **Readable Syntax**:
   - Use proper indentation and formatting.
   - Add comments for complex parts of the code (if applicable).

---

## 5. **Creative Constraints**
To ensure diversity and creativity across the 5 examples:
1. **Layout Variations**: Explore different layouts for the same component type (e.g., vertical, horizontal, grid-based).
2. **Styling Variations**: Experiment with different styling approaches (e.g., outlined cards, solid backgrounds, or hover effects).
3. **Feature Variations**: Introduce optional features like:
   - Badges (e.g., "LIVE" or "NEW").
   - User actions (e.g., buttons for "Like" or "Comment").
   - Tags or Chips (e.g., categories or labels).

---

## 6. **Special Considerations**
1. **Target Audience**:
   - If a specific audience is mentioned in the prompt (e.g., "for gamers"), align the design aesthetic with that audience.
   - Example: Use vibrant colors and bold fonts for gamers, or minimalist designs for enterprise users.
2. **Accessibility**:
   - Ensure designs are accessible (e.g., provide alt text for images and labels for interactive elements).

---

## 7. **Error Handling**
If the prompt is unclear or lacks required context (e.g., "design a card"), the LLM should:
1. Default to a **generic use case** (e.g., modern design for a web app).
2. Mention the assumption in the `description` field of each example.

---

## 8. **Testing and Refinement**
1. Generated examples should be visually tested in the project viewer (`App.tsx`).
2. Iterate on the LLM’s instructions to refine future outputs based on user feedback.

---

## 9. **Prompt Templates**
Here are some example prompts that follow these guidelines:

### Prompt 1: User Dropdown
```
Generate a set of 5 design examples for a user dropdown for a modern web application.
```

### Prompt 2: Profile Card
```
Generate a set of 5 design examples for a profile card for a fitness app with a vibrant theme.
```

### Prompt 3: Live Status Indicator
```
Generate a set of 5 design examples for a live status indicator for gaming streamers.
```

### Prompt 4: Notification Banner
```
Generate a set of 5 design examples for a notification banner for a mobile app, suitable for both light and dark themes.
```

---

By adhering to these semantic guidelines, the LLM will generate outputs that are consistent, diverse, and aligned with the quality of existing examples in the repository.