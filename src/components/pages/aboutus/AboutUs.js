import React from "react";

function AboutUs() {
  return (
    <div>
      <link rel="stylesheet" href="assets/css/about.css" />

      <div className="About-page">
        <div className="aboutUs-section">
          <div className="main-about">
            <h2 className="title-about_section">About Us</h2>
            <div className="content-about_section">
              <p>
                Welcome to Art Gallery - the realm of wonder and ceaseless
                creativity. At Art Gallery, we are passionate about exploring
                and experiencing unique and diverse artworks from around the
                world.
              </p>
              <div className="more-info">
                <div>
                  At Art Gallery, we're dedicated to weaving a tapestry of
                  cultural convergence through the language of art. We celebrate
                  talent, curate exquisite experiences, and invite all to
                  explore the boundless beauty of creativity with us.
                </div>
                <div>
                  Art Gallery is more than just an art display space; it is a
                  community where everyone can find passion and inspiration in
                  art. Our team consists of art experts, event organizers, and
                  art enthusiasts who are eager to share their passion and
                  knowledge with you.
                </div>
                <div>
                  Join us at Art Gallery to embark on a journey of artistic
                  exploration, to seek inspiration, and to create beautiful
                  memories in our world of art.
                </div>
                <div>Sir Marcus McKellen Founder & Artist (HFC)</div>
              </div>
            </div>
          </div>
          <div className="img-about">
            <img src="assets/images/about.jpeg"></img>
          </div>
        </div>
        <div className="staff-section">
        
          <div className="main-staff_section">
            <h2 className="title-about_section">Staff & Board</h2>
            

            <p>
              Art Gallery is led by co-CEOs, Artistic Director John Crawford and
              Executive Producer William Thompson. The Executives are supported
              by the core artistic team: Samuel Olivier (Resident Dramaturg),
              Jordan Tyson (Associate Producer), Martin Scott (Director in
              Residence) and Susan Brown (Resident Artist).
            </p>
            <span>
              BOARD MEMBERS / Adam Auster (Chair), Ben Miller (Deputy Chair),
              Heidi Lana AM, Andrew Johnson QC, Ronnie Brown, Michelle May, John
              Stevenson AM, Angelina Rey, Amy Tyson, Martin Bell, Tasha Rufus,
              Laura Lanzeti AO & Rodrigo Gomez.
            </span>
            <div className="staff-img">
               <img src="assets/images/team-staff.jpeg"></img>
          </div>
            <div className="more-info">
              <div className="left-sec">
                <div>
                  <h3>ARTISTIC & PROGRAMMING</h3>
                  <p>
                    ARTISTIC DIRECTOR & CO-CEO / John Crawford EXECUTIVE
                    PRODUCER & CO-CEO / William Thompson RESIDENT ARTIST /
                    Samuel Olivier DIRECTOR IN RESIDENCE / Martin Scott RESIDENT
                    ARTIST / Susan Brown RESIDENT DESIGNER / Tony Rufus PRODUCER
                    / Andrew McNamara ASSOCIATE PRODUCER / Jordan Tyson COMPANY
                    MANAGER / Amanda Fields
                  </p>
                </div>
                <div>
                  <h3>FINANCE & ADMINISTRATION</h3>
                  <p>
                    FINANCE MANAGER / Adam Scarlett FINANCE ADMINISTRATOR /
                    Debbie Fox GENERAL MANAGER / Liz Gaudini
                  </p>
                </div>
              </div>
              <div className="right-sec">
                <div>
                  <h3>PRODUCTION</h3>
                  <p>
                    PRODUCTION MANAGER / Ernst Pynchon WORKSHOP MANAGER / Daniel
                    Auster TECHNICAL MANAGER / William Twain OPERATIONS MANAGER
                    / Tony Miller HEAD TECHNICIAN / Jason Lanzeti HEAD CARPENTER
                    / Michelle Lana
                  </p>
                </div>
                <div>
                  <h3>EDUCATION</h3>
                  <p>YOUTH & EDUCATION MANAGER / Tatiana Alexis</p>
                </div>
                <div>
                  <h3>VENUE MANAGEMENT</h3>
                  <p>
                    VENUE MANAGER / James Bell FRONT OF HOUSE MANAGERS / Harry
                    Olivier & Marta Crawford
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
