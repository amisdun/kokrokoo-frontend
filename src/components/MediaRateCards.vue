<template>
	<div>
		<div id="wrapper">

			<!-- Sidebar -->
			<ul class="navbar-nav bg-gradient-dark sidebar sidebar-dark accordion" id="accordionSidebar">

				<!-- Sidebar - Brand -->
				<router-link class="sidebar-brand d-flex align-items-center justify-content-center" to="/media-dashboard">
					<div class="sidebar-brand-icon">
						<img src="../../src/assets/image/kokro-yellow.png" class="img" alt="">
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

							<div class="text-center" v-show="res_alert">
								<span class="alert" :class="[alert === 'success'? 'alert-success':' alert-danger']">{{alert_message}}</span>
							</div>
							<div class="card m-5 w-75 shadow" v-show="show_tv_cards">
								<h5 class="card-header">Provide Rate Card Details</h5>
								<div class="card-body w-auto">
									<h5 class="card-title">All fields are required</h5>
									<form v-if="media_type === 'TV' || media_type === 'Radio'" class="m-5 w-auto">
										<div class="form-row">
											<div class="form-group col-md-12">
												<input type="text" class="form-control" v-model="title" placeholder="Enter Rate Card Title">
												<span class="text-danger">{{error1}}</span>
											</div>
										</div>
										<hr>
										<div class="text-center m-2"><h2>Card Details</h2></div>
										<div class="form-row">
											<div class="form-group col-md-12">
												<select class="form-control" v-model="day">
													<option value="">Select Day</option>
													<option>Monday</option>
													<option>Tuesday</option>
													<option>Wednesday</option>
													<option>Thursday</option>
													<option>Friday</option>
													<option>Saturday</option>
													<option>Sunday</option>
												</select>
												<span class="text-danger">{{error2}}</span>
											</div>
										</div>
										<div class="form-row">
											<div class="form-group col-md-6">
												<label for="inputfrom">From</label>
												<input type="time" class="form-control" id="inputfrom" v-model="time_from" placeholder="from">
												<span class="text-danger">{{error3}}</span>
											</div>
											<div class="form-group col-md-6">
												<label for="inputto">to</label>
												<input type="time" class="form-control" id="inputto" v-model="time_to" placeholder="to">
												<span class="text-danger">{{error4}}</span>
											</div>
										</div>
										<div class="form-row">
											<div class="form-group col-md-12">
												<input type="number" class="form-control" v-model="spots" placeholder="Enter Available Spot(s)">
												<span class="text-danger">{{error5}}</span>
											</div>
										</div>
										<div v-for="(rate_detail,key) of rate_details" :key="key">
											<div class="form-row">
												<div class="form-group col-md-6">
													<input type="number" class="form-control" v-model="rate_detail.duration" placeholder="Enter duration">
													<span class="text-danger">{{error6}}</span>
												</div>
												<div class="form-group col-md-2">
													<select class="form-control" v-model="rate_detail.unit">
														<option value="" selected disabled>Unit</option>
														<option>Sec</option>
														<option>Hr</option>
														<option>Min</option>
													</select>
													<span class="text-danger">{{error8}}</span>
												</div>
												<div class="form-group col-md-4">
													<input type="text" class="form-control" v-model="rate_detail.rate" placeholder="Enter Rate">
													<span class="text-danger">{{error7}}</span>
												</div>
											</div>
										</div>
										<div class="text-center">
											<span class="text-success" v-show="loading">
												<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
											</span>
										</div>
										<button type="submit" class="btn btn-primary" @click.prevent="CreateTvRadioCrad">Create Rate Card</button>
										<button type="submit" class="btn btn-primary m-2" @click.prevent="AddTvRadioRate">Add Rate</button>
										<button type="submit" class="btn btn-primary float-right m-2" @click.prevent="AddTvRadioCardDetails">+</button><br>
										<button type="submit" class="btn btn-primary float-right" @click.prevent="show_tv_rate_details = true">Preview</button><br>
										<div class="text-center float-right">
											<span class="text-danger">{{error9}}</span>
										</div><br>
										<hr>
									</form>


									<form v-else-if="media_type === 'print'">
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
												<span class="btn btn-info"><span>Advert Size: {{print.advert_size}}; </span><span>Slots:  {{print.slot}}; </span><span>Rate: {{print.rate}}</span><a href="#" :id="key" class="btn btn-danger" @click.prevent="RemovePrint">X</a></span>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="container" v-show="show_tv_rate_details">
					<form>
						<div class="row form-group w-auto">
							<div class="col-md-12">
								<input type="text" class="form-control" name="" v-model="title" placeholder="Rate Card Title">
							</div>
						</div>
					</form>
					<div style="height: 700px; overflow-y: auto" class="card shadow">
						<div class="row ml-4"  v-for="(tv_card,key) of tv_radio_card_details" :key="key">
							<div class="col-lg-11 col-md-11 col-sm-10 col-xs-8 card m-2 shadow">
								<span class="m-2 text-info">Rate Card {{key + 1}}</span>
								<form>
									<div class="row m-2">
										<div class="col-md-4 form-group">
											<select class="form-control" v-model="tv_card.day">
												<option value="" selected disabled>Day</option>
												<option>Monday</option>
												<option>Tuesday</option>
												<option>Wednesday</option>
												<option>Thursday</option>
												<option>Friday</option>
												<option>Saturday</option>
												<option>Sunday</option>
											</select>
										</div>
										<div class="col-md-4 form-group">
											<input type="text" v-model="tv_card.time" class="form-control" name="" placeholder="Time Frame">
										</div>
										<div class="col-md-4 form-group">
											<input type="text" v-model="tv_card.spot" class="form-control" name="" placeholder="spot">
										</div>
									</div>
									<div class="row form-group m-1" v-for="(rate_detail,key) of tv_radio_card_details.rate_details" :key="key">
										<div class="col-md-4">
											<input type="number" v-model="rate_detail.duration" class="form-control" name="" placeholder="Duration">
										</div>
										<div class="col-md-3">
											<select class="form-control" v-model="rate_detail.unit">
												<option value="">Unit</option>
												<option>Sec</option>
												<option>Hr</option>
												<option>Min</option>
											</select>
										</div>
										<div class="col-md-4">
											<input type="number" v-model="rate_detail.rate" class="form-control" name="" placeholder="Rate">
										</div>
										<div class="col-md-1">
											<button class="btn btn-danger" :value="key" @click.prevent="tv_card.rate_details.splice(key,1)">X</button>
										</div>
									</div>
									<button class="btn btn-primary float-left m-2" :value="key" @click.prevent="Add_tv_rate">Add Rate</button>
								</form>
							</div>
						</div>
					</div>
					<div class="text-center">
						<span class="text-success" v-show="loading">
							<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
						</span>
					</div><br>
					<button class="btn btn-secondary float-right m-2" @click.prevent="show_tv_rate_details = false;show_tv_cards = true">Close</button>
				</div>

				<footer class="sticky-footer bg-dark">
					<div class="container my-auto">
						<div class="copyright text-center my-auto">
							<span>Copyright &copy; Your Website 2020</span>
						</div>
					</div>
				</footer>

				<div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title" id="exampleModalLabel">Rate Details</h5>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<table class="table">
									<thead class="thead-dark">
										<tr>
											<th scope="col">Duration</th>
											<th scope="col">Rate</th>
											<th scope="col">Units</th>
										</tr>
									</thead>
									<tbody>
										<tr v-for="(rate_detail,key) of modal_tv_card_details" :key="key">
											<td>{{rate_detail.duration}}</td>
											<td>{{rate_detail.rate}}</td>
											<td>{{rate_detail.unit}}</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
							</div>
						</div>
					</div>
				</div>


				<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title" id="exampleModalLabel">Rate Details</h5>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">

							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
							</div>
						</div>
					</div>
				</div>
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
					error7: "",
					error8: "",
					error9: "",
					media_type: "",
					card_details: "",
					print_card_details: [],
					tv_radio_card_details: [],
					modal_tv_card_details: [],
					modal_tv_index: null,
					Advert_size: "",
					title: "",
					spots:"",
					time_from: "",
					time_to: "",
					day: "",
					rate_details: [{
						duration: "",
						unit: "",
						rate: ""
					}],
					loading: false,
					alert: "",
					res_alert: false,
					token: "",
					alert_message: "",
					preloader: true,
					show_tv_cards: true,
					show_tv_rate_details: false
				}
			},
			methods: {
				CreateTvRadioCrad(){
					if(validator.isEmpty(this.title)) this.error1 = "title is required";
					else this.error1 = "";
					if(validator.isEmpty(this.day)) this.error2 = "day is required";
					else this.error2 = "";
					if(validator.isEmpty(this.time_from)) this.error3 = "time from is required";
					else this.error3 = "";
					if(validator.isEmpty(this.time_to)) this.error4 = "time_to is required";
					else this.error4 = "";
					if(validator.isEmpty(this.spots)) this.error5 = "spots required";
					else this.error5 = "";
					if(this.tv_radio_card_details.length === 0) this.error9 = "Please click to add card Details";
					else this.error9 = ""

					if(
						!validator.isEmpty(this.title) &&
						!validator.isEmpty(this.spots) &&
						!validator.isEmpty(this.day) &&
						!validator.isEmpty(this.time_from) &&
						!validator.isEmpty(this.time_to) &&
						this.tv_radio_card_details.length !== 0
					){
						this.loading = true
						this.res_alert = false
						let self = this
						setTimeout(function(){
							self.Create_tv_radio_card(self.title,self.tv_radio_card_details)
						},300)
					}

				},
				Add_tv_rate(e){
					let index = e.currentTarget.value
					this.tv_cards[index].rate_details.push({
						duration: "",
						unit: "",
						rate: ""
					})
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
				AddTvRadioRate(){
					this.rate_details.push({
						duration: "",
						unit: "",
						rate: ""
					})
					console.log(this.rate_details)
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
							this.tv_radio_card_details = []
							console.log(this.tv_radio_card_details)
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
					if(validator.isEmpty(this.title) || validator.isEmpty(this.Advert_size) || validator.isEmpty(this.Rate)){
						return null
					} else {
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
					}

				},
				AddTvRadioCardDetails(){
					this.res_alert = false
					if(validator.isEmpty(this.title) || validator.isEmpty(this.spots) || validator.isEmpty(this.day) || validator.isEmpty(this.time_from) || validator.isEmpty(this.time_to)){
						return null
					} else {
						if(this.tv_radio_card_details.length < 1){
							this.tv_radio_card_details.push({
								time: this.time_from + " - " + this.time_to,
								day: this.day,
								spot: this.spots,
								rate_details: this.rate_details
							})

							let tv_radio_details = this.tv_radio_card_details

							this.alert_message = tv_radio_details.length + " data added"
							this.alert = "success"
							this.res_alert = true
						}
						else{
							let added_tv_radio = false
							for(let tv_radio of this.tv_radio_card_details){
								if(tv_radio.time === this.time && tv_radio.spot === this.spots && tv_radio.day === this.day &&
									tv_radio.rate === this.rate && tv_radio.duration === this.duration && tv_radio.unit === this.unit
								){
									added_tv_radio = true

									return added_tv_radio
								}
							}
							if(added_tv_radio === false){
								this.tv_radio_card_details.push({
									time: this.time_from + " - " + this.time_to,
									day: this.day,
									spot: this.spots,
									rate_details: this.rate_details
								})
								let tv_radio_details = this.tv_radio_card_details
								this.alert_message = tv_radio_details.length + " data added"
								this.alert = "success"
								this.res_alert = true
							}
						}
					}
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
