import React from "react";

const  Books = () => {
    return(
         <div className='book'>
            <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
             rel="stylesheet"
             integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
            crossorigin="anonymous"
    />
        <div className="container-xl align-items-center">
        <div className="container py-4">
          <h5 className="text-center">
            Start Your Reading Adventure Today! <br />
            Begin exploring our collection now and embark on an exciting literary
            journey. Your next captivating read awaits!
            <hr />
          </h5>
        </div>
      </div>
      {/* 1st line */}
      <div className="container-xl justify-content-center">
        <div className="container py-2">
          <div className="row g-4 py-2">
            <div className="col col-md-6 col-lg-3">
              <div className="card" style={{ width: "16rem" }}>
                <img
                  src={require(`./Photos/Harry1.webp`)}
                  className="card-img-top image-fluid"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text text-center">
                    Harry Potter &amp; the <br />
                    Philosopher's Stone
                  </p>
                  <button className="button2">Read now</button>
                </div>
             
              </div>
            </div>
            <div className="col col-md-6 col-lg-3">
              <div className="card" style={{ width: "16rem" }}>
                <img
                  src={require(`./Photos/Harry2.webp`)}
                  className="card-img-top image-fluid"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text text-center">
                    Harry Potter &amp; the <br />
                    Philosopher's Stone
                  </p>
                  <button className="button2">Read now</button>
                </div>
             
              </div>
            </div>
            <div className="col col-md-6 col-lg-3">
              <div className="card" style={{ width: "16rem" }}>
                <img
                  src={require(`./Photos/Harry3.webp`)}
                  className="card-img-top image-fluid"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text text-center">
                    Harry Potter &amp; the <br />
                    Philosopher's Stone
                  </p>
                  <button className="button2">Read now</button>
                </div>
             
              </div>
            </div>
            <div className="col col-md-6 col-lg-3">
              <div className="card" style={{ width: "16rem" }}>
                <img
                  src={require(`./Photos/Harry4.webp`)}
                  className="card-img-top image-fluid"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text text-center">
                    Harry Potter &amp; the <br />
                    Philosopher's Stone
                  </p>
                  <button className="button2">Read now</button>
                </div>
             
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 2nd line */}
      <div className="container-xl justify-content-center">
        <div className="container py-2">
          <div className="row g-4 py-2">
          <div className="col col-md-6 col-lg-3">
              <div className="card" style={{ width: "16rem" }}>
                <img
                  src={require(`./Photos/Harry5.webp`)}
                  className="card-img-top image-fluid"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text text-center">
                    Harry Potter &amp; the <br />
                    Philosopher's Stone
                  </p>
                  <button className="button2">Read now</button>
                </div>
             
              </div>
            </div>
            <div className="col col-md-6 col-lg-3">
              <div className="card" style={{ width: "16rem" }}>
                <img
                  src={require(`./Photos/Harry6.webp`)}
                  className="card-img-top image-fluid"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text text-center">
                    Harry Potter &amp; the <br />
                    Philosopher's Stone
                  </p>
                  <button className="button2">Read now</button>
                </div>
             
              </div>
            </div>
            <div className="col col-md-6 col-lg-3">
              <div className="card" style={{ width: "16rem" }}>
                <img
                  src={require(`./Photos/Harry7.webp`)}
                  className="card-img-top image-fluid"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text text-center">
                    Harry Potter &amp; the <br />
                    Philosopher's Stone
                  </p>
                  <button className="button2">Read now</button>
                </div>
             
              </div>
            </div>
            <div className="col col-md-6 col-lg-3">
              <div className="card" style={{ width: "16rem" }}>
                <img
                  src={require(`./Photos/Harry7B.jpg`)}
                  className="card-img-top image-fluid"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text text-center">
                    Harry Potter &amp; the <br />
                    Philosopher's Stone
                  </p>
                  <button className="button2">Read now</button>
                </div>
             
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
};
export default Books;