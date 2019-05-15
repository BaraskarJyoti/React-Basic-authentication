import React from 'react';
import logProps from '../testing/HocTest'

// forward ref
// const Child = React.forwardRef((props, ref) => (
//     <div>
//         <div className="jumbotron">
//             <input
//                 type="text"
//                 ref={ref}
//             />
//         </div>
//     </div>
//   ));

// forward ref with HOC.
const Child = (props) => (
    <div>
        <div className="jumbotron">
            <input
                type="text"
                ref={props.refToWrap}
            />
        </div>
    </div>
  )


// use of HOC.....child acting as a wrapped component
export default logProps(Child)
