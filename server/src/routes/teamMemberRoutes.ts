import express from 'express';
import {
    createTeamMember,
    deleteTeamMember,
    getTeamMember,
    getTeamMembers,
    getTeamMembersForService,
    updateTeamMember
} from "../controllers/teamMemberController";

const router = express.Router();

router.get('/', getTeamMembers);
router.get('/service/:service_id', getTeamMembersForService);
router.get('/', getTeamMember);
router.post('/', createTeamMember);
router.put('/:id', updateTeamMember);
router.delete('/:id', deleteTeamMember);

export default router;
