import { Skill } from '../models/skill.js'

function index(req, res) {
  // use the model to find all skills
  Skill.find({}) // returns a promise -> use .then ..resolves a promise
  .then(skills => {
    // respond by rending a view with skills
    res.render('skills/index', {
      skills: skills,
      time: req.time
    })
  })
  // handle errors
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function newSkill(req, res) {
  // render a view with a form
  res.render('skills/new')
}

function create(req, res) {
req.body.knowledge = false
Skill.create(req.body)
.then(skill => {
  res.redirect('/skills')
})
.catch (error => {
  console.log(error)
  res.redirect('/')
})
}

function show(req, res) {
  Skill.findById(req.params.id) 
  .then(skill => {
    res.render('skills/show', {
    skill: skill
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

function deleteSkill(req, res) {
  Skill.findByIdAndDelete(req.params.id)
  .then(todo => {
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

function edit(req, res) {
  Skill.findById(req.params.id)
  .then(skill =>{
    //render a view 
    res.render('skills/edit',{skill:skill})
  })
  .catch(error => {
    console.log(error)
    res.redirect('/todos')
  })
}

function update(req, res) {
  req.body.knowledge = !!req.body.knowledge
  // find skill by id and update
  Skill.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(skill => {
    //redirect to show view
    res.redirect(`/skills/${skill._id}`)
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

export {
  index,
  newSkill as new,
  create,
  show,
  deleteSkill as delete,
  edit,
  update
}