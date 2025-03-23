<template>
  <div class="d-flex justify-content-between align-items-center">
    <div class="form-group fs has-search d-flex align-items-center me-2 text-muted">
      <span class="material-symbols-outlined form-control-feedback">search</span>
      <input type="search" class="form-control" placeholder="Find user..." />
    </div>
    <button class="btn btn-primary d-flex align-items-center">
      <span class="material-symbols-outlined me-2">add</span>
      Add new
    </button>
  </div>
  <div class="table-responsive">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Last</th>
          <th scope="col">Last</th>
          <th scope="col">Last</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>Otto</td>
          <td>Otto</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>Thornton</td>
          <td>Thornton</td>
          <td>Thornton</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>