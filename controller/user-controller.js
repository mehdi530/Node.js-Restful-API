const express = require("express");

var user = [
  {
    id: 1,
    name: "ariya",
  },
  {
    id: 2,
    name: "zahra",
  },
  {
    id: 3,
    name: "mehdi",
  },
];

const showalluser = (req, res) => {
  res.send(user);
};

const userselect = (req, res) => {
  const user_item = user.find((c) => c.id === Number(req.params.id));
  if (!user_item) res.status(404).send("select : your request not found .... ");
  res.send(user_item);
};

const useraddnew = (req, res) => {
  if (!req.body.name || req.body.name.length < 3) {
    res
      .status(404)
      .send(
        " Add new error : name is required and more than 3 character .... "
      );
    return;
  }
  const new_user = [
    {
      id: user.length + 1,
      name: req.body.name,
    },
  ];
  user.push(new_user);
  res.send(new_user);
};

const userupdate = (req, res) => {
  const user_item = user.find((c) => c.id === Number(req.params.id));

  if (!user_item)
    return res.status(404).send("update: your request not found .... ");

  if (!req.body.name || req.body.name.length < 3)
    return res
      .status(400)
      .send(
        " update new error : name is required and more than 3 character .... "
      );

  user_item.name = req.body.name;
  res.send(user_item);
};

const userdelet = (req, res) => {
  const user_item = user.find((c) => c.id === Number(req.params.id));

  if (!user_item)
    return res.status(404).send("update: your request not found .... ");

  const index = user.indexOf(user_item);
  user.splice(index, 1);
  res.send(user_item);
};

module.exports = {
  showalluser,
  useraddnew,
  userdelet,
  userupdate,
  userselect
};
