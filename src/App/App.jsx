import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import Child from './Child';

class App extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        <Router>
                            <div>
                                <PrivateRoute exact path="/" component={HomePage} />
                                <Route path="/login" component={LoginPage} />
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

// Forward example
// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.textInput = React.createRef();
//         this.focusTextInput = this.focusTextInput.bind(this);
//       }

//       focusTextInput() {
//         // Explicitly focus the text input using the raw DOM API
//         // Note: we're accessing "current" to get the DOM node
//         this.textInput.current.focus();
//       }

//     render() {
//         return (
//             <div className="jumbotron">
//                 <div className="container">
//                     <div className="col-sm-8 col-sm-offset-2">
//                         <input
//                             type="button"
//                             value="Focus the text input"
//                             onClick={this.focusTextInput}
//                         />
//                         <Child ref={this.textInput}></Child>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }


export { App }; 
