import { Router} from 'express'
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

// GET/SKILLS 

router.get('/', skillsCtrl.index)

// GET /SKILLS/NEW
router.get('/new', skillsCtrl.new)

// GET /SKILLS/:ID
router.get('/:id', skillsCtrl.show)

// GET/SKILLS/:ID/EDIT
router.get('/:id/edit', skillsCtrl.edit)

// POST /SKILLS
router.post('/', skillsCtrl.create)

// DELETE /SKILLS/:ID
router.delete('/:id', skillsCtrl.delete)

// PUT/SKILLS/:ID
router.put('/:id', skillsCtrl.update)

export {
  router
}
