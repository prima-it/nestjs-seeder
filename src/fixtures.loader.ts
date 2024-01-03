import {FixturePropFactory, Fixtures} from "./types";
import {UserModel} from "../tests/mocks/models/user.model";
import {PostModel} from "../tests/mocks/models/post.model";

const usersFixtures: Fixtures<UserModel> = {
    model: UserModel,
    definitions: [
        {
            ref: 'post-1',
            definition: {
                firstName: '',
                lastName: '',
                email: '',
                birthday: new Date(),
            }
        }
    ]
}

const postsFixtures: Fixtures<PostModel> = {
    model: PostModel,
    definitions: [
        {
            ref: 'post-1',
            definition: {
                title: '',
                content: '',
            }
        }
    ]
}

type FixturesDefinitionBuilt<Model = unknown> = {
    model: new() => Model,
    fixtures: Record<string, { [Key in keyof Model]: Model[Key] | FixturePropFactory<Model, Model[Key]> }>
}
export class FixturesDefinitionBuilder {
    build<Model = unknown>(fixtures: Fixtures<Model>) : FixturesDefinitionBuilt<Model> {



        return {
            model: fixtures.model,
            : {

            }
        }
    }
}