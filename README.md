
# State

### Review
- Create a react app called people-app:
- Create a class-based Person component that renders a name and an age
- From the top-level component, render 2 Person components passing in a different name and age for each via props
- Ensure your name and age displays correctly in each child component

### `Stateful` Component
- Add `this.state` to your constructor
- Define two properties of state, name and age
- Set the value of the name property to the name passed into the component (this.props.name)
- Set the value of the age property to the age passed into the component (this.props.age)
- Update the age property of state to five more than the age passed in a lifecycle method such as `componentDidMount()`

### Events
- Comment out the lifecycle method - we will not update the state in an event!
- Add a button to the Person component underneath the tags displaying the name and age
- Define and event handler arrow function above the render method called `addOne`
- Pass this method in an `onClick` event listener in the button  

### Lifting State
- Create a parents component called `AppContainer.jsx`
- DELETE `Person` component from `App.js` and any references to `Person` component
- Render `Person` component in `AppContainer` component passing in the same attributes
- Define a property of state in `AppContainer` called totalOfAges and set the value to 0
