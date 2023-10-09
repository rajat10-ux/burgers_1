<!DOCTYPE html>
<html lang="en">

<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
</head>
<style>
        body{
                background-color:lightcyan;

        }
 .container{
        border-radius: 10px;
        width: 600px;
        height: 440px;
        margin: 70px auto;
        text-align: center;
        background-color: lightgoldenrodyellow;
 }
 h3{
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 500;
        font-size: 2rem;
 }
input{
        width: 100%;
        height: 30px;
}
.btn{
        background-color: black;
        color: white;
        cursor: pointer;
}
</style>
<body>

                        <div class="container">
                                <form action="payscript.php" action="post" style="padding:25px">
                                                        <h3 style="text-align:center;font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif">Checkout Form<hr></h3>
                                                        <label for="fname">Full Name</label>
                                                        <input type="text" id="fname" name="name" placeholder="Rajat"><br><br>
                                                         <label for="email">Email</label>
                                                        <input type="text" id="email" name="email" placeholder="abc@gamil.com"><br><br>
                                                        <input type="hidden" value="?php echo 'OID'.rand(100,1000);?>" name"order-id">
                                                        <input type="hidden" value="?php echo 1;?>" name"amount">
                                                        <label for="adr">Address</label>
                                                        <input type="text" id="city" name="addrsss" placeholder="World Street Region"><br><br>
                                                        <!-- <label for="adr">Amount</label>
                                                        <input type="number" id="city" name="amount" placeholder="INR"><br><br> -->
                                                        <input type="submit" value="Pay Now" class="btn">
                                </form>
</body> 

</html>   