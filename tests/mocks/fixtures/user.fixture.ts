import {UserModel} from "../models/user.model";
import {Fixtures} from "../../../src/types";

export default {
    model: UserModel,
    definitions: [
        {
            ref: 'user-1',
            definition: {
                firstName: () => {
                    return ''
                },
                lastName: '',
                email: '',
                birthday: undefined
            }
        },
        {
            prefix: 'user-',
            range: { from: 2, to: 5 },
            definition: {
                gender: ({ generator }) => {
                    return generator.person.sexType()
                },
                firstName: ({ generator, current }) => {
                    return generator.person.firstName()
                },
                lastName: ({ generator }) => {
                    return generator.person.lastName()
                },
                email: ({ generator }) => {
                    return generator.person.firstName()
                },
                birthday: undefined
            }
        },
    ]
} as Fixtures<UserModel>
