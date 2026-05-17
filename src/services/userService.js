import prisma from '../database/prisma.js'

export async function createUserService(data) {

    return await prisma.user.create({
        data: {
            email: data.email,
            name: data.name
        }
    })
}

export async function getUsersService() {

    return await prisma.user.findMany()
}

export async function updateUserService(id, data) {

    return await prisma.user.update({
        where: {
            id: id
        },
        data: {
            email: data.email,
            name: data.name
        }
    })
}

export async function deleteUserService(id) {

    return await prisma.user.delete({
        where: {
            id: id
        }
    })
}