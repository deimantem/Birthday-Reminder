import React, { useState } from 'react';
import data from './data';
import List from './List';
import {getCurrentDate} from './utils';


function App() {
    const [people, setPeople] = useState(data)
    return <main>
        <section className="container">
       
      <div className="date">Today is {getCurrentDate()}</div>

            <h3>{people.length} Birthdays today</h3>
            <List people={people}/>
            <button onClick={() => setPeople([])}>Clear All</button>
        </section>
    </main>
}

export default App;