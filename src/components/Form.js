// import React, { Component } from "react";

// class Form extends Component {
//   constructor(props) {
//     super(props);
//     state = {
//       toDo:"",
//       priority: "high",
//     };
//   }

//   handleChange = (event) => {
//     this.setState({ toDo: event.target.value });
//   };

//   handlePriority = (event) => {
//     this.setState({ priority: event.target.value });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     this.props.addTask(this.state.toDo, this.state.priority);
//     this.setState({ toDo: "", priority: "high" });
//   };

//   render(props) {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <div className="form-group">
//           <label>Todo*</label>

//           <input
//             type="text"
//             className="input"
//             placeholder="add task"
//             value={this.state.toDo}
//             onChange={this.handleChange}
//           />

//           <label>Priority </label>

//           <select
//             className="select"
//             value={this.state.priority}
//             onChange={this.handlePriority}
//           >
//             <option value="high">High</option>
//             <option value="medium">Medium</option>
//             <option value="low">Low</option>
//           </select>
//         </div>

//         <div>
//           <button
//             type="submit"
//             className="add-button"
//             disabled={!this.state.toDo || !this.state.priority}
//           >
//             Add Task
//           </button>
//         </div>
//       </form>
//     );
//   }
// }

// export default Form;

import React, { useState } from "react";
import useInput from "../hooks/UseInput";

function Form(props) {
  //const [toDo, setName] = useState("");
  //const [priority, setPriority] = useState("high");

  const [ toDo, bindToDo, resetToDo ] = useInput("");
  const [ priority, bindPriority, resetPriority ] = useInput("high");

  // function handleChange(e) {
  //   setName(e.target.value);
  // }
  // function handlePriority(e) {
  //   setPriority(e.target.value);
  // }

  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(toDo, priority);
    // setName("");
    // setPriority("high");
    resetToDo();
    resetPriority();
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Todo*</label>

        <input
          type="text"
          className="input"
          placeholder="add task"
          // value={toDo}
          // onChange={handleChange}
          {...bindToDo}
        />

        <label>Priority </label>

        <select
          className="select"
          // value={priority}
          // onChange={handlePriority}
          {...bindPriority}
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>

      <div>
        <button
          type="submit"
          className="add-button"
          disabled={!toDo || !priority}
        >
          Add Task
        </button>
      </div>
    </form>
  );
}

export default Form;
