TechStack

Title: TechStack is a simple and interactive React application where developers can explore different technologies, view their details, and build their own development stack by adding and removing technologies.

Features:
1:Explore Technologies — Browse frontend, backend, database, language, styling, DevOps, and tools
2: Build Your Stack — Add technologies to your personal stack and remove them whenever you want
3: Interactive Feedback — Get toast notifications when adding, removing, duplicating, or clearing technologies.

Technologies:
1: React
2:TypeScript
3:Tailwind CSS
4:DaisyUI
5:React Toastify
6:React Icon
7:Vite
8:JSON

1=> What is JSX, and why is it used in React?
=> JSX is a syntax that lets us write HTML-like code inside JavaScript/TypeScript.It makes React components easier to read and allows us to describe what the UI should look like.
2=> What is the difference between props and state?
=> Props are data passed from a parent component to a child component.
State is data managed inside a component that can change over time.

3=>What does the useState hook do, and where did you use it in this project?
=> useState lets us create and manage changing data inside a React component.
In this project, I used useState to share the selected technologies in the stack.

4=>What does the useEffect hook do, and why did you need it to load the JSON data?

=>useEffect is used to run side effects in a React component, such as fetching data from an API.

However, in this project I did not need useEffect to load the JSON data. I used React's Suspense and use() to handle the data fetching and loading state.

5=>Why does every item in a .map() list need a unique key prop?

=>React uses the key to identify each item in a list.
It helps React understand which item was added, removed, or changed.

6=>What is conditional rendering?
=>Conditional rendering means showing different UI based on a condition.

In this project, I used it to show an empty message when there are no technologies in the stack.

7=> How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

=>A parent sends data to a child using props.

<StackCard
  stackTech={stackTech}
  handleRemove={handleRemove}
/>

Here, stackTech and handleRemove are passed from the parent to the child.

The child can send something back by calling a function received through props.

For example:

<button onClick={() => handleRemove(stackTech.id)}>
Remove
</button>
