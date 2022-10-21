<script>

</script>
<template>
    
<h1>PAGE LOGIN</h1>
<div class="login-form">    
    <form>
		<div class="avatar"><i class="material-icons">&#xE7FF;</i></div>
    	<h4 class="modal-title">Login to Your Account</h4>
        <div class="form-group">
            <input type="text" name="email" class="form-control"  placeholder="Email" required="required">
        </div>
        <div class="form-group">
            <input type="password" name="password" class="form-control"  placeholder="Password" required="required">
        </div>
        <input  name="button" class="btn btn-primary btn-block btn-lg" value="Login">            
    </form>			
    <div class="text-center small">Don't have an account? <a><router-link :to="{name: 'register'}"><b>Sign up</b></router-link></a></div>
</div>
</template>
    
<style>
h1{
    text-align: center;
}
.form-control {
	box-shadow: none;
	border-color: #ddd;
}
.form-control:focus {
	border-color: #4aba70; 
}
.login-form {
	width: 350px;
	margin: 0 auto;
}
.login-form form {
	color: #434343;
    border: 1px solid #e0e0e0;
	border-radius: 1px;
	margin-bottom: 15px;
	background: #fff;
	padding: 30px;
}
.login-form h4 {
	text-align: center;
	font-size: 22px;
	margin-bottom: 20px;
}
.login-form .avatar {
	color: #fff;
	margin: 0 auto 30px;
	text-align: center;
	width: 100px;
	height: 100px;
	border-radius: 50%;
	z-index: 9;
	background: rgb(8,100,197);
	padding: 15px;
	box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
}
.login-form .avatar i {
	font-size: 62px;
}
.login-form .form-group {
	margin-bottom: 20px;
}
.login-form .form-control, .login-form .btn {
	min-height: 40px;
	border-radius: 2px; 
	transition: all 0.5s;
}
.login-form .close {
	position: absolute;
	top: 15px;
	right: 15px;
}
.login-form .btn, .login-form .btn:active {
	background: rgb(8,100,197) !important;
	border: none;
	line-height: normal;
}
.login-form .btn:hover, .login-form .btn:focus {
	background: rgb(6,81,164) !important;
}
.login-form .checkbox-inline {
	float: left;
}
.login-form input[type="checkbox"] {
	position: relative;
	top: 2px;
}
.login-form .forgot-link {
	float: right;
}
.login-form .small {
	font-size: 13px;
}
.login-form a {
	color: rgb(8,100,197);
}
.modal-title{
	color: orange;
}

</style>