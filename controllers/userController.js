import {
    createUserService,
    getUsersService,
    updateUserService,
    deleteUserService
} from '../services/userService.js'

export async function createUser(req, res) {

    const user = await createUserService(req.body)

    res.status(200).json(user)
}

export async function getUsers(req, res) {

    const users = await getUsersService()

    res.status(201).json(users)
}

export async function updateUser(req, res) {

    const user = await updateUserService(
        req.params.id,
        req.body
    )

    res.status(202).json(user)
}

export async function deleteUser(req, res) {

    await deleteUserService(req.params.id)

    res.status(203).json({
        message: 'User deletado'
    })
}