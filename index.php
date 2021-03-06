<!DOCTYPE html>
<html lang="zh_CN">
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Love Diary">
    <meta name="author" content="#">
	
    <title>宝宝日记</title>
	
	
	<link rel="stylesheet" href="css/menu.css">
	
	<!-- Custom CSS -->
    <link rel="stylesheet" type="text/css" href="css/style.css">
	
	<!-- Custom Fonts -->
    <link rel="stylesheet" href="font-awesome-4.4.0/css/font-awesome.min.css"  type="text/css">
	
	<link rel="stylesheet" href="css/lightbox.css">
	
	<!-- Core JavaScript Files -->  	 
    
	
	<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="js/html5shiv.js"></script>
        <script src="js/respond.min.js"></script>
    <![endif]-->
</head>
<body>
    <div id="bubble_dummylayer"><div id="bubble_layer"></div></div>
    <div id="password_layer" class="password" style="position:fixed;background:black;opacity:0.8;left:0;top:0;width:100%;height:100vh;z-index:9999;"></div>
    <div id="password_panel" class="password" style="position:fixed;z-index:9999;top:40%;padding:30px;background:#C83935;border-radius:5px;left:50%;transform:translateX(-50%);">
        <p style="margin-bottom:10px;color:white;">宝宝输入密码：</p>
    	<input id="password" type="password" style="padding:10px;width:200px;"/>
    </div>
	<div class="header">
		<div id='cssmenu' >
			<ul>
			   <li class="active"><a href='index.html'><span>日记</span></a></li>
			   <!-- <li><a href='single.html'><span>建设中</span></a></li>
			   <li class='last'><a href='contact.html'><span>建设中</span></a></li> -->
			</ul>
		</div>
	</div>
	<div id="page-content" class="index-page">
		<div id="container" class="blurpage">
			<!-- These are our grid blocks -->
		</div>
	</div>
    <!-- Once the page is loaded, initialized the plugin. -->
    <script type="text/javascript" src="js/jquery-2.1.1.js" ></script>
	<!-- jQuery Pinterest -->
    <script type="text/javascript" src="js/jquery.pinto.js"></script>
    <script type="text/javascript" src="js/main.js"></script>
	
	<!-- Light Box -->
	<script src="js/lightbox-plus-jquery.min.js"></script>
	
	<!-- Menu -->
	<script src="js/script.js"></script>	
</body>
</html>