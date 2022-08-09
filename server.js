const path = require("path")
const express = require("express")
const app = express()
const cors = require('cors');

app.use(express.static(path.join(__dirname, "public")))

app.use(cors());
var restaurant;
const { MongoClient, ServerApiVersion } = require('mongodb');
const { async } = require("regenerator-runtime");
const uri = "mongodb+srv://testdb:testdb123@cluster0.2yklpfd.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

app.get('/names', (req, res) => {
    client.connect(err => {
        const collection = client.db("sample_restaurants").collection("restaurants");
       // console.log(collection);
       
       // perform actions on the collection object
       const query = { cuisine :  'Other' };
       //const restaurant =collection.findOne(query).then(console.log("hello")).catch();
       const cursor=collection.find(query);
       let restlist=[];
       cursor.forEach(rest => {console.log(rest.name, rest.cuisine )
      restlist.push(rest.name);
    })
       .then( ()=>{
        res.json({
            //message: 'Hello World'
            restlist 
        });
        client.close()})
       .catch(err=>console.log(err));
        
        
      });
   // res.json({
    //    message: 'Hello World'
   // });
});

app.get('/name/:name', (req, res) => {
    let name = req.params.name;
	
    res.json({
        message: `Hello ${name}`
    });
});



    app.get('/American', async (req, res) => {
        //let restname = req.params.restname;
        //var restaurant;
        //var restlist=[];
        const uri = "mongodb+srv://testdb:testdb123@cluster0.2yklpfd.mongodb.net/?retryWrites=true&w=majority";
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
         try{
       // client.connect(err => {
            //const collection = client.db("sample_restaurants").collection("restaurants");
            const database = client.db('sample_restaurants');
          const restaurants = database.collection('restaurants');
           // console.log(collection);
           
           // perform actions on the collection object
           const query = { cuisine :  'American' };
           //const restaurant =collection.findOne(query).then(console.log("hello")).catch();
           const cursor= restaurants.find(query);
          var restlist=[];
          await cursor.forEach(rest => {
            //console.log(rest.name, rest.cuisine )
            //console.log(rest.name, "name");
          restlist.push(rest.name);   })
            //console.log(restlist,"list")
          // .then( ()=>{   //then
            res.json(
                //message: 'Hello World'
               { restlist}
            );
            console.log(restlist,"list")
          //  client.close()
       // })  //then
            
          //  .catch(err=>console.log(err))
            
        } //try
        catch{err=>console.log(err)}
            finally{
                client.close() 
            }
    
        //  }); // connect
       // res.json({
        //    message: 'Hello World'
       // });  
        
    
    
    
});

app.get('/Indian', (req, res) => {
    client.connect(err => {
        const collection = client.db("sample_restaurants").collection("restaurants");
       // console.log(collection);
       
       // perform actions on the collection object
       const query = { cuisine :  'Indian' };
       //const restaurant =collection.findOne(query).then(console.log("hello")).catch();
       const cursor=collection.find(query);
       let restlist=[];
       cursor.forEach(rest => {console.log(rest.name, rest.cuisine )
      restlist.push(rest.name);
    })
       .then( ()=>{
        res.json({
            //message: 'Hello World'
            restlist 
        });
        client.close()})
       .catch(err=>console.log(err));
        
        
      });
   // res.json({
    //    message: 'Hello World'
   // });
});

app.get('/Pakistani', (req, res) => {
    client.connect(err => {
        const collection = client.db("sample_restaurants").collection("restaurants");
       // console.log(collection);
       
       // perform actions on the collection object
       const query = { cuisine :  'Pakistani' };
       //const restaurant =collection.findOne(query).then(console.log("hello")).catch();
       const cursor=collection.find(query);
       let restlist=[];
       cursor.forEach(rest => {console.log(rest.name, rest.cuisine )
      restlist.push(rest.name);
    })
       .then( ()=>{
        res.json({
            //message: 'Hello World'
            restlist 
        });
        client.close()})
       .catch(err=>console.log(err));
        
        
      });
   // res.json({
    //    message: 'Hello World'
   // });
});

app.get('/restaurant/:restname',  (req, res) => {
    let restname = req.params.restname;
    
    const uri = "mongodb+srv://testdb:testdb123@cluster0.2yklpfd.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// Replace the uri string with your MongoDB deployment's connection string.
async function run() {
    try {
      const database = client.db('sample_restaurants');
      const restaurants = database.collection('restaurants');
      // Query for a movie that has the title 'The Room'
      const query = { name: `${restname}` };
      restaurant = await restaurants.findOne(query);
        // since this method returns the matched document, not a cursor, print it directly
      console.log(restaurant);
      

    } 
    finally {
        await client.close();
      }
    }
  
  
  
  run().catch(console.dir);
  
      res.json(restaurant)
  



//run().catch(console.dir);

    
}); //  end point close /restaurant/restname
app.get('/hotel/:restname', async (req, res) => {
    let restname = req.params.restname;
    var restaurant;
    
    const uri = "mongodb+srv://testdb:testdb123@cluster0.2yklpfd.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// Replace the uri string with your MongoDB deployment's connection string.
//async function run() {
    try {
      const database = client.db('sample_restaurants');
      const restaurants = database.collection('restaurants');
  
      
      // Query for a movie that has the title 'The Room'
      const query = { name: `${restname}` };
  
      
  
      restaurant = await restaurants.findOne(query);
  
      // since this method returns the matched document, not a cursor, print it directly
      console.log(restaurant);
      //await client.close();
      res.json(restaurant)
    } catch{
      //await client.close();
      console.dir
    }finally{
        await client.close();
        //console.dir
    }
  //}  //end run



//catch{console.dir};

    //res.json(restaurant)

}); //  end point close /hotel/restname


app.get('/Italian', async (req, res) => {
    //let restname = req.params.restname;
    //var restaurant;
    //var restlist=[];
    const uri = "mongodb+srv://testdb:testdb123@cluster0.2yklpfd.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
     try{
   // client.connect(err => {
        //const collection = client.db("sample_restaurants").collection("restaurants");
        const database = client.db('sample_restaurants');
      const restaurants = database.collection('restaurants');
       // console.log(collection);
       
       // perform actions on the collection object
       const query = { cuisine :  'Italian' };
       //const restaurant =collection.findOne(query).then(console.log("hello")).catch();
       const cursor= restaurants.find(query);
      var restlist=[];
      await cursor.forEach(rest => {
        //console.log(rest.name, rest.cuisine )
        //console.log(rest.name, "name");
      restlist.push(rest.name);   })
        //console.log(restlist,"list")
      // .then( ()=>{   //then
        res.json(
            //message: 'Hello World'
           { restlist}
        );
        console.log(restlist,"list")
      //  client.close()
   // })  //then
        
      //  .catch(err=>console.log(err))
        
    } //try
    catch{err=>console.log(err)}
        finally{
            client.close() 
        }

    //  }); // connect
   // res.json({
    //    message: 'Hello World'
   // });  
    
});


app.get('/cuisine', (req, res) => {
   // let cuisine = req.params.name;
	console.log("cuisine")
    res.json({
        American: "American",
        Pakistani: "Pakistani",
        Indian: "Indian",
        Italian: "Italian"
    });
});
app.get('/food', async(req, res) => {
    // let cuisine = req.params.name;
     console.log("cuisine")
     res.json(({
         American: "American",
         Pakistani: "Pakistani",
         Indian: "Indian",
         Italian: "Italian"
     }));
 });
 



app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"))
});

app.listen(process.env.PORT || 3000);
