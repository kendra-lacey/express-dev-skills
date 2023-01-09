import { Skill } from '../models/skill.js'

function index (req, res) {
  // use the model to find all skills
  Skill.find({}) // returns a promise -> use .then
  .then(skills => {
    // respond by rending a view with skills
    res.rendeer('skills/index', {
      skills: skills
    })
  })
  // handle errors
  .catch (error => {
    console.log(error)
    res.redirect('/')
  })
}


export {
  index,
}