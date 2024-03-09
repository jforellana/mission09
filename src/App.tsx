import React from "react";
import "./App.css";
import basketball from "./CollegeBasketballTeams.json";

function HeadSection() {
  return (
    <div className="Header">
      <h1>Welcome to the basketball site!</h1>
      <p>This is site contains information about NCAA's March Madness</p>
    </div>
  );
}

function BData() {
  return (
    <div className="data1">
      <div className="data1Title">INFORMATION FOR EACH TEAM</div>
      <div className="data">
        {basketball &&
          basketball.teams.map((r) => {
            return (
              <div className="Card">
                <div>
                  <div className="SName">School Name</div>
                  {r.school}
                </div>
                <div>
                  <div className="SName">Mascot Name</div>
                  {r.name}
                </div>
                <div>
                  <div className="SName">Location</div>
                  {r.city}, {r.state}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

function Teams() {
  return (
    <div className="teams1">
      <div className="data1Title">LIST OF ALL TEAMS</div>
      <div className="teamList">
        {basketball &&
          basketball.teams.map((r) => {
            return <div>{r.name}</div>;
          })}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="body">
      <HeadSection />
      <div className="Flex">
        <BData />
        <Teams />
      </div>
    </div>
  );
}

export default App;
