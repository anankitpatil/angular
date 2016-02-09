<!DOCTYPE html>
<html lang="en" ng-app="authApp">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>AngularJS Authentication App</title>
<link href="css/bootstrap.min.css" rel="stylesheet">
<link href="css/animate.min.css" rel="stylesheet">
<link href="css/custom.css" rel="stylesheet">
<link href="css/toaster.css" rel="stylesheet">
<link href="css/prism.css" rel="stylesheet">
<!--[if lt IE 9]><link href= "css/bootstrap-theme.css"rel= "stylesheet" >
<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
<![endif]-->
</head>

<body ng-cloak="">
<nav class="navbar navbar-fixed-top wow fadeInDown">
  <div class="container">
    <div class="row">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapse-navbar" aria-expanded="false"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar top-bar"></span> <span class="icon-bar middle-bar"></span> <span class="icon-bar bottom-bar"></span> </button>
        <a class="navbar-brand" href="./#/"></a> </div>
      
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="collapse-navbar">
        <ul class="nav navbar-nav navbar-right">
          <li ng-show="name" ng-if="name"> <a href="./#/dashboard">{{name}}</a></li>
          <!--<li><a href="./#/dashboard">Dashboard </a></li>-->
          <li><a href="./#/about">About</a></li>
          <li><a href="./#/work">Work</a></li>
        </ul>
      </div>
      <!-- /.navbar-collapse --> 
    </div>
  </div>
  <!-- /.container-fluid --> 
</nav>
<div data-ng-view="" id="ng-view" class="slide"></div>
</body>
<toaster-container toaster-options="{'time-out': 1000}"></toaster-container>
<!-- Libs -->
<script src="js/jquery-1.12.0.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/angular.min.js"></script>
<script src="js/angular-route.min.js"></script>
<script src="js/angular-animate.min.js" ></script>
<script src="js/toaster.js"></script>
<script src="app/app.js"></script>
<script src="app/data.js"></script>
<script src="app/directives.js"></script>
<script src="app/authCtrl.js"></script>
<script src="js/wow.min.js"></script>
<script src="js/prism.js"></script>
<script src="app/jq.js"></script>
</html>
