const path=require('path')
const express=require('express').Router

const gethome = (req, res) => {
    res.sendFile(path.join(__dirname, "../index.html"));
  }

  module.exports= {gethome}
