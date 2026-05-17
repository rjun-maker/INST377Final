const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const supabaseClient = require('@supabase/supabase-js');

const app = express();
const port = 3000;
dotenv.config();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey);

app.get("/test", async (req, res) => {
  const result = await supabase.from("customer").select("*")

  res.json(result);
});

app.listen(port, () => {
  console.log(`App is available on port: ${port}`);
});