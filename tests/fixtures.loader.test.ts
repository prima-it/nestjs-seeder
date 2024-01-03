import {FixturesLoader} from "../src/fixtures.loader";
import {UserModel} from "./mocks/models/user.model";
import {Fixtures} from "../src/types";

describe('FixturesLoader', () => {
    let fixturesLoader: FixturesLoader;

    beforeEach(() => {
        fixturesLoader = new FixturesLoader();
    });

    describe('load', () => {
        it('should load fixtures correctly', () => {
            const userFixtures: Fixtures<UserModel> = {
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
                            birthday: new Date()
                        }
                    },
                    {
                        prefix: 'user-',
                        range: { from: 2, to: 5 },
                        definition: {
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
            }

            expect(fixturesLoader.load([])).toBe(fixturesLoader); // instance to be returned
            expect(fixturesLoader['fixtures']).toContain(mockFixture); // fixture is stored
        });
    });
});