/*
dibeginner backend ini, kita bisa bikin CRUD dan API
npm init
npm i express
npm i body-parser
npm i nodemon
tambahkan pada package.json "start": "nodemon index.js",
lalu tambahkan pada index.js 
untuk mendeclare library yang dipakai
lalu membuat port untuk server
npm start

untuk terhubung ke database
npm i pg
bikin folder config
bikin folder model

npm i helmet
npm i xss-clean
npm init @eslint/config
(
    pilih ketiga
    commonJS
    none js
    no
    spasi yang browser
    spasi yang node
    guide
    standard
    json
    yes
    npm
)
npx eslint . (untuk mengecek kesalahan codingan kita)
npx eslint --fix index.js (untuk membenarkan kodingan secara otomatis)
npx eslint --fix . (membenarkan langsung secara otomatis)

(buat keamanan)
npm i dotenv
index.js
db.js
.env


npm i cors
tambah index.js

(biar gak ke ambil)
.gitignore

`
UPDATE users SET
name = COALESCE('${name}', name),
email = COALESCE('${email}', email),
phone = COALESCE('${phone}', phone),
password = COALESCE('${password}', password)
WHERE id = ${id}
`
helper ( untuk env dan respose )
npm i bcrypt ( buat hash password )

*/
