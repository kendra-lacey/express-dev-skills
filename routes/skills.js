import { Router} from 'express'
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

// GET/SKILLS 

router.get('/', skillsCtrl.index)

// GET /SKILLS/NEW
router.get('/new', skillsCtrl.new)

// GET /SKILLS/ID
router.get('/:id', skillsCtrl.show)

// POST /SKILLS
router.post('/', skillsCtrl.create)

export {
  router
}
