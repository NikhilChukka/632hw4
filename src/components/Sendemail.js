import React from "react";
<<<<<<< HEAD

function Sendemail(){
    return (
        <div class="container">
<div class="row inbox">
	<div class="col-md-3">
		<div class="panel panel-default">
			<div class="panel-body inbox-menu">						
				<a href="#page-inbox-compose.html" class="btn btn-danger btn-block">New Email</a>
				<ul>
					<li>
						<a href="#page-inbox.html"><i class="fa fa-inbox"></i> Inbox <span class="label label-danger">4</span></a>
					</li>
					<li>
						<a href="#"><i class="fa fa-star"></i> Stared</a>
					</li>
					<li>
						<a href="#"><i class="fa fa-rocket"></i> Sent</a>
					</li>
					<li>
						<a href="#"><i class="fa fa-trash-o"></i> Trash</a>
					</li>
					<li>
						<a href="#"><i class="fa fa-bookmark"></i> Important<span class="label label-info">5</span></a>
					</li>
					<li class="title">
						Labels
					</li>
					<li>
						<a href="#">Home <span class="label label-danger"></span></a>
					</li>
					<li>
						<a href="#">Job <span class="label label-info"></span></a>
					</li>
					<li>
						<a href="#">Clients <span class="label label-success"></span></a>
					</li>
					<li>
						<a href="#">News <span class="label label-warning"></span></a>
					</li>
				</ul>
			</div>	
		</div>
		
		<div class="panel panel-default">
			<div class="panel-body contacts">
				<a href="#" class="btn btn-success btn-block"> + Contact</a>
				<ul>
					<li><span class="label label-danger"></span> Adam Alister</li>
					<li><span class="label label-default"></span> Alphonse Ivo</li>
					<li><span class="label label-success"></span> Anton Phunihel</li>
					<li><span class="label label-success"></span> Ajith Hristijan</li>
					<li><span class="label label-warning"></span> Bao Gaspar</li>
					<li><span class="label label-default"></span> Bernhard Shelah</li>
					<li><span class="label label-success"></span> Bünyamin Kasper</li>
					<li><span class="label label-danger"></span> Carlito Roffe</li>
					<li><span class="label label-danger"></span> Chidubem Gottlob</li>
					<li><span class="label label-warning"></span> Dederick Mihail</li>
					<li><span class="label label-success"></span> Felice Arseniy</li>
					<li><span class="label label-default"></span> Grahame Miodrag</li>
					<li><span class="label label-default"></span> Hristofor Sergio</li>
					<li><span class="label label-danger"></span> Scottie Maximilian</li>
					<li><span class="label label-danger"></span> Sullivan Robert</li>
					<li><span class="label label-danger"></span> Thancmar Theophanes</li>
					<li><span class="label label-warning"></span> Tullio Luka</li>
					<li><span class="label label-success"></span> Walerian Khwaja</li>
				</ul>
			
			</div>
		
		</div>			
		
	</div>
	
	<div class="col-md-9">
=======
import Sidebar from "./Sidebar";
import Header from "./header";
function Sendemail(){
    return (
		
        <div>
<Header/>
<div class="container col-md-9">
<div class="row inbox">
<div className="col-md-9">
>>>>>>> ebb866d (commit)
		<div class="panel panel-default">
			<div class="panel-body message">
				<p class="text-center">New Message</p>
				<form class="form-horizontal" role="form">
					<div class="form-group">
				    	<label for="to" class="col-sm-1 control-label">To:</label>
				    	<div class="col-sm-11">
                              <input type="email" class="form-control select2-offscreen" id="to" placeholder="Type email" tabindex="-1"/>
				    	</div>
				  	</div>
					<div class="form-group">
				    	<label for="cc" class="col-sm-1 control-label">CC:</label>
				    	<div class="col-sm-11">
                              <input type="email" class="form-control select2-offscreen" id="cc" placeholder="Type email" tabindex="-1"/>
				    	</div>
				  	</div>
					<div class="form-group">
				    	<label for="bcc" class="col-sm-1 control-label">BCC:</label>
				    	<div class="col-sm-11">
                              <input type="email" class="form-control select2-offscreen" id="bcc" placeholder="Type email" tabindex="-1"/>
				    	</div>
				  	</div>
				  
				</form>
				
				<div class="col-sm-11 col-sm-offset-1">
					
					<div class="btn-toolbar" role="toolbar">
						
						<div class="btn-group">
						  	<button class="btn btn-default"><span class="fa fa-bold"></span></button>
						  	<button class="btn btn-default"><span class="fa fa-italic"></span></button>
							<button class="btn btn-default"><span class="fa fa-underline"></span></button>
						</div>

						<div class="btn-group">
						  	<button class="btn btn-default"><span class="fa fa-align-left"></span></button>
						  	<button class="btn btn-default"><span class="fa fa-align-right"></span></button>
						  	<button class="btn btn-default"><span class="fa fa-align-center"></span></button>
							<button class="btn btn-default"><span class="fa fa-align-justify"></span></button>
						</div>
						
						<div class="btn-group">
						  	<button class="btn btn-default"><span class="fa fa-indent"></span></button>
						  	<button class="btn btn-default"><span class="fa fa-outdent"></span></button>
						</div>
						
						<div class="btn-group">
						  	<button class="btn btn-default"><span class="fa fa-list-ul"></span></button>
						  	<button class="btn btn-default"><span class="fa fa-list-ol"></span></button>
						</div>
						<button class="btn btn-default"><span class="fa fa-trash-o"></span></button>	
						<button class="btn btn-default"><span class="fa fa-paperclip"></span></button>
						<div class="btn-group">
							<button class="btn btn-default dropdown-toggle" data-toggle="dropdown"><span class="fa fa-tags"></span> <span class="caret"></span></button>
							<ul class="dropdown-menu">
								<li><a href="#">add label <span class="label label-danger"> Home</span></a></li>
								<li><a href="#">add label <span class="label label-info">Job</span></a></li>
								<li><a href="#">add label <span class="label label-success">Clients</span></a></li>
								<li><a href="#">add label <span class="label label-warning">News</span></a></li>
							</ul>
						</div>
					</div>
					 	
					
					<div class="form-group">
						<textarea class="form-control" id="message" name="body" rows="12" placeholder="Click here to reply"></textarea>
					</div>
					
					<div class="form-group">	
						<button type="submit" class="btn btn-success">Send</button>
						<button type="submit" class="btn btn-default">Draft</button>
						<button type="submit" class="btn btn-danger">Discard</button>
					</div>
				</div>	
<<<<<<< HEAD
			</div>	
=======
			</div>
>>>>>>> ebb866d (commit)
		</div>	
	</div>	
</div>
</div>
<<<<<<< HEAD
=======
</div>
>>>>>>> ebb866d (commit)
    );

}
export default Sendemail;