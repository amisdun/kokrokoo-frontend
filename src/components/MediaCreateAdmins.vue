<template>
	<div>
	<div id="wrapper">

    <!-- Sidebar -->
    <ul class="navbar-nav bg-gradient-dark sidebar sidebar-dark accordion" id="accordionSidebar">

      <!-- Sidebar - Brand -->
      <router-link class="sidebar-brand d-flex align-items-center justify-content-center" to="/media-dashboard">
        <div class="sidebar-brand-icon">
         <img src="../../src/assets/image/kokro-yellow.png" class="img-fluid" alt="">
        </div>
      </router-link>
      <!-- Divider -->
      <hr class="sidebar-divider my-0">

      <!-- Nav Item - Dashboard -->
      <li class="nav-item active">
        <router-link class="nav-link" to="/media-dashboard">
        <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </router-link>
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider">

      <!-- Heading -->
      <div class="sidebar-heading">
        Interface
      </div>

      <!-- Nav Item - Pages Collapse Menu -->
      <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
          <i class="fas fa-fw fa-credit-card"></i>
          <span>Rate Card</span>
        </a>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Rate cards:</h6>
            <router-link class="collapse-item" to="/Media/RateCards">Create</router-link>
            <router-link class="collapse-item" to="/Media/ViewCards">View Cards</router-link>
            <router-link class="collapse-item" to="/Media/CreateFromExisting">Create From Existing</router-link>
          </div>
        </div>
      </li>

      <!-- Nav Item - Utilities Collapse Menu -->
      <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
          <i class="fas fa-fw fa-wrench"></i>
          <span>Subscriptions</span>
        </a>
        <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Subscriptions Utilities:</h6>
            <router-link class="collapse-item" to="/Media/Subscriptions">View Subscriptions</router-link>
          </div>
        </div>
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider">

      <!-- Heading -->
      <div class="sidebar-heading">
        Addons
      </div>

      <!-- Nav Item - Pages Collapse Menu -->
      <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
          <i class="fas fa-fw fa-chart-line"></i>
          <span>Transactions</span>
        </a>
        <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Transactions</h6>
            <router-link class="collapse-item" to="/Media/Transactions">View Transactions</router-link>
          </div>
        </div>
      </li>

      <!-- Nav Item - Charts -->
      <li class="nav-item">
        <a class="nav-link collapsed" data-toggle="collapse" data-target="#collapseReport" aria-expanded="true" aria-controls="collapseReport">
          <i class="fas fa-fw fa-newspaper"></i>
          <span>Reports</span></a>
          <div id="collapseReport" class="collapse" aria-labelledby="headingReport" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Reports</h6>
            <router-link class="collapse-item" to="/Media/DailyReports">Daily Reports</router-link>
            <router-link class="collapse-item" to="/Media/GeneralReports">General Reports</router-link>
          </div>
        </div>
      </li>

      <!-- Nav Item - Tables -->
      <li class="nav-item">
        <a class="nav-link collapsed" data-toggle="collapse" data-target="#collapseAdmin" aria-expanded="true" aria-controls="collapseAdmin">
          <i class="fas fa-fw fa-users"></i>
          <span>Users</span></a>
          <div id="collapseAdmin" class="collapse" aria-labelledby="headingAdmin" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Users</h6>
            <router-link class="collapse-item" to="/Media/ViewAdmins">View Users</router-link>
            <router-link class="collapse-item" to="/Media/CreateAdmins">Create new User</router-link>
            <router-link class="collapse-item" to="/Media/AdminActivities">User Activities</router-link>
          </div>
        </div>
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider d-none d-md-block">

      <!-- Sidebar Toggler (Sidebar) -->
      <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
      </div>

    </ul>
    <!-- End of Sidebar -->

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">

      <!-- Main Content -->
      <div id="content">

        <!-- Topbar -->
        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

          <!-- Sidebar Toggle (Topbar) -->
          <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
            <i class="fa fa-bars"></i>
          </button>

          <!-- Topbar Search -->
          <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div class="input-group">
              <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2">
              <div class="input-group-append">
                <button class="btn btn-primary" type="button">
                  <i class="fas fa-search fa-sm"></i>
                </button>
              </div>
            </div>
          </form>

          <!-- Topbar Navbar -->
          <ul class="navbar-nav ml-auto">

            <!-- Nav Item - Search Dropdown (Visible Only XS) -->
            <li class="nav-item dropdown no-arrow d-sm-none">
              <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-search fa-fw"></i>
              </a>
              <!-- Dropdown - Messages -->
              <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                <form class="form-inline mr-auto w-100 navbar-search">
                  <div class="input-group">
                    <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2">
                    <div class="input-group-append">
                      <button class="btn btn-primary" type="button">
                        <i class="fas fa-search fa-sm"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>

            <!-- Nav Item - Alerts -->
            <li class="nav-item dropdown no-arrow mx-1">
              <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-bell fa-fw"></i>
                <!-- Counter - Alerts -->
                <span class="badge badge-danger badge-counter">3+</span>
              </a>
              <!-- Dropdown - Alerts -->
              <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
                <h6 class="dropdown-header">
                  Alerts Center
                </h6>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="mr-3">
                    <div class="icon-circle bg-primary">
                      <i class="fas fa-file-alt text-white"></i>
                    </div>
                  </div>
                  <div>
                    <div class="small text-gray-500">December 12, 2019</div>
                    <span class="font-weight-bold">A new monthly report is ready to download!</span>
                  </div>
                </a>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="mr-3">
                    <div class="icon-circle bg-success">
                      <i class="fas fa-donate text-white"></i>
                    </div>
                  </div>
                  <div>
                    <div class="small text-gray-500">December 7, 2019</div>
                    $290.29 has been deposited into your account!
                  </div>
                </a>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="mr-3">
                    <div class="icon-circle bg-warning">
                      <i class="fas fa-exclamation-triangle text-white"></i>
                    </div>
                  </div>
                  <div>
                    <div class="small text-gray-500">December 2, 2019</div>
                    Spending Alert: We've noticed unusually high spending for your account.
                  </div>
                </a>
                <a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
              </div>
            </li>

            <!-- Nav Item - Messages -->
            <li class="nav-item dropdown no-arrow mx-1">
              <a class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-envelope fa-fw"></i>
                <!-- Counter - Messages -->
                <span class="badge badge-danger badge-counter">7</span>
              </a>
              <!-- Dropdown - Messages -->
              <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="messagesDropdown">
                <h6 class="dropdown-header">
                  Message Center
                </h6>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="dropdown-list-image mr-3">
                    <img class="rounded-circle" src="https://source.unsplash.com/fn_BT9fwg_E/60x60" alt="">
                    <div class="status-indicator bg-success"></div>
                  </div>
                  <div class="font-weight-bold">
                    <div class="text-truncate">Hi there! I am wondering if you can help me with a problem I've been having.</div>
                    <div class="small text-gray-500">Emily Fowler · 58m</div>
                  </div>
                </a>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="dropdown-list-image mr-3">
                    <img class="rounded-circle" src="https://source.unsplash.com/AU4VPcFN4LE/60x60" alt="">
                    <div class="status-indicator"></div>
                  </div>
                  <div>
                    <div class="text-truncate">I have the photos that you ordered last month, how would you like them sent to you?</div>
                    <div class="small text-gray-500">Jae Chun · 1d</div>
                  </div>
                </a>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="dropdown-list-image mr-3">
                    <img class="rounded-circle" src="https://source.unsplash.com/CS2uCrpNzJY/60x60" alt="">
                    <div class="status-indicator bg-warning"></div>
                  </div>
                  <div>
                    <div class="text-truncate">Last month's report looks great, I am very happy with the progress so far, keep up the good work!</div>
                    <div class="small text-gray-500">Morgan Alvarez · 2d</div>
                  </div>
                </a>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="dropdown-list-image mr-3">
                    <img class="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60" alt="">
                    <div class="status-indicator bg-success"></div>
                  </div>
                  <div>
                    <div class="text-truncate">Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...</div>
                    <div class="small text-gray-500">Chicken the Dog · 2w</div>
                  </div>
                </a>
                <a class="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
              </div>
            </li>

            <div class="topbar-divider d-none d-sm-block"></div>

            <!-- Nav Item - User Information -->
            <li class="nav-item dropdown no-arrow">
              <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="mr-2 d-none d-lg-inline text-gray-600 small">Valerie Luna</span>
                <img class="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/60x60">
              </a>
              <!-- Dropdown - User Information -->
              <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                <a class="dropdown-item" href="#">
                  <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                  Profile
                </a>
                <a class="dropdown-item" href="#">
                  <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                  Settings
                </a>
                <a class="dropdown-item" href="#">
                  <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                  Activity Log
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                  <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                  Logout
                </a>
              </div>
            </li>

          </ul>

        </nav>
        <div v-show="preloader">
  <div class="animation animation-rotating-square"></div>
</div>
       <div class="alert alert-info m-5 text-center" v-show="show_admin" role="alert">
            {{admin_error}}
        </div>
       <div class="card shadow m-5 w-75 text-center" :class="[admin_role === 'super_admin'? 'd-block':'d-none']">
        <div class="alert" :class="[alert === 'success'? 'alert-success':'alert-danger']" v-show="show_alert" role="alert">
            {{alert_message}}
        </div>
          <form class="m-5 w-auto text-center">
  <div class="form-group">
    <input type="text" class="form-control" v-model="name" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name">
    <span class="text-danger">{{error1}}</span>
  </div>
  <div class="form-group">
    <input type="email" class="form-control" v-model="email" id="exampleInputPassword1" placeholder="Input email">
    <span class="text-danger">{{error2}}</span>
  </div>
  <div class="form-group">
    <input type="tel" class="form-control" v-model="phone_number1" id="exampleInputPassword1" placeholder="Phone number one">
    <span class="text-danger">{{error3}}</span>
  </div>
  <div class="form-group">
    <input type="tel" class="form-control" v-model="phone_number2" id="exampleInputPassword1" placeholder="Phone number two">
    <span class="text-danger">{{error4}}</span>
  </div>
  <div class="form-group">
    <input type="text" class="form-control" v-model="title" placeholder="Input title">
    <span class="text-danger">{{error5}}</span>
  </div>
  <div class="form-group">
    <input type="text" class="form-control" v-model="role" placeholder="Input role">
    <span class="text-danger">{{error6}}</span>
  </div>
  <div class="spinner-grow text-success text-center" v-show="loading" role="status">
  <span class="sr-only">Loading...</span>
</div><br>
  <button type="submit" class="btn btn-primary" @click.prevent="create_staff">Create Staff</button>
</form>
       </div>
    </div>
</div>
</div>

	<footer class="sticky-footer bg-dark">
        <div class="container my-auto">
          <div class="copyright text-center my-auto">
            <span>Copyright &copy; Your Website 2020</span>
          </div>
        </div>
      </footer>

</div>
</template>

<script>
import validator from 'validator'
import axios from 'axios'
	export default {
		name: "MediaCreateAdmins",
		data(){
			return {
				error1: "",
				error2: "",
				error3: "",
        error4: "",
        error5: "",
        error6: "",
        name: "",
        email: "",
        phone_number1: "",
        phone_number2: "",
        title: "",
        role: "",
        alert: "",
        alert_message: "",
        show_alert: false,
        loading: false,
        token: "",
        admin_role: "",
        preloader: true,
        show_admin: false,
        admin_error: ""
			}
		},
    methods: {
      create_staff(){
        if(validator.isEmpty(this.name)) this.error1 = "Name is requuired";
        else this.error1 = "";
        if(validator.isEmpty(this.email)) this.error2 = "Email is required";
        else{
          if(!validator.isEmail(this.email)) this.error2 = "Invalid email format";
          else this.error2 = ""
        }
        if(validator.isEmpty(this.phone_number1)) this.error3 = "first telephone number";
        else{
          if(!validator.isMobilePhone(this.phone_number1,'en-GH')) this.error3 = "Invalid phone Number";
          else this.error3 = ""
        }
        if(!validator.isEmpty(this.phone_number2)){
          if(!validator.isMobilePhone(this.phone_number2,'en-GH')) this.error4 = "Invalid phone Number";
          else this.error4 = ""
        }
        if(validator.isEmpty(this.title)) this.error5 = "Title required";
        else this.error5 = "";
        if(validator.isEmpty(this.role)) this.error6 = "Role required";
        else this.error6 = "";

        if(
          !validator.isEmpty(this.name) &&
          !validator.isEmpty(this.email) &&
          validator.isEmail(this.email) &&
          validator.isMobilePhone(this.phone_number1,'en-GH') &&
          !validator.isEmpty(this.phone_number1) &&

          !validator.isEmpty(this.title) &&
          !validator.isEmpty(this.role)
          ){
          this.loading = true
        let self = this
        setTimeout(function(){
          self.create_admin_api(self.name,self.email,self.phone_number1,self.phone_number2,self.title,self.role)
        })
        }
      },
      async create_admin_api(name,email,phone_number1,phone_number2,title,role){
        try {
          this.show_alert = false
          // statements
          let data = {
            name: name,
            email: email,
            phone1: phone_number1,
            phone2: phone_number2,
            title: title,
            role: role
          }
          let new_admin = await axios({
            url: "https://media-kokrokooad.herokuapp.com/api/super-admin/add-new/staff",
            method: "POST",
            data: data,
            headers: {
              'Authorization': 'Bearer ' + this.token
            }
          })

          if(new_admin.status === 200){
            this.loading = false
            this.alert = "success"
            this.alert_message = "New Staff Created"
            this.show_alert = true
          }
        } catch(e) {
          // statements
          console.log(e);
          console.log(e.response)
          if(e.response.status === 422){
            this.loading = false
            this.alert = "error"
            this.alert_message = e.response.data.message
            this.show_alert = true
          }
        }
      }
    },
		mounted(){

		},
    beforeCreate(){
      if(!this.$session.exists()){
        this.$router.push({path: '/'})
      }
	},
  async created(){
    let token = this.$session.get('media-jwt')
    this.token = token

    try {
      // statements
      let user = await axios({
        url: "https://media-kokrokooad.herokuapp.com/api/user",
        method: "GET",
        headers: {
          'Authorization': 'Bearer ' + this.token
        }
      })

      if(user.status === 200){
        this.admin_role = user.data.user.role
        if(this.admin_role !== "super_admin"){
          this.preloader = false
          this.admin_error = "Unauthorized user access"
          this.show_admin = true
        }
        this.preloader = false
      }
    } catch(e) {
      // statements
      console.log(e);
    }
  }
}

</script>

<style scoped>


</style>