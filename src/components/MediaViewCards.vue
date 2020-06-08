<template>
	<div>
	<div id="wrapper">

    <!-- Sidebar -->
    <ul class="navbar-nav bg-gradient-dark sidebar sidebar-dark accordion" id="accordionSidebar">

      <!-- Sidebar - Brand -->
      <router-link class="sidebar-brand d-flex align-items-center justify-content-center" to="/media-dashboard">
        <div class="sidebar-brand-icon rotate-n-15">
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
          <span>Create Rate Card</span>
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
            <router-link class="collapse-item" to="/Media/AdminActivities">Users Activities</router-link>
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
        <div class="m-5 shadow-lg" v-if="media_type === 'TV' || media_type === 'Radio'">
          <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Card titile</th>
      <th scope="col">Actions</th>
      <th scope="col">Card Status</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(tv_radio_card,key) of all_tv_radio_cards" :id="key" :key="key">
      <th scope="row">{{key + 1}}</th>
      <td>{{tv_radio_card.title}}</td>
      <td>
        <button class="btn btn-secondary mr-2" :value="tv_radio_card.id" @click.prevent="edit_tv_radio_card">View</button>
        <button class="btn btn-danger" :id="tv_radio_card.id" @click.prevent="delete_tv_radio_card">delete</button>
      </td>
      <td>
        <button class="btn btn-success" :value="tv_radio_card.id" @click.prevent="activate_tv_radio_card" v-if="tv_radio_card.status === true">Activated</button>
        <button class="btn btn-secondary" :value="tv_radio_card.id" @click.prevent="activate_tv_radio_card" v-else>Dactivated</button>
      </td>
    </tr>
  </tbody>
</table>
        </div>
  <div class="shadow-lg m-5" v-else-if="media_type === 'print'">
    <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Card titile</th>
      <th scope="col">Actions</th>
      <th scope="col">Card Status</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(print_card,key) of all_print_cards" :id="key" :key="key">
      <th scope="row">{{key + 1}}</th>
      <td>{{print_card.title}}</td>
      <td>
        <button class="btn btn-secondary mr-2" :value="print_card.id" @click.prevent="edit_print_card">View</button>
        <button class="btn btn-danger" :id="print_card.id" @click.prevent="delete_print_card">delete</button>
      </td>
      <td>
        <button class="btn btn-success" :value="print_card.id" @click.prevent="activate_print_card" v-if="print_card.status === true">Activated</button>
        <button class="btn btn-secondary" :value="print_card.id" @click.prevent="activate_print_card" v-else>Dactivated</button>
      </td>
    </tr>
  </tbody>
</table>
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


      <div v-show="showPrintModal">
    <transition name="modal shadow-lg">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <div class="text-center mt-2" v-show="res_alert">
    <span class="alert" :class="[alert === 'success'? 'alert-success':' alert-danger']">{{alert_message}}</span>
  </div>
                <h5 class="modal-title">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true" @click="showPrintModal = false">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                  <form>
                    <div class="form-group">
                      <input type="text" class="form-control" v-model="print_title" placeholder="title" id="exampleInputPassword1" >
                    </div><hr>
                    <div class="text-center"><h2>Cards</h2></div>
                    <table class="table ml-1 mr-5 table-responsive">
                      <thead class="thead-dark">
                        <tr>
                          <th scope="col">Advert size</th>
                          <th scope="col">Slots</th>
                          <th scope="col">Rate</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(card,key) of print_cards" :key="key">
                          <td ><div class="form-group">
                      <input type="text" class="form-control" v-model="card.advert_size">
                    </div></td>
                          <td><div class="form-group">
                      <input type="text" class="form-control" v-model="card.slot">
                    </div></td>
                          <td><div class="form-group">
                      <input type="text" class="form-control" v-model="card.rate">
                    </div></td>
                        <td><button class="btn btn-danger" :id="key" @click.prevent="delete_print_details">X</button></td>
                        </tr>
                      </tbody>
                    </table>
                    <div class="text-center">
          <span class="text-success" v-show="loading">
          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        </span>
        </div>
                  </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary float-left" @click.prevent="new_card">new card</button>
                <button type="button" class="btn btn-secondary" @click="showPrintModal = false">Close</button>
                <button type="button" class="btn btn-primary" @click.prevent="save_print_changes">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>

    <modal name="tv_radio_modal"
        width='95%'
        height='auto'
    >
    <div class="text-center mt-2" v-show="res_alert">
    <span class="alert" :class="[alert === 'success'? 'alert-success':' alert-danger']">{{alert_message}}</span>
  </div>
      <form class="m-5">
                    <div class="form-group text">
                      <input type="text" class="form-control w-50" v-model="tv_title" placeholder="title" id="exampleInputPassword1" >
                    </div><hr>
                    <div class="text-center"><h2>Cards</h2></div>
                    <table class="table ml-1 mr-5 table-responsive">
                      <thead class="thead-dark">
                        <tr>
                          <th scope="col">day</th>
                          <th scope="col">time_frame</th>
                          <th scope="col">slots</th>
                          <th scope="col">duration</th>
                          <th scope="col">Rate</th>
                          <th scope="col">unit</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(card,key) of tv_cards" :key="key">
                          <td ><div class="form-group">
                      <select class="form-control" v-model="card.day">
                        <option value="">Select day</option>
                        <option>Monday</option>
                        <option>Tuesday</option>
                        <option>Wednesday</option>
                        <option>Thursday</option>
                        <option>Friday</option>
                        <option>Saturday</option>
                        <option>Sunday</option>
                      </select>
                    </div></td>
                          <td><div class="form-group">
                      <input type="text" class="form-control display-4" v-model="card.time">
                    </div></td>
                    <td><div class="form-group">
                      <input type="text" class="form-control" v-model="card.spot">
                    </div></td>
                    <td><div class="form-group">
                      <input type="text" class="form-control" v-model="card.duration">
                    </div></td>
                    <td><div class="form-group">
                      <input type="text" class="form-control" v-model="card.rate">
                    </div></td>
                    <td><div class="form-group">
                      <select class="form-control" v-model="card.unit">
                          <option value="">Unit</option>
                      <option>Sec</option>
                      <option>Hr</option>
                      <option>Min</option>
                    </select>
                    </div></td>
                        <td><button class="btn btn-danger" :id="key" @click.prevent="delete_tv_radio_card_details">X</button></td>
                        </tr>
                      </tbody>
                    </table>
                    <div class="text-center">
          <span class="text-success" v-show="loading">
          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        </span>
        </div>
                  </form>
                  <div class="m-3 float-left">
                     <button type="button" class="btn btn-secondary mr-1" @click.prevent="new_tv_radio_card">Add new Card</button>
                  </div>
                  <div class="m-3 float-right">
                  <button type="button" class="btn btn-secondary mr-1" @click.prevent="close_tv_radio_modal">Close</button>
                <button type="button" class="btn btn-primary" @click.prevent="save_tv_changes">Save changes</button>
                  </div>
    </modal>

  <!-- <div v-show="showTvModal">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true" @click="showTvModal = false">&times;</span>
                </button>
              </div>
              <div class="modal-body">

              </div>
              <div class="modal-footer">

              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div> -->
</div>
</template>

<script>
import axios from "axios"
	export default {
		name: "MediaViewCards",
		data(){
			return {
				error1: "",
				error2: "",
				error3: "",
        print_title: "",
        update_tv_radio: "",
        update_print: "",
        tv_title: "",
        tv_radio: "",
        media_type: "",
        all_print_cards: [],
        all_tv_radio_cards: [],
        showPrintModal: false,
        print_cards: [{
          advert_size: "",
          slot: "",
          rate: ""
        }
        ],
        tv_cards: [{
          day: "",
          time: "",
          spot: "",
          rate: "",
          duration: "",
          unit: ""
        }],
        token: "",
        res_alert: false,
        alert_message: "",
        alert: "",
        loading: false,
        preloader: true
			}
		},
    methods: {
     async delete_print_card(e){
        let key = e.currentTarget.parentElement.parentElement.id
        let delete_id = e.currentTarget.id
        console.log(delete_id)
        this.all_print_cards.splice(key,1)
        try {
          // statements
          await axios({
            url: "https://media-kokrokooad.herokuapp.com/api/ratecard/"+ delete_id +"/delete",
            method: "DELETE",
            headers: {
              'Authorization': 'Bearer ' + this.token
            }
          })
        } catch(e) {
          // statements
          console.log(e);
        }
      },
      view_print_cards(){

      },
      edit_print_card(e){
        this.showPrintModal = true
        let index = e.currentTarget.parentElement.parentElement.id
        this.print_cards = this.all_print_cards[index].card_details
        this.print_title = this.all_print_cards[index].title

        let update_id = e.currentTarget.value

        this.update_print = update_id
      },
      delete_tv_radio_card_details(e){
        let key = e.currentTarget.id
        this.tv_cards.splice(key,1)
      },
     async delete_tv_radio_card(e){
        let id = e.currentTarget.parentElement.parentElement.id
        let delete_id = e.currentTarget.id
        console.log(delete_id)
        this.all_tv_radio_cards.splice(id,1)
        try {
          // statements
          await axios({
            url: "https://media-kokrokooad.herokuapp.com/api/ratecard/"+ delete_id +"/delete",
            method: "DELETE",
            headers: {
              'Authorization': 'Bearer ' + this.token
            }
          })


        } catch(e) {
          // statements
          console.log(e);
        }
      },
      async activate_tv_radio_card(e){
        let index = e.currentTarget.parentElement.parentElement.id
        console.log(index)
        let id = e.currentTarget.value
        console.log(id)
        try {
          // statements
          let activate = await axios({
            url: "https://media-kokrokooad.herokuapp.com/api/ratecard/"+ id + "/activate",
            method: "POST",
            headers:{
              'Authorization': 'Bearer ' + this.token
            }
          })
          if(activate.status === 200){
            this.all_tv_radio_cards[index].status = true
          }
        } catch(e) {
          // statements
          console.log(e);
        }
      },
      async activate_print_card(e){
        let index = e.currentTarget.parentElement.parentElement.id
        console.log(index)
        let id = e.currentTarget.value
        console.log(id)

        try {
          // statements
          let activate = await axios({
            url: "https://media-kokrokooad.herokuapp.com/api/ratecard/"+ id + "/activate",
            method: "POST",
            headers:{
              'Authorization': 'Bearer ' + this.token
            }
          })
          if(activate.status === 200){
            this.all_print_cards[index].status = true
          }
        } catch(e) {
          // statements
          console.log(e);
        }
      },
      edit_tv_radio_card(e){
        this.$modal.show('tv_radio_modal')
        let index = e.currentTarget.parentElement.parentElement.id
        this.tv_cards = this.all_tv_radio_cards[index].card_details
        this.tv_title = this.all_tv_radio_cards[index].title

        let update_id = e.currentTarget.value
        this.update_tv_radio = update_id
      },
      close_tv_radio_modal(){
        this.$modal.hide('tv_radio_modal')
      },
      view_tv_radio_cards(){

      },
      delete_print_details(e){
        let key = e.currentTarget.id
        this.print_cards.splice(key,1)
        },
      async save_print_changes(){
        this.loading = true
        try {
          // statements
          let data = {
            title: this.print_title,
            card_details: this.print_cards
          }
          this.res_alert = false

          let update = await axios({
            url: "https://media-kokrokooad.herokuapp.com/api/ratecard/" + this.update_print + "/update",
            method: "PATCH",
            data: data,
            headers: {
              'Authorization': 'Bearer ' + this.token
            }
          })
          if(update.status === 200){
            this.loading = false
            this.alert = "success"
            this.alert_message = "You have successfuly updated the card"
            this.res_alert = true
          }
        } catch(e) {
          // statements
          console.log(e);
        }
      },
      async save_tv_changes(){
        this.loading = true
        try {
          // statements
          let data = {
            title: this.tv_title,
            card_details: this.tv_cards
          }
          this.res_alert = false
          let update = await axios({
            url: "https://media-kokrokooad.herokuapp.com/api/ratecard/" + this.update_tv_radio +"/update",
            method: "PATCH",
            headers: {
              'Authorization': 'Bearer ' + this.token
            },
            data: data
          })

          if(update.status === 200){
            this.loading = false
            this.alert = "success"
            this.alert_message = "You have successfuly updated the card"
            this.res_alert = true
          }
        } catch(e) {
          // statements
          console.log(e);
        }

      },
      new_print_card(){
        this.print_cards.push({
          advert_size: "",
          slot: "",
          rate: ""
        })
      },
      new_tv_radio_card(){
        this.tv_cards.push({
          day: "",
          time: "",
          slot: "",
          duration: "",
          rate: "",
          unit: ""
        })
      }
    },
		mounted(){
		},
    beforeCreate(){
      if(!this.$session.exists()){
        this.$router.push({path: '/'})
      }

      //fetching all cards available
	},
 async created(){
        let token = this.$session.get('media-jwt')
        this.token = token
        try {
      // statement
      let user_details = await axios({
        url: "https://media-kokrokooad.herokuapp.com/api/user",
        method: "GET",
        headers: {
          'Authorization': "Bearer " + token
        }
      })

      if(user_details.status === 200){
        this.media_type = user_details.data.company.media_type

      }
    } catch(e) {
      // statements
      console.log(e);
    }

    try {
        // statements
        let fetch_all_cards = await axios({
          url: "https://media-kokrokooad.herokuapp.com/api/ratecard/company-ratecards",
          method: "GET",
          headers: {
            'Authorization': 'Bearer ' + token
          }
        })
        console.log(this.media_type)
        if(this.media_type === "TV" || this.media_type === "Radio"){
          this.all_tv_radio_cards = fetch_all_cards.data
          this.preloader = false
        }
        if(this.media_type === "print"){
          this.all_print_cards = fetch_all_cards.data
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

.modal-mask {
  position: absolute;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 800%;
  height: 100%;
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
}
</style>