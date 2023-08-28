import React from 'react';
// Import your CSS for styling
import './People.css';

const People = () => {
  return (
    <div className="meet-the-team">
      <h1>Meet the Team</h1>

      <section className="team-section">
        <h2>Principal Investigator (PI)</h2>
        <div className="team-members">
          {/* PI Members */}

          <div className="team-member">
            <img src="/images/Dev.jpg" alt="PI 1" />
            <p>Dev Niyogi</p>
          </div>

          {/* Add more PI members here */}
        </div>
      </section>

      <section className="team-section">
        <h2>Postdoctoral Researchers</h2>
        <div className="team-members">
          {/* Postdoc Members */}
          <div className="team-member">
            <img src="/images/Naveen.jpg" alt="Postdoc 1" />
            <p>Naveen Sudarshan</p>
          </div>

          <div className="team-member">
            <img src="/images/Manmeet.jpg" alt="Postdoc 1" />
            <p>Manmeet Singh</p>
          </div>

          
          {/* Add more postdoc members here */}
        </div>
      </section>

      <section className="team-section">
        <h2>Graduate Students</h2>
        <div className="team-members">
          {/* Grad Student Members */}
          <div className="team-member">
            <img src="/images/grad1.jpg" alt="Grad Student 1" />
            <p>John Doe</p>
          </div>
          {/* Add more graduate student members here */}
        </div>
      </section>
    </div>
  );
};

export default People;




