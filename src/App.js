import Footer from "./components/Footer/Footer";
import TaskList from "./components/TaskList/TaskList";
import Nav from "./components/Nav/Nav";

function App() {
    return (
        <div className="App">
            <Nav />
            <TaskList />
            <Footer />
        </div>
    );
}

export default App;
