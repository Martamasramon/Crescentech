import React, {Component} from "react";

class TestHistory extends Component {

  render() {
    return (
      <div id="history">
        
        <div className="heading">
            <h1>Test History</h1>
        </div>

        <div className="body">
            <h2>Test 3 (20/10/2019)</h2>
            <p>All dead soon</p>
            <p>Your fault, I told you to pray to the gods...</p>

            <h2>Test 2 (10/10/2019)</h2>
            <p>No Fusarium in sight!</p>
            <p>You got lucky this time, thank the gods or they will be mad.</p>

            <h2>Test 1 (3/10/2019)</h2>
            <p>There's Fusarium in these plants...</p>
            <p>Sorry baby :(</p>
        </div>

    </div>
    );
  }
}

export default TestHistory;
