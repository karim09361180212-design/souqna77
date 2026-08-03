
souqna77
Repository navigation
Code
Issues
Pull requests
Actions
souqna77
/index.html
karim09361180212-design
karim09361180212-design
12 hours ago
167 lines (128 loc) · 2.15 KB

Code

Blame
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>سوقنا - Souqna</title>

<style>
*{
  box-sizing:border-box;
  font-family:Tahoma, Arial;
}

body{
  margin:0;
  background:#f5f5f5;
  color:#222;
}

header{
  background:#0b7a43;
  color:white;
  padding:20px;
  text-align:center;
}

.logo{
  font-size:32px;
  font-weight:bold;
}

.search{
  margin:20px;
  background:white;
  padding:15px;
  border-radius:15px;
}

.search input{
  width:100%;
  padding:15px;
  border:1px solid #ddd;
  border-radius:10px;
  font-size:16px;
}

.container{
  padding:15px;
}

.categories{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:12px;
}

.card{
  background:white;
  padding:15px;
  border-radius:15px;
  text-align:center;
  box-shadow:0 2px 8px #ddd;
}

.icon{
  font-size:30px;
}

.add{
  position:fixed;
  bottom:25px;
  left:25px;
  background:#0b7a43;
  color:white;
  padding:18px 25px;
  border-radius:50px;
  font-weight:bold;
  box-shadow:0 4px 15px #999;
}

footer{
  text-align:center;
  padding:30px;
  color:#777;
}
</style>

</head>

<body>

<header>
<div class="logo">🛒 سوقنا</div>
<div>سوق الإعلانات المبوبة العربية</div>
</header>


<div class="search">
<input placeholder="ابحث عن سيارة، عقار، هاتف...">
</div>


<div class="container">

<h2>الأقسام</h2>

<div class="categories">

<div class="card">
<div class="icon">🚗</div>
سيارات
</div>

<div class="card">
<div class="icon">🏠</div>
عقارات
</div>

<div class="card">
<div class="icon">📱</div>
إلكترونيات
</div>

<div class="card">
<div class="icon">👕</div>
ملابس
</div>

<div class="card">
<div class="icon">🪑</div>
أثاث
</div>

<div class="card">
<div class="icon">💼</div>
وظائف
</div>

</div>


<h2 style="margin-top:30px">
آخر الإعلانات
</h2>

<div class="card">
لا توجد إعلانات حالياً
<br>
كن أول من يضيف إعلانك 🚀
</div>


</div>


<div class="add">
➕ إضافة إعلان
</div>


<footer>
© 2026 سوقنا - Souqna
</footer>


</body>
</html>
