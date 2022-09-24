import React, { useState } from 'react'
import { Container, Grid, Paper, TextField } from '@mui/material';
import axios from 'axios';
import './Homepage.scss'

function Homepage() {
  




return (
    <div class="container">

  <ul class="nav nav-pills">
    <li class="active"><a data-toggle="pill" href="#home">Params</a></li>
    <li><a data-toggle="pill" href="#menu1">Headers</a></li>
    <li><a data-toggle="pill" href="#menu2">Body</a></li>
   
  </ul>
  
  <div class="tab-content">
    <div id="home" class="tab-pane fade in active params">
      <h3>Params</h3>
      <p>this is params</p>
    </div>
    <div id="menu1" class="tab-pane fade headers">
      <h3>Headers</h3>
      <p>this is headers</p>
    </div>
    <div id="menu2" class="tab-pane fade body">
      <h3>Body</h3>
      <p>Space for body</p>
    </div>
   
  </div>
  <div>Space for response</div>
</div>


);
}
export default Homepage

