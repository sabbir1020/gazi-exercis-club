import React from "react";
import "./Blogs.css";
const Blogs = () => {
  return (
    <div className="blogs-container">
      <h4>How does react work ?</h4>
      <p>
        It is a component-based, open-source front-end library that is in charge
        of the application’s view layer. While it creates basic views for every
        state in the project, when the data changes, the framework also updates
        and renders the appropriate component promptly. With the declarative
        method, debugging becomes easy which in turn makes the code more
        predictable.
      </p>
      <h4>Difference between props and state?</h4>
      <p>
        <strong>Props</strong> The Data is passed from one component to
        another.It is Immutable (cannot be modified).Props can be used with
        state and functional components.Props are read-only. <br />
        <strong>State</strong> The Data is passed within the component only.It
        is Mutable ( can be modified).State can be used only with the state
        components/class component (Before 16.0).State is both read and write.
      </p>
      <h4>What is the use of useEffect other than loading data?</h4>
      <p>
        We can use useEffect to filter an array "on the fly" by typing letters
        into an input element. To do so, we will need to use a state to save the
        input.
      </p>
    </div>
  );
};

export default Blogs;
