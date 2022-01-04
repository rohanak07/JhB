import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-10">
            <img
              class="img-fluid rounded mb-5 mb-lg-0"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQstmFE6RC0jWyLTE4yqba03WfBSCwLvVK23w&usqp=CAU"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Welcome to a Hunt</h1>
            <p>
            Building this website would increase the demand of “SAFE HIRING PROCESS”. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;