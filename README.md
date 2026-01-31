# Todo App

A modern, feature-rich Todo application built with React and Vite, featuring a beautiful dark theme with smooth animations and an intuitive user interface.

## 🌐 Live Demo

Visit the live site: [todo-list-using-react-teal.vercel.app]([https://todo-list-using-react-7x7t.vercel.app/])

## ✨ Features

- ✅ **Add Tasks** - Quickly create new tasks with a simple input
- ✅ **Mark Complete** - Check off completed tasks with smooth animations
- ✅ **Edit Tasks** - Modify existing tasks on the fly
- ✅ **Delete Tasks** - Remove tasks you no longer need
- ✅ **Persistent State** - Uses React Context API and useReducer for state management
- ✅ **Modern UI/UX** - Dark theme with gradient backgrounds and glassmorphism effects
- ✅ **Smooth Animations** - Delightful transitions and hover effects throughout
- ✅ **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- ✅ **Accessible** - Keyboard navigation and screen reader friendly

## 🎨 Design Features

- **Dark Theme** - Easy on the eyes with gradient backgrounds
- **Glassmorphism** - Modern card designs with backdrop blur
- **Animated Elements** - Smooth slide-ins, fade-ins, and hover effects
- **Custom Checkboxes** - Stylish checkboxes with checkmark animations
- **Gradient Accents** - Beautiful indigo/purple/green color scheme
- **Custom Scrollbar** - Styled to match the overall theme

## 🛠️ Technologies Used

- **React** - UI library for building component-based interfaces
- **Vite** - Fast build tool and development server
- **React Hooks** - useState, useReducer, useContext for state management
- **Context API** - Global state management without prop drilling
- **CSS3** - Modern styling with animations and transitions
- **Google Fonts** - Inter and Space Grotesk typography

## 📋 Project Structure

```
Todolist-using-react/
├── src/
│   ├── components/
│   │   ├── AddTodo/
│   │   │   ├── AddTodo.jsx
│   │   │   └── AddTodo.css
│   │   ├── Todo/
│   │   │   ├── Todo.jsx
│   │   │   └── Todo.css
│   │   ├── TodoList/
│   │   │   └── TodoList.jsx
│   │   └── context/
│   │       ├── TodoContext.jsx
│   │       └── TodoDispatchContext.jsx
│   ├── reducers/
│   │   └── todoReducer.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 14 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/yashmishra11/Todolist-using-react.git
cd Todolist-using-react
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
```

3. **Start the development server:**
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser:**
Navigate to `http://localhost:5173` (or the port shown in your terminal)

### Build for Production

```bash
npm run build
# or
yarn build
```

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 🎯 Usage

### Adding a Task
1. Type your task in the input field
2. Click the "Add Task" button or press Enter
3. Your task will appear in the list below

### Completing a Task
- Click the checkbox next to any task to mark it as complete
- Completed tasks will be styled with a line-through

### Editing a Task
- Click the "Edit" button on any task
- Modify the task text
- Save your changes

### Deleting a Task
- Click the "Delete" button to remove a task from the list

## 🎨 Customization

### Color Scheme

The app uses CSS variables defined in `index.css`. You can customize the entire theme by modifying these variables:

```css
:root {
  --primary: #6366f1;        /* Indigo */
  --primary-dark: #4f46e5;   /* Dark Indigo */
  --secondary: #8b5cf6;      /* Purple */
  --success: #10b981;        /* Green */
  --danger: #ef4444;         /* Red */
  --bg-primary: #0f172a;     /* Dark Blue */
  --bg-secondary: #1e293b;   /* Slate */
  --text-primary: #f1f5f9;   /* Light Gray */
  --text-secondary: #94a3b8; /* Gray */
}
```

### Fonts

Change fonts by modifying the Google Fonts import in `index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');
```

## 📱 Responsive Breakpoints

- **Desktop**: > 640px
- **Mobile**: ≤ 640px

## 🏗️ State Management

This app uses React's Context API combined with the useReducer hook for efficient state management:

### TodoContext
Provides access to the todo list state

### TodoDispatchContext
Provides dispatch functions for state updates

### Reducer Actions
- `ADD_TODO` - Add a new task
- `EDIT_TODO` - Modify an existing task
- `DELETE_TODO` - Remove a task
- `TOGGLE_TODO` - Mark task as complete/incomplete

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

**Yash Mishra**

- **Email**: mr.yashofficial1102@gmail.com
- **LinkedIn**: [yash-mishra-7b072224a](https://www.linkedin.com/in/yash-mishra-7b072224a/)
- **GitHub**: [yashmishra11](https://github.com/yashmishra11)
- **Portfolio**: [portfolio-vert-eight-34.vercel.app](https://portfolio-vert-eight-34.vercel.app/)

## 🙏 Acknowledgments

- Design inspiration from modern web applications
- Google Fonts for beautiful typography
- Vercel for seamless deployment
- React team for the amazing library

## 📸 Screenshots

### Desktop View
*Modern dark theme with glassmorphism effects*

### Mobile View
*Fully responsive design optimized for mobile devices*

---

**Made with ❤️ by Yash Mishra and Claude**

*Last Updated: January 2026*

## 🐛 Known Issues

No known issues at this time. If you find a bug, please open an issue on GitHub.

## 🗺️ Roadmap

- [ ] Add task priorities (high, medium, low)
- [ ] Add due dates for tasks
- [ ] Add task categories/tags
- [ ] Add dark/light theme toggle
- [ ] Add local storage persistence
- [ ] Add task search and filter functionality
- [ ] Add task statistics dashboard
- [ ] Add drag-and-drop reordering

## 💡 Tips

- Use the keyboard shortcut `Enter` to quickly add tasks
- Tasks automatically save as you interact with them
- The app is fully keyboard accessible for improved productivity

---

If you find this project helpful, please give it a ⭐ on GitHub!
