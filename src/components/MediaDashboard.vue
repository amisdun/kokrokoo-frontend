<template>
	<div id="page-top">
		<nav class="navbar navbar-expand navbar-dark bg-dark static-top">

    <a class="navbar-brand mr-1" href="admin_dashboard.html">ADMIN | Dashboard</a>

    <button class="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle" href="#">
      <i class="fas fa-bars"></i>
    </button>

    <!-- Navbar Search -->
    <form class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2">
        <div class="input-group-append">
          <button class="btn btn-primary" type="button">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </form>
    <div class="float-right">
      <a href="results_admin.html" class="btn btn-primary float-right">view results</a>
  </div>

    <!-- Navbar -->
    <ul class="navbar-nav ml-auto ml-md-0">
      <li class="nav-item dropdown no-arrow">
        <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Admin
          <i class="fas fa-user-circle fa-fw"></i>
        </a>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
          <a class="dropdown-item" href="#" id="logout">Logout</a>
        </div>
      </li>
    </ul>

  </nav>

  <div id="wrapper">

    <!-- Sidebar -->
    <ul class="sidebar navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="admin_dashboard.html">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fas fa-fw fa-user-friends"></i>
          <span>Candidates</span>
        </a>
        <div class="dropdown-menu" aria-labelledby="pagesDropdown">
          <h6 class="dropdown-header">candidates :</h6>
          <a class="dropdown-item" href="register_src_president.html">SRC president</a>
          <a class="dropdown-item" href="register_src_financial.html">SRC financial</a>
          <a class="dropdown-item" href="register_src_general.html">SRC general</a>
          <a class="dropdown-item" href="register_nugs_financial.html">LNUGS financial</a>
          <a class="dropdown-item" href="register_nugs_president.html">LNUGS president</a>
          <a class="dropdown-item" href="register_nugs_general.html">LNUGS general</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="students.html">
          <i class="fas fa-fw fa-user-alt-slash"></i>
          <span>Students</span></a>
      </li>
    </ul>
</div>

	<footer class="sticky-footer">
        <div class="container my-auto">
          <div class="copyright text-center my-auto">
            <span>Copyright © Your Website 2019</span>
          </div>
        </div>
      </footer>
</div>
</template>

<script>
	export default {
		name: "MediaDashboard",
		data(){
			return {

			}
		},
		mounted(){

		}
	}


</script>

<style scoped>
	#wrapper #content-wraper{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  overflow-x: hidden;
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 80px;
}

</style>