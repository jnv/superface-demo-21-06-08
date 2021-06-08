export { VcsUserReposProfile } from "./types/vcs/user-repos";
export declare const SuperfaceClient: new () => import("@superfaceai/one-sdk/dist/client/public/client").TypedSuperfaceClient<{
    "vcs/user-repos": {
        UserRepos: [import("./types/vcs/user-repos").VcsUserReposUserReposInput, import("./types/vcs/user-repos").VcsUserReposUserReposResult];
    };
}>;
export declare type SuperfaceClient = InstanceType<typeof SuperfaceClient>;
