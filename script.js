<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ElectroStore - Products</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
</head>
<body>

    <header class="header">
        <div class="container">
            <nav class="nav">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="products.html" class="active">Products</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <section class="products">
        <h2 class="section-title">Our Featured Products</h2>
        <div class="product-grid">
            <div class="row">
                <div class="col-sm-4 product-card">
                    <img src="Asstets/laptop.jpg" alt="Donuts" style="margin-left: 10px;">
                    <h3 style="margin-left: 10px;">Donuts</h3>
                    <button class="buy" data-name="Donuts" data-price="99">Buy Now</button>
                </div>
                <div class="col-sm-4 product-card">
                    <img src="Asstets/Smartphone.jpg" alt="Desserts" height="70%" style="margin-left: 10px;">
                    <h3 style="margin-left: 10px;">Desserts</h3>
                    <button class="buy" data-name="Desserts'" data-price="149">Buy Now</button>
                </div>
                <div class="col-sm-4 product-card">
                    <img src="Asstets/he.jpg" alt="Pastry's" height="70%" style="margin-left: 10px;">
                    <h3 style="margin-left: 10px;">Pastry's</h3>
                    <button class="buy" data-name="Pastry's" data-price="79">Buy Now</button>
                </div>
            </div>
        </div>
        <div class="product-grid">
            <div class="row">
                <div class="col-sm-4 product-card">
                    <img src="Asstets/watch.jpg" alt="Marshmallows" style="margin-left: 10px;">
                    <h3 style="margin-left: 10px;">Marshmallows</h3>
                    <button class="buy" data-name="Marshmallows" data-price="149">Buy Now</button>
                </div>
                <div class="col-sm-4 product-card">
                    <img src="Asstets/tv.jpg" alt="Croissant" height="70%" style="margin-left: 10px;">
                    <h3 style="margin-left: 10px;">Croissant</h3>
                    <button class="buy" data-name="Croissant" data-price="139">Buy Now</button>
                </div>
                <div class="col-sm-4 product-card">
                    <img src="Asstets/download.jpg" alt="Cup Cakes" height="70%" style="margin-left: 10px;">
                    <h3 style="margin-left: 10px;">Cup cakes</h3>
                    <button class="buy" data-name="Cup Cakes" data-price="79">Buy Now</button>
                </div>
            </div>
        </div>
    </section>

    <section class="cart" style="background-color:cornflowerblue;margin-top: 20px;">
        <h2 class="section-title">Shopping Cart</h2>
        <ul id="cart-items" class="list-group"></ul>
        <p id="total-price" class="mt-3">Total: $0</p>
    </section>

    <footer class="footer">
        <p>&copy; 2024 ElectroStore. Crafted with ❤️ by Creative Devs.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>