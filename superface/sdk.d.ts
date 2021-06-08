export { VcsUserReposProfile } from "./types/vcs/user-repos";
export { CommunicationSendEmailProfile } from "./types/communication/send-email";
export declare const SuperfaceClient: new () => import("@superfaceai/one-sdk/dist/client/public/client").TypedSuperfaceClient<{
    "communication/send-email": {
        SendEmail: [import("./types/communication/send-email").CommunicationSendEmailSendEmailInput, import("./types/communication/send-email").CommunicationSendEmailSendEmailResult];
    };
    "vcs/user-repos": {
        UserRepos: [import("./types/vcs/user-repos").VcsUserReposUserReposInput, import("./types/vcs/user-repos").VcsUserReposUserReposResult];
    };
}>;
export declare type SuperfaceClient = InstanceType<typeof SuperfaceClient>;
