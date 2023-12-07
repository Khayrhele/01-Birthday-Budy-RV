import { useState } from 'react';
import data from './data';
import List from './List';
const App = () => {
  console.log(data);
  const [people, setPeople] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>{people.length} Birthday Reminder</h3>
        <List people={people} />
        <button
          type="button"
          className="btn btn-block"
          onClick={() => setPeople([])}
        >
          Clear all
        </button>
      </div>
    </main>
  );
};
export default App;
