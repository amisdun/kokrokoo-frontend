<template>
	<div>
	<div id="wrapper">

    <!-- Sidebar -->
    <ul class="navbar-nav bg-gradient-info sidebar sidebar-dark accordion" id="accordionSidebar">

      <!-- Sidebar - Brand -->
      <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="fas fa-laugh-wink"></i>
        </div>
        <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
      </a>

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
          <span>Admins</span></a>
          <div id="collapseAdmin" class="collapse" aria-labelledby="headingAdmin" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Admins</h6>
            <router-link class="collapse-item" to="/Media/ViewAdmins">View Admins</router-link>
            <router-link class="collapse-item" to="/Media/CreateAdmins">Create new Admin</router-link>
            <router-link class="collapse-item" to="/Media/AdminActivities">Admin Activities</router-link>
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
        <div class="text-center" v-show="res_alert">
    <span class="alert" :class="[alert === 'success'? 'alert-success':' alert-danger']">{{alert_message}}</span>
  </div>
        <div class="card m-3 shadow">
  <h5 class="card-header">Provide Rate Card Details</h5>
  <div class="card-body">
    <h5 class="card-title">All fields are required</h5>
<form v-if="media_type === 'TV' || media_type === 'Radio'">
  <div class="form-group">
    <input type="text" class="form-control" v-model="title" placeholder="Enter Title">
    <span class="text-danger">{{error1}}</span>
    </div>
    <hr>
    <div class="text-center m-2"><h2>Card Details</h2></div>
  <div class="form-group">
    <input type="text" class="form-control" v-model="time" placeholder="Enter Time frame">
    <span class="text-danger">{{error2}}</span>
  </div>
  <div class="form-group">
    <input type="number" class="form-control" v-model="slots" placeholder="Enter Slot(s)">
    <span class="text-danger">{{error3}}</span>
  </div>
  <div class="form-group">
    <input type="text" class="form-control" v-model="day" placeholder="Enter day">
    <span class="text-danger">{{error4}}</span>
  </div>
<div class="form-group">
    <input type="number" class="form-control" v-model="rate_15" placeholder="Enter Rate(GHS) in 15sec">
  </div>
  <div class="form-group">
    <input type="number" class="form-control" v-model="rate_20" placeholder="Enter Rate(GHS) in 20sec">
  </div>
  <div class="form-group">
    <input type="number" class="form-control" v-model="rate_30" placeholder="Enter Rate(GHS) in 30sec">
  </div>
  <div class="form-group">
    <input type="number" class="form-control" v-model="rate_45" placeholder="Enter Rate(GHS) in 45sec">
  </div>
  <div class="form-group">
    <input type="number" class="form-control" v-model="rate_50" placeholder="Enter Rate(GHS) in 50sec">
  </div>
  <div class="form-group">
    <input type="number" class="form-control" v-model="rate_60" placeholder="Enter Rate(GHS) in 60sec">
  </div>
  <div class="text-center">
          <span class="text-success" v-show="loading">
          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        </span>
        </div>
  <button type="submit" class="btn btn-primary" @click.prevent="CreateTvRadioCrad">Create Rate Card</button>
  <button type="submit" class="btn btn-primary float-right" @click.prevent="AddTvRadioCardDetails">+</button>
  <div class="text-center">
    <span class="text-danger">{{error6}}</span>
  </div>
  <hr>
<div class="row">
  <div class="col-6" v-for="(tv_radio,key) of tv_radio_card_details" :key="key">
  <button type="submit" class="btn btn-info"><span>Day: {{tv_radio.day}}</span><span>Time: {{tv_radio.time}}</span><span>Slot: {{tv_radio.slot}}</span><a href="#" :id="key" class="btn btn-danger" @click.prevent="RemoveTvRadio">X</a></button>
  </div>

</div>

</form>

<form v-else>
<div class="form-group">
    <input type="text" class="form-control" v-model="title" placeholder="Enter Title">
    <span class="text-danger">{{error1}}</span>
    </div>
    <hr>
    <div class="text-center m-2"><h2>Card Details</h2></div>
  <div class="form-group">
    <input type="text" class="form-control" v-model="Advert_size" placeholder="Enter Advert Size">
    <span class="text-danger">{{error2}}</span>
  </div>
  <div class="form-group">
    <input type="number" class="form-control" v-model="slots" placeholder="Enter Slot(s)">
    <span class="text-danger">{{error3}}</span>
  </div>
<div class="form-group">
    <input type="number" class="form-control" v-model="Rate" placeholder="Enter Rate(GHS)">
    <span class="text-danger">{{error4}}</span>
  </div>
  <div class="text-center">
          <span class="text-success" v-show="loading">
          <span class="spinner-grow spinner-grow-bg" role="status" aria-hidden="true"></span>
        </span>
        </div>
  <button type="submit" class="btn btn-primary" @click.prevent="CreatePrintCard">Create Rate Card</button>
<button type="submit" class="btn btn-primary float-right" @click.prevent="AddPrintCardDetails">+</button><br>
<div class="float-right">
  <span class="text-danger">{{error5}}</span>
</div><br>
<hr>
<div class="row">
  <div class="col-md-6 mt-2 mb-2" v-for="(print,key) of print_card_details" :key="key">
  <button type="submit" class="btn btn-info"><span>Advert Size: {{print.advert_size}} </span><span>Slots:  {{print.slot}} </span><span>Rate: {{print.rate}}</span><a href="#" :id="key" class="btn btn-danger" @click.prevent="RemovePrint">X</a></button>
  </div>
</div>
</form>
  </div>
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
		name: "MediaRateCards",
		data(){
			return {
				error1: "",
				error2: "",
				error3: "",
        error4: "",
        error5: "",
        error6: "",
        media_type: "",
        Rate: "",
        card_details: "",
        print_card_details: [],
        tv_radio_card_details: [],
        Advert_size: "",
        title: "",
        slots:"",
        day: "",
        time: "",
        loading: false,
        alert: "",
        res_alert: false,
        token: "",
        alert_message: "",
        rate_15: "",
        rate_20: "",
        rate_30: "",
        rate_45: "",
        rate_50: "",
        rate_60: ""
			}
		},
    methods: {
      CreateTvRadioCrad(){
        if(validator.isEmpty(this.title)) this.error1 = "title is required";
        else this.error1 = "";
        if(validator.isEmpty(this.time)) this.error2 = "time is required";
        else this.error2 = "";
        if(validator.isEmpty(this.slots)) this.error3 = "slots required";
        else this.error3 = "";
        if(validator.isEmpty(this.day)) this.error4 = "day is required";
        else this.error4 = "";
        if(this.tv_radio_card_details.length === 0) this.error6 = "Please click to add card Details";
        else this.error6 = ""

        if(
          !validator.isEmpty(this.title) &&
          !validator.isEmpty(this.time) &&
          !validator.isEmpty(this.slots) &&
          !validator.isEmpty(this.day) &&
          this.tv_radio_card_details.length !== 0
          ){
          this.loading = true
          this.res_alert = false
          let self = this
          setTimeout(function(){
            self.Create_print_card(self.title,self.tv_radio_card_details)
          },300)
        }

      },
      CreatePrintCard(){
        if(validator.isEmpty(this.title)) this.error1 = "title is required";
        else this.error1 = "";
        if(validator.isEmpty(this.Advert_size)) this.error2 = "time is required";
        else this.error2 = "";
        if(validator.isEmpty(this.slots)) this.error3 = "slots required";
        else this.error3 = "";
        if(validator.isEmpty(this.Rate)) this.error4 = "Rate is required";
        else this.error4 = "";
        if(this.print_card_details.length === 0) this.error5 = "Please click to add card Details";
        else this.error5 = ""
        if(
          !validator.isEmpty(this.title) &&
          !validator.isEmpty(this.Advert_size) &&
          !validator.isEmpty(this.slots) &&
          !validator.isEmpty(this.Rate) &&
          this.print_card_details.length !== 0
          ){
          this.loading = true
          this.res_alert = false
          let self = this
          setTimeout(function(){
            self.Create_print_card(self.title,self.print_card_details)
          },300)
        }
      },
     async Create_print_card(title,print_card_details){
         try {
              // statements
              let data = {
                title: title,
                card_details: print_card_details
              }
              console.log(data)
              let media_card_res = await axios({
                url: "https://media-kokrokooad.herokuapp.com/api/ratecard/create",
                method: "POST",
                headers: {
                  'Authorization' : 'Bearer ' + this.token
                },
                data: data
              })

              if(media_card_res.status === 200){
                this.loading = false
                this.alert = "success"
                this.alert_message = "You have created a New Rate Card"
                this.res_alert = true
              }
            } catch(e) {
              // statements
              console.log(e.response);
              if(e.response.status === 422){
                this.loading = false
                this.alert = "error",
                this.alert_message = "The Card Title Has Already been Created"
                this.res_alert = true
              }
            }
      },
     async Create_tv_radio_card(title,tv_radio_card_details){
            try {
              // statements
              let data = {
                title: title,
                card_details: tv_radio_card_details
              }
              console.log(data)
              let media_card_res = await axios({
                url: "https://media-kokrokooad.herokuapp.com/api/ratecard/create",
                method: "POST",
                headers: {
                  'Authorization' : 'Bearer ' + this.token
                },
                data: data
              })

              if(media_card_res.status === 200){
                this.loading = false
                this.alert = "success"
                this.alert_message = "You have created a New Rate Card"
                this.res_alert = true
              }
            } catch(e) {
              // statements
              console.log(e.response);
              if(e.response.status === 422){
                this.loading = false
                this.alert = "error",
                this.alert_message = "The Card Title Has Already been Created"
                this.res_alert = true
              }
            }
      },
      AddPrintCardDetails(){
        console.log(this.Advert_size)
        console.log(this.print_card_details)
        if(this.print_card_details.length < 1){
            this.print_card_details.push({
              advert_size: this.Advert_size,
              slot: this.slots,
              rate: this.Rate
            })
          }
          else{
            let added_print = false
            for(let prints of this.print_card_details){
              if(prints.advert_size === this.Advert_size && prints.slot === this.slots && prints.rate === this.Rate){
                added_print = true

                return added_print
              }
            }
            console.log(added_print)
            if(added_print === false){
              this.print_card_details.push({
                advert_size: this.Advert_size,
                slot: this.slots,
                rate: this.Rate
              })
            }
          }
      },
      AddTvRadioCardDetails(){
        if(this.tv_radio_card_details.length < 1){
            this.tv_radio_card_details.push({
              time: this.time,
              day: this.day,
              slot: this.slots,
              rate_15: this.rate_15,
              rate_20: this.rate_20,
              rate_30: this.rate_30,
              rate_45: this.rate_45,
              rate_50: this.rate_50,
              rate_60: this.rate_60
            })
          }
          else{
            let added_tv_radio = false
            for(let tv_radio of this.tv_radio_card_details){
              if(tv_radio.time === this.time && tv_radio.slot === this.slots && tv_radio.day === this.day){
                added_tv_radio = true

                return added_tv_radio
              }
            }
            if(added_tv_radio === false){
              this.tv_radio_card_details.push({
                time: this.time,
                day: this.day,
                slot: this.slots,
                rate_15: this.rate_15,
                rate_20: this.rate_20,
                rate_30: this.rate_30,
                rate_45: this.rate_45,
                rate_50: this.rate_50,
                rate_60: this.rate_60
              })
            }
          }
          console.log(this.tv_radio_card_details)
      },
      RemovePrint(e){
        let id = e.currentTarget.id

        this.print_card_details.splice(id,1)

      },
      RemoveTvRadio(e){
        let id = e.currentTarget.id

        this.tv_radio_card_details.splice(id,1)
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
    try {
      // statement
      let token = this.$session.get('media-jwt')
      this.token = token
      let user_details = await axios({
        url: "https://media-kokrokooad.herokuapp.com/api/user",
        method: "GET",
        headers: {
          'Authorization': "Bearer " + token
        }
      })

      if(user_details.status === 200){
        this.media_type = user_details.data.company.media_type
        console.log(user_details)
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