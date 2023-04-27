import React from 'react';

function PopupComponent(props) {
  

  return (props.trigger) ? (
    <div>
      <h1>Pop-up Content</h1>
      <p>Here's some data:</p>
        {props.children}
    </div>
  ) : "";
}

export default PopupComponent;
