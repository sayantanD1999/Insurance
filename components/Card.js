import React from 'react'

function Card() {
  return (
    <>
    <div className="row d-flex justify-content-between">
      <div className="col-6 m-1">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <a href="#" className="btn btn-primary">Go somewhere</a></button>
          </div>
        </div>
      </div>
      
      <div className="col-6 m-1">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">


            <a href="#" className="btn btn-primary">Go somewhere</a></button>
          </div>
        </div>
      </div>
      <div className="col-6 m-1">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">


            <a href="#" className="btn btn-primary">Go somewhere</a></button>
          </div>
        </div>
      </div>
      <div className="col-6 m-1">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">


            <a href="#" className="btn btn-primary">Go somewhere</a></button>
          </div>
        </div>
      </div>
      
      </div>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</>
  )
}
export default Card;