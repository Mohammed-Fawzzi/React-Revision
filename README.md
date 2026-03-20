# React Revision - From Scratch

## Goal

Comprehensive revision and explanation of React concepts.

## Concepts

1 - Class Components vs Function Components

* Class Components use ES6 classes and lifecycle methods like componentDidMount
* Function Components use Hooks such as useState and useEffect
* Modern React mainly depends on Function Components


2 - Props

* Used to pass data from parent to child components
* Props are read-only (immutable)
* Help build reusable components


3 - Virtual DOM

* A lightweight copy of the real DOM
* React compares changes using diffing algorithm
* Updates only necessary parts for better performance


4 - Component Lifecycle

* Phases: Mount, Update, Unmount
* In Function Components:

  * useEffect replaces lifecycle methods
* Example:

  * componentDidMount → useEffect(() => {}, [])


5 - Routing

* Used for navigation in Single Page Applications
* Implemented using React Router
* Main concepts:

  * BrowserRouter
  * Routes
  * Route
  * Nested Routes
  * NavLink


6 - Context API

* Used for global state management
* Alternative to Redux in simple cases
* Consists of:

  * createContext
  * Provider
  * useContext


7 - React Query

* Used for handling API data
* Features:

  * Data fetching
  * Caching
  * Synchronization
* Reduces need for useEffect and manual state handling


8 - React Hooks

* useState → state management
* useEffect → side effects
* useMemo → optimize calculations
* useCallback → memoize functions
* useRef → access DOM & store values


9 - TypeScript with React

* Improves type safety
* Reduces runtime errors
* Helps build scalable applications


10 - React Optimization

* React.memo → prevent unnecessary re-renders
* useMemo → optimize expensive calculations
* useCallback → stabilize function references
* Code splitting & lazy loading
