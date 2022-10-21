<script>

</script>
<template>
    
<h1>PAGE REGISTER</h1>
<div class="login-form">    
    <form>
		<div class="avatar"><i class="material-icons">&#xE7FF;</i></div>
    	<h4 class="modal-title">New? Register here </h4>
        <div class="form-group">
            <input type="text" name="email" class="form-control"  placeholder="Email" required="required">
        </div>
        <div class="form-group">
            <input type="password" name="password" class="form-control"  placeholder="Password" required="required">
        </div>
        <input name="button" class="btn btn-primary btn-block btn-lg" value="Register">            
    </form>			
    <div class="text-center small">You already have an account? <a><router-link :to="{name: 'login'}"><b>Sign in</b></router-link></a></div>
</div>
</template>
<style>
   
</style>