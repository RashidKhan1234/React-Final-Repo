import React from 'react';

const HelloFromJSX= () => {
return React.createElement('div',{id: 'rash' , 
className:'rash-class'},
React.createElement('h1',{id:'rash-h1'},'Hello from JSX')

)
}
export default HelloFromJSX