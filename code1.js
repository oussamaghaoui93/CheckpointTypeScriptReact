import React from 'react';

// Step 1: Define a type for the props
// We specify that the 'name' prop should be of type 'string'
type GreetingProps = {
    name: string;
};

// Step 2: Use the GreetingProps type as the props type for the component
const Greeting: React.FC<GreetingProps> = ({ name }) => {
    return <div>Hello, {name}!</div>;
};

export default Greeting;
