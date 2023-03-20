import ReactDOM from 'react-dom';

// import ReactJs components
import Memory from '../components/memory.jsx';

/*
* create React root element and insert it into document
*/
const bootstrapReact =
  () => ReactDOM.render(
            <Memory />,
            document.getElementById('insertReactHere')
        );


window.addEventListener('DOMContentLoaded', bootstrapReact );


console.log('le bundle a été généré !');
