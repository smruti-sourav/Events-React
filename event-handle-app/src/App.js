import './App.css';
import WindowEvents from './Components/WindowEvents';
import MouseEvents from './Components/Mouse Events';
import KeyboardEvents from './Components/KeyboardEvents';
import FormEvents from './Components/FormEvents';
import StorageEvents from './Components/StorageEvents';
import MediaEvents from './Components/MediaEvents';
import DragEvents from './Components/DragEvents';
import ClipboardEvents from './Components/ClipboardEvents';
function App() {
  return (
    <div>
        <WindowEvents />
        <MouseEvents />
        <KeyboardEvents />
        <FormEvents />
        <StorageEvents />
        <MediaEvents />
        <DragEvents />
        <ClipboardEvents />
    </div>
  );
}

export default App;
