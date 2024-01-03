import {PostModel} from "../models/post.model";
import {Fixtures} from "../../../src/types";

export default {
    model: PostModel,
    definitions: [
        {
            ref: 'post-1',
            definition: {
                title: () => {
                    return ''
                },
                content: '',
            }
        },
    ]
} as Fixtures<PostModel>
