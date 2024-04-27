import React from 'react'

function Event() {
  return (
    <div>
      <div className="Events-section_home">
        <div className="title-section_home">
          <h1> Events & Programs</h1>
          {/* <div className="vertical-line"></div> */}

        </div>
        <div className="event-section_home">
          <div className="event-section_item">
            <div className="img-event">
              <img src="assets/images/arts/art7.jpeg"></img>
            </div>
            <div className="content-event">
              <div className="time-event">AUGUST 18</div>
              <div className="horizontal-linetime"></div>
              <div className="name-event">Peasant Scenes And Landscapes</div>
              <div className="demo-event">The exhibition is made possible by the Laura & C. Arnold Douglas Foundation.</div>
            </div>

          </div>
          <div className="event-section_item">
            <div className="content-event">
              <div className="time-event">AUGUST 18</div>
              <div className="horizontal-linetime"></div>
              <div className="name-event">Peasant Scenes And Landscapes</div>
              <div className="demo-event">The exhibition is made possible by the Laura & C. Arnold Douglas Foundation.</div>
            </div>
            <div className="img-event">
              <img src="assets/images/arts/art9.jpeg"></img>
            </div>

          </div>
          <div className="event-section_item">
            <div className="img-event">
              <img src="assets/images/arts/art10.jpeg"></img>
            </div>
            <div className="content-event">
              <div className="time-event">AUGUST 20 </div>
              <div className="horizontal-linetime"></div>
              <div className="name-event">Rojo Y Negro - Latin American Art</div>
              <div className="demo-event">The exhibition is made possible by the Laura & C. Arnold Douglas Foundation.</div>
            </div>

          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Event
