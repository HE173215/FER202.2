import * as React from "react";
import reverse from "./reverse";
import 'bootstrap/dist/css/bootstrap.min.css';

class MyList extends React.Component {
  state = {
    items: ["Angular", "Ember", "React"],
  };

  onReverseClick = reverse.bind(this);

  render() {
    const {
      state: { items },
      onReverseClick,
    } = this;

    return (
      <section>
        <button className="btn btn-primary" onClick={onReverseClick}>Reverse </button>
        <ul className="list-group">
          {items.map((v, i) => (
            <li key={i} className="list-group-item">{v}</li>
          ))}
        </ul>
      </section>
    );
  }
}

export default MyList;