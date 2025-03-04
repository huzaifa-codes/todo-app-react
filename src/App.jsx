import React, { useRef, useState } from 'react';
import './index.css'; // Assuming you have your CSS styles in index.css

export default function App() {
  const title = useRef();
  const description = useRef();
  const [deta, setDeta] = useState([]);

  const submit = (e) => {
    e.preventDefault();
    console.log(title.current.value);
    console.log(description.current.value);

    deta.push({
      title: title.current.value,
      description: description.current.value,
      id: Date.now(),
    });
    setDeta([...deta]);

    title.current.value = '';
    description.current.value = '';
  };

  function deletes(index) {
    deta.splice(index, 1);
    setDeta([...deta]);
  }

  function edit(index) {
    let prompt = window.prompt('Enter value: ');
    deta[index].title = prompt;
    setDeta([...deta]);
  }

  return (
    <>
      <div className="container">
        <form onSubmit={submit} className="form">
          <input
            type="text"
            placeholder="Enter your title"
            ref={title}
            className="input"
          />
          <input
            type="text"
            placeholder="Enter your description"
            ref={description}
            className="input"
          />
          <button className="submit-btn">Submit</button>
        </form>

        <div className="items-container">
          {deta.length <= 0 ? (
            <p className="no-items">No items found</p>
          ) : (
            deta.map((item, index) => (
              <div key={item.id} className="item">
                <h1 className="item-title">{item.title}</h1>
                <p className="item-description">{item.description}</p>
                <div className="item-actions">
                  <button
                    onClick={() => deletes(index)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => edit(index)}
                    className="edit-btn"
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}



