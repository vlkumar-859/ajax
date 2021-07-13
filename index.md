<html>
    <head>
        <title>sample ajax</title>
        <style>
            body{
                text-align: center;
                background-color: grey;
            }
            h2{
                width: 500px;
                border: solid 2px black;
                border-radius: 20px;
                margin: auto;
                margin-bottom: 50px;
                margin-top: 50px;
            }
            div{
                width: 500px;
                height: 500px;
                margin: auto;
                border: solid 2px black;
                text-align: center;
                border-radius: 100px;
                margin-top: 30px;
            }
            img{
                margin: auto;
                height: 500px;
                width: 500px;
                border-radius: 100px;
            }
            button{
                width: 70px;
                border: solid 3px black;
                
            }
        </style>
    </head>
    <body>
        <h2>search for the beatiful images of dogs..</h2>
        <button onclick="fetch()">fetch</button>
        <div>
            <img id="res-img" >
        </div>

        <script src="script.js"></script>
    </body>
</html>
