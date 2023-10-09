<?php 
  $apiKey="rzp_test_yDN6yZUkgAGSKn";
?>
<script src="https://code.jquery.com/jquery-3.5.0.js"></script>
<form action="" method="POST">
<script
     src="https://checkout.razorpay.com/v1/checkout.js"
    data-key="<?php echo$apiKey;?>"
    data-amount="30000"
    data-currency="INR"
    data-id="<?php echo 'OID'.rand(10,100).'END';?>"
    data-buttontext="Payment kar de bhai"
    data-name="blugers"
    data-description="A website for burgers"
    data-image="https://localhost:5500/index.html/burgerlogo.jpeg"
    data-prefill.name="<?php echo $_POST['name'];?>"
    data-prefill.email="<?php echo $_POST['email'];?>
    data-theme.color="#F37254"
></script>
<input type="hidden" custom="HIDDEN ELEMENT" name="hidden">
</form>
<style>
  .razorpay-payment-button{display: none;}
</style>
<script type="text/javascript">
  $(document).ready(function(){
  $('.razorpay-payment-button').click();
  });
</script>



